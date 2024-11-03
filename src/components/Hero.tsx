import { Github, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')"
        }}
      />
      <AnimatedCard>
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#F7F8F8] mb-6">
            Zein Alamah
          </h1>
          <p className="text-2xl md:text-3xl text-[#F7F8F8]/80 mb-4">
            Strategist | Economist | Data Analyst
          </p>
          <p className="text-xl md:text-2xl text-[#F7F8F8]/60 italic mb-12">
            Generalists Rule The World. Keep Learning.
          </p>
          <div className="flex justify-center gap-8">
            <a 
              href="https://linktr.ee/zein.alamah"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F7F8F8] hover:text-[#2B3187] transition-colors"
            >
              <LinkIcon size={28} />
            </a>
            <a 
              href="https://github.com/zeinalamah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F7F8F8] hover:text-[#2B3187] transition-colors"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zein-alamah/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F7F8F8] hover:text-[#2B3187] transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:zein@zeinalamah.com"
              className="text-[#F7F8F8] hover:text-[#2B3187] transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </AnimatedCard>
    </section>
  );
};