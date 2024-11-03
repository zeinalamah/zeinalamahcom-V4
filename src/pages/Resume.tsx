import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Download, ChevronDown } from 'lucide-react';
import { AnimatedCard } from '../components/AnimatedCard';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [activeEducation, setActiveEducation] = useState<number | null>(null);
  const [activeCertification, setActiveCertification] = useState<number | null>(null);
  const [activePublication, setActivePublication] = useState<number | null>(null);

  const experiences = [
    {
      title: "Independent Consultant",
      company: "Self-Employed",
      period: "April 2024 - Nov 2024",
      details: [
        "Created strategic plans for F&B corporations",
        "Developed tokenomics strategies using Python",
        "Grew project following to 4,500 members",
        "Led international remote teams"
      ]
    },
    {
      title: "Business Strategy Consultant",
      company: "Eco-Vector Consultancy",
      period: "Oct 2023 - April 2024",
      details: [
        "Designed impact evaluation methodology",
        "Created 100+ metrics for AlUla's Social Development Strategy",
        "Led strategic planning sessions"
      ]
    },
    {
      title: "Research Assistant",
      company: "Lebanese American University",
      period: "Sep 2022 - May 2024",
      details: [
        "Published 3 peer-reviewed articles",
        "Developed Stata scripts for econometric analysis",
        "Conducted data analysis using Python"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Arts in Applied Economics",
      institution: "Lebanese American University",
      period: "2022 - 2024",
      details: "Research focus: Ethereum's Take on the Monday Effect"
    },
    {
      degree: "Bachelor of Arts in Economics",
      institution: "Lebanese University",
      period: "2019 - 2022",
      details: "Thesis: The Impact of Ethereum on Portfolio Performance"
    }
  ];

  const certifications = [
    {
      title: "Financial Modeling and Valuation Analyst (FMVA)",
      organization: "Corporate Finance Institute",
      date: "Jan 2020"
    },
    {
      title: "Chartered Financial Analyst Level 1",
      organization: "CFA Institute",
      date: "Aug 2019",
      details: "Passed the CFA Level 1 exam"
    }
  ];

  const awards = [
    {
      title: "IMF Youth Fellowship",
      description: "Selected to attend the 2023 IMF and World Bank Annual Meetings",
      year: "2023"
    },
    {
      title: "LAU Outstanding Researcher Award",
      description: "Outstanding Researcher in Social Science",
      year: "2024"
    }
  ];

  const publications = [
    {
      title: "The role of international research collaboration and faculty related factors in publication citations: Evidence from Lebanon",
      journal: "Economies",
      date: "2024",
      link: "https://www.mdpi.com/2227-7099/11/3/90",
      abstract: "This study examines the impact of international research collaboration on academic publication citations in Lebanon..."
    },
    {
      title: "Does twitter economic uncertainty matter for wheat prices?",
      journal: "Economics Letters",
      date: "2024",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0165176523004895",
      abstract: "This research investigates the relationship between social media-driven economic uncertainty and commodity prices..."
    },
    {
      title: "Is the Price of Ether Driven by Demand or Pure Speculation?",
      journal: "Computational Economics",
      date: "2024",
      link: "https://link.springer.com/article/10.1007/s10614-024-10658-6",
      abstract: "This paper analyzes the driving factors behind Ethereum's price movements, examining the roles of utility demand..."
    }
  ];

  const cardClasses = "p-6 bg-[#2B3187]/20 hover:bg-[#2B3187] rounded-xl transition-all cursor-pointer border border-[#2B3187]/20";
  const skillClasses = "px-4 py-2 bg-white text-black font-bold rounded-lg transition-all hover:bg-[#F7F8F8]";

  const renderExpandableCard = (item: any, index: number, activeIndex: number | null, setActiveIndex: (index: number | null) => void) => (
    <AnimatedCard key={index}>
      <div 
        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        className={cardClasses}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-[#F7F8F8]">{item.title || item.degree}</h3>
            <p className="text-[#F7F8F8]/60">{item.company || item.institution || item.organization}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F7F8F8]/60 text-sm">
              {item.period || item.date}
            </span>
            {item.details && (
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="text-[#F7F8F8]" />
              </motion.div>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeIndex === index && item.details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              {Array.isArray(item.details) ? (
                <ul className="space-y-2">
                  {item.details.map((detail: string, i: number) => (
                    <li key={i} className="text-[#F7F8F8]/80 flex items-start">
                      <span className="text-[#F7F8F8] mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#F7F8F8]/80">{item.details}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedCard>
  );

  return (
    <div className="min-h-screen bg-[#0E0F1F] py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Name */}
        <section className="mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-[#F7F8F8] mb-6">
            Zein Alamah
          </h1>
         <p className="text-2xl text-[#F7F8F8]/80 text-center mb-6">
    Strategist | Economist | Data Analyst
</p>
<p className="text-xl text-[#F7F8F8]/80 text-center max-w-3xl mx-auto">
    Connecting different fields of knowledge is essential to solving complex challenges. By integrating strategic thinking with data-driven insights, I create innovative solutions that drive business growth and operational efficiency.
</p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Professional Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => renderExpandableCard(exp, index, activeExperience, setActiveExperience))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => renderExpandableCard(edu, index, activeEducation, setActiveEducation))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => renderExpandableCard(cert, index, activeCertification, setActiveCertification))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Awards & Recognition</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <AnimatedCard key={index}>
                <div className={cardClasses}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-[#F7F8F8]">{award.title}</h3>
                      <p className="text-[#F7F8F8]/80 mt-2">{award.description}</p>
                    </div>
                    <span className="text-[#F7F8F8]/60 text-sm">{award.year}</span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Skills & Expertise</h2>
          <div className="space-y-8">
            <AnimatedCard>
              <div className={cardClasses}>
                <h3 className="text-xl font-bold text-[#F7F8F8] mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Stata', 'Financial Modeling', 'Econometric Analysis', 'Data Analysis', 'Academic Writing'].map((skill) => (
                    <span key={skill} className={skillClasses}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className={cardClasses}>
                <h3 className="text-xl font-bold text-[#F7F8F8] mb-4">Business Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['Strategic Planning', 'Research', 'Project Management', 'Negotiations', 'Team Leadership'].map((skill) => (
                    <span key={skill} className={skillClasses}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#F7F8F8] mb-6">Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <AnimatedCard key={index}>
                <div 
                  onClick={() => setActivePublication(activePublication === index ? null : index)}
                  className={cardClasses}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-bold text-[#F7F8F8] hover:text-black transition-colors block mb-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {pub.title}
                      </a>
                      <p className="text-[#F7F8F8]/60">
                        {pub.journal} • {pub.date}
                      </p>
                      <p className="text-[#F7F8F8]/80 text-sm mt-2">
                        {activePublication === index ? 'Abstract:' : 'Click to view abstract'}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: activePublication === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="text-[#F7F8F8]" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {activePublication === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <p className="text-[#F7F8F8] text-sm sm:text-base leading-relaxed">
                          {pub.abstract}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <AnimatedCard>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#F7F8F8] mb-8">Get in Touch</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:zein@zeinalamah.com"
                  className="flex items-center gap-2 px-6 py-3 bg-[#2B3187]/20 hover:bg-[#F7F8F8] text-[#F7F8F8] hover:text-black rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a 
                  href="https://www.linkedin.com/in/zein-alamah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#2B3187]/20 hover:bg-[#F7F8F8] text-[#F7F8F8] hover:text-black rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://drive.google.com/file/d/17YpltdbVHepMtExEhBNyzNyL9rKXkwvo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#2B3187]/20 hover:bg-[#F7F8F8] text-[#F7F8F8] hover:text-black rounded-lg transition-colors"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedCard>
        </section>
      </div>
    </div>
  );
};

export default Resume;