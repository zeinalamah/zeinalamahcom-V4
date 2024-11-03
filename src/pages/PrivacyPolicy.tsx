import { motion } from 'framer-motion';
import { AnimatedCard } from '../components/AnimatedCard';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0E0F1F] py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedCard>
          <h1 className="text-4xl font-bold text-[#F7F8F8] mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-[#F7F8F8]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Analytics</h2>
              <p className="mb-4">
                This website uses Google Analytics to understand how visitors interact with our content. 
                The following information may be collected:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>Your browser type and operating system</li>
                <li>Your country or region</li>
                <li>How you reached our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Cookie Usage</h2>
              <p className="mb-4">
                We use only essential cookies from Google Analytics to improve your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>_ga: Used to distinguish users (expires after 2 years)</li>
                <li>_ga_[ID]: Used to maintain session status (expires after 2 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Data Protection</h2>
              <p>
                We do not collect any personal information beyond anonymous analytics data. 
                Your data is processed by Google Analytics in accordance with their 
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2B3187] hover:text-[#F7F8F8] mx-1"
                >
                  privacy policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opt-out of analytics tracking using browser settings or extensions</li>
                <li>Request information about your data</li>
                <li>Request deletion of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Contact</h2>
              <p>
                For any privacy-related questions, please contact{' '}
                <a 
                  href="mailto:privacy@zeinalamah.com" 
                  className="text-[#2B3187] hover:text-[#F7F8F8]"
                >
                  privacy@zeinalamah.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F7F8F8] mb-4">Updates</h2>
              <p>
                This privacy policy was last updated on March 15, 2024. We may update this policy 
                from time to time to reflect changes in our practices or for legal requirements.
              </p>
            </section>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default PrivacyPolicy;