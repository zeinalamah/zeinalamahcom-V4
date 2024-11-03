import { Link } from 'react-router-dom';
import { AnimatedCard } from '../components/AnimatedCard';

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-[#0E0F1F] py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedCard>
          <h1 className="text-4xl font-bold text-[#F7F8F8] mb-8">Sitemap</h1>
          
          <div className="space-y-8 text-[#F7F8F8]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-[#2B3187] hover:text-[#F7F8F8]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-[#2B3187] hover:text-[#F7F8F8]">
                    Resume
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Legal Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-[#2B3187] hover:text-[#F7F8F8]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[#2B3187] hover:text-[#F7F8F8]">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-[#2B3187] hover:text-[#F7F8F8]">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/sitemap.xml"
                    className="text-[#2B3187] hover:text-[#F7F8F8]"
                  >
                    XML Sitemap
                  </a>
                </li>
                <li>
                  <a 
                    href="/robots.txt"
                    className="text-[#2B3187] hover:text-[#F7F8F8]"
                  >
                    Robots.txt
                  </a>
                </li>
                <li>
                  <a 
                    href="/security.txt"
                    className="text-[#2B3187] hover:text-[#F7F8F8]"
                  >
                    Security.txt
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Sitemap;