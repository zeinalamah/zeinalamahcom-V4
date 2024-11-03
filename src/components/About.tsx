import { AnimatedCard } from './AnimatedCard';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedCard>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img 
                src="/zein-alamah.jpg"
                alt="Zein Alamah"
                className="rounded-2xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-[#F7F8F8] mb-8">About Me</h2>
              <div className="prose prose-lg text-[#F7F8F8]/80">
<p className="mb-6">
    With dual master's degrees in <em>Applied Economics</em> and <em>Finance</em>, Zein Alamah is a strategic business consultant and data analyst at the intersection of economics, finance, and technology. Proficient in econometric analysis, Python, and Stata, Zein leverages his technical expertise to drive data-driven decision-making and unlock business potential.
</p>
<p className="mb-6">
    As a consultant, Zein develops comprehensive strategic frameworks. He recently devised operational strategies for a major F&B organization and designed impact evaluation methodologies for <em>AlUla's Social Development Strategy</em>. His innovative approach to problem-solving enables him to identify unique opportunities and foster transformative change.
</p>
<p className="mb-6">
    In academia, Zein served as a Research Assistant at the <em>Lebanese American University</em> and published three peer-reviewed articles in journals such as <em>Computational Economics</em> and <em>Economics Letters</em>. His research on cryptocurrency pricing, social media impacts on commodity markets, and international research collaboration earned him the LAU Outstanding Research Award, bridging the gap between academic rigor and practical application.
</p>
<p>
    <strong>"Generalists rule the world. Keep learning."</strong> This statement reflects Zein's approach to business transformation – where multidisciplinary thinking and continuous learning create the foundation for innovation in today's dynamic business landscape.
</p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};