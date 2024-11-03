import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[#2B3187]/20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          <div>
            <h3 className="text-[#F7F8F8] font-bold mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <Link 
                to="/"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link 
                to="/resume"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Resume
              </Link>
              <Link 
                to="/privacy-policy"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Terms
              </Link>
              <Link 
                to="/cookie-policy"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Cookies
              </Link>
              <Link 
                to="/sitemap"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Sitemap
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#F7F8F8] font-bold mb-4">Contact</h3>
            <div className="grid gap-y-2">
              <a 
                href="mailto:zein@zeinalamah.com"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                zein@zeinalamah.com
              </a>
              <a 
                href="https://www.linkedin.com/in/zein-alamah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#F7F8F8] font-bold mb-4">Security</h3>
            <div className="grid gap-y-2">
              <a 
                href="/security.txt"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Security Policy
              </a>
              <a 
                href="mailto:security@zeinalamah.com"
                className="text-[#F7F8F8]/60 hover:text-[#F7F8F8] transition-colors whitespace-nowrap"
              >
                Report an Issue
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-[#F7F8F8]/60 pt-4 border-t border-[#2B3187]/20">
          <p>© {currentYear} Zein Alamah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};