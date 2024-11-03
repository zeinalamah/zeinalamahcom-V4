import { AnimatedCard } from '../components/AnimatedCard';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0E0F1F] py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedCard>
          <h1 className="text-4xl font-bold text-[#F7F8F8] mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-[#F7F8F8]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms of Use 
                and our Privacy Policy. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">2. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, 
                and software, is the property of Zein Alamah and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">3. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily view the materials on this website for personal, 
                non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>
              <p>Under this license, you may not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">4. Disclaimer</h2>
              <p>
                The materials on this website are provided on an 'as is' basis. Zein Alamah makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">5. Limitations</h2>
              <p>
                In no event shall Zein Alamah be liable for any damages arising out of the use or 
                inability to use the materials on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">6. Revisions</h2>
              <p>
                Zein Alamah may revise these Terms of Use at any time without notice. By using this 
                website, you agree to be bound by the current version of these Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">7. Contact</h2>
              <p>
                For any questions regarding these Terms of Use, please contact{' '}
                <a 
                  href="mailto:legal@zeinalamah.com" 
                  className="text-[#2B3187] hover:text-[#F7F8F8]"
                >
                  legal@zeinalamah.com
                </a>
              </p>
            </section>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Terms;