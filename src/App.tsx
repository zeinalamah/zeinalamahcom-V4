import { HashRouter  as Router, Routes, Route, Link } from 'react-router-dom';


import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PublicationCard } from './components/PublicationCard';
import { MobileMenu } from './components/MobileMenu';
import { AnimatedCard } from './components/AnimatedCard';
import { CookieConsent } from './components/CookieConsent';
import { Footer } from './components/Footer';
import Resume from './pages/Resume';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Reset cookie consent for testing
    localStorage.removeItem('cookiesAccepted');
    setShowCookieConsent(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const publications = [
    {
      title: "The role of international research collaboration and faculty related factors in publication citations: Evidence from Lebanon",
      journal: "Economies",
      date: "2023",
      link: "https://www.mdpi.com/2227-7099/11/3/90",
      abstract: "The importance of international collaboration in the research field is well-documented, but its impact on the number of citations received by research publications is not fully understood. This paper aims to fill this gap by examining the relationship between international collaboration and other factors and the number of citations for research publications. Using data from the Lebanese American University, the authors employ ordinary least squares estimation to analyze the impact of international collaboration on the number of citations while controlling for various publications, authorship, university, and socioeconomic factors. The results show that international collaboration has a statistically significant positive effect on the number of citations. Based on these findings, we recommend that institutions and researchers seeking to increase the number of citations for their publications should focus on building and maintaining strong international collaborations and publishing in high-quality journals. This paper provides evidence of the importance of international collaboration for researchers seeking to increase the reach and impact of their publications. It also provides insights into the relevance of other factors, such as the number of publications, age, and journal rank."
    },
    {
      title: "Does twitter economic uncertainty matter for wheat prices?",
      journal: "Economics Letters",
      date: "2024",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0165176523004895",
      abstract: "This paper investigates the relationship between wheat prices, energy prices (crude oil and natural gas), and economic uncertainty, represented by the Twitter Economic Uncertainty Index (TEU). Despite existing literature emphasizing the significant impact of energy costs on agricultural commodity prices, this research uncovers no significant short-run relationship between the price shocks in the crude oil or natural gas markets and wheat prices. Similarly, fluctuations in the TEU USA do not reliably predict changes in wheat prices. This paper enriches the field by utilizing time series econometric analysis with a Structural Vector Auto-Regressive model with an exogenous variable (SVARX), incorporating four endogenous variables: wheat, crude oil, natural gas, and economic uncertainty from mid-2011 to mid-2022, and an exogenous dummy variable to account for an existing structural break. The findings present new insights into the complex interplay between these variables within a single framework and expand our understanding of the impact of economic uncertainty derived from Twitter data on agricultural commodity prices. Policymakers and researchers are advised to continue exploring these relationships over different periods, geographical contexts, and events to strengthen food security strategies by gaining a nuanced understanding of agricultural commodity prices."
    },
    {
      title: "Is the Price of Ether Driven by Demand or Pure Speculation?",
      journal: "Computational Economics",
      date: "2024",
      link: "https://link.springer.com/article/10.1007/s10614-024-10658-6",
      abstract: "This research, utilizing weekly data from 2017 to 2023 (298 observations), seeks to answer the question, “Is the Price of Ether Driven by Demand or Pure Speculation?” It investigates the determinants of Ether price by focusing on the role of Gas price in Wei, Ethereum Network Utilization, and Bitcoin price. The study demonstrates that Network Utilization, indicative of demand, significantly influences Ether’s price, suggesting a demand-driven price dynamic over pure speculation. Conversely, Gas and Bitcoin prices exert a less pronounced impact. Despite the constraints of a specific timeframe and limited variables, the research provides crucial insights into Ether’s pricing dynamics. The revealed dependence of Ether’s price on actual network demand and utilization supports the argument that Ether exhibits commodity-like characteristics, contributing to the ongoing debate on Ether’s status as a commodity or a security. The utility of econometric methodologies, especially the SVAR model, is highlighted in exploring relationships within the Ethereum ecosystem. The study holds significant implications for stakeholders in the Ethereum ecosystem and the broader cryptocurrency market, and it encourages future research to consider additional price determinants and employ diverse econometric models."
    }
  ];

  const MainContent = () => (
    <>
      <Hero />
      <About />

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 bg-[#0E0F1F]/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-12">Recent Publications</h2>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <PublicationCard {...pub} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedCard>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#F7F8F8] mb-8">Get in Touch</h2>
              <p className="text-[#F7F8F8]/80 mb-8">
                Interested in collaboration or have questions about my research? Feel free to reach out.
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="mailto:zein@zeinalamah.com"
                  className="px-6 py-3 bg-[#2B3187]/20 hover:bg-[#2B3187] text-[#F7F8F8] hover:text-black rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a 
                  href="https://www.linkedin.com/in/zein-alamah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#2B3187]/20 hover:bg-[#2B3187] text-[#F7F8F8] hover:text-black rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-[#0E0F1F]">
        {/* Header */}
        <header className="fixed top-0 w-full bg-[#0E0F1F]/80 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Logo />
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-[#F7F8F8]">
              <Link to="/" onClick={scrollToTop} className="hover:text-[#2B3187] transition-colors">
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-[#2B3187] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="hover:text-[#2B3187] transition-colors"
              >
                Publications
              </button>
              <Link to="/resume" className="hover:text-[#2B3187] transition-colors">
                Resume
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-[#2B3187] transition-colors"
              >
                Contact
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#F7F8F8]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
          {/* Mobile Menu */}
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        
        {showCookieConsent && <CookieConsent />}
      </div>
    </Router>
  );
};

export default App;