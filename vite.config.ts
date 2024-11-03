import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isGithub = env.VITE_DEPLOY_TARGET === 'github';

  return {
    // Dynamic base URL based on deployment target
    base: isGithub ? '/zeinalamahcom-V4/' : '/',
    
    plugins: [react()],
    
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Permissions-Policy': 'interest-cohort=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      }
    },
    
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'animations': ['framer-motion'],
          }
        }
      },
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  };
});