import { AnimatedCard } from '../components/AnimatedCard';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#0E0F1F] py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedCard>
          <h1 className="text-4xl font-bold text-[#F7F8F8] mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-[#F7F8F8]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently and 
                provide valuable information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies from Google Analytics to help analyze how visitors use our site. 
                These cookies collect information about:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The pages you visit</li>
                <li>How long you spend on each page</li>
                <li>How you got to the site</li>
                <li>What you click on while you're visiting the site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#F7F8F8] mb-2">Analytics Cookies</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>_ga: Expires after 2 years</li>
                    <li>_ga_[ID]: Expires after 2 years</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p>
                To opt out of being tracked by Google Analytics across all websites, visit{' '}
                <a 
                  href="http://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B3187] hover:text-[#F7F8F8]"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. The latest version will always be 
                available on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact{' '}
                <a 
                  href="mailto:privacy@zeinalamah.com" 
                  className="text-[#2B3187] hover:text-[#F7F8F8]"
                >
                  privacy@zeinalamah.com
                </a>
              </p>
            </section>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default CookiePolicy;