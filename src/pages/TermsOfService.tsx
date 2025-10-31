import Navbar from '@/components/Navbar';
import SEOHelmet from '@/components/SEOHelmet';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <SEOHelmet 
        title="Terms of Service - Track My Academy"
        description="Read the terms of service for Track My Academy's sports academy management platform."
        keywords="terms of service, user agreement, Track My Academy terms"
        canonical="/terms-of-service"
      />
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our sports academy management platform.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 flex-grow">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-left space-y-12 md:space-y-16">
              
              {/* Introduction */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  These <strong>Terms of Service</strong> ("Terms") constitute a legally binding agreement between you and CP Infotech 
                  ("Track My Academy," "we," "us," or "our") regarding your use of the Track My Academy platform and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Our Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">SaaS Platform</h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>Sports academy management system</li>
                      <li>Player and coach management tools</li>
                      <li>Performance tracking and analytics</li>
                      <li>Communication and collaboration features</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">Additional Features</h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>Data export and reporting</li>
                      <li>Mobile application access</li>
                      <li>Customer support and training</li>
                      <li>Regular updates and improvements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">User Responsibilities</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-4">You May:</h3>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200 shadow-md">
                      <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Use the platform to manage your sports academy operations</li>
                        <li>Input accurate data about players, coaches, and performance metrics</li>
                        <li>Export your data for backup or migration purposes</li>
                        <li>Customize platform settings for your academy's needs</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-4">You May Not:</h3>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200 shadow-md">
                      <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Use the platform for any illegal or unauthorized purpose</li>
                        <li>Attempt to gain unauthorized access to other users' data</li>
                        <li>Reverse engineer, decompile, or attempt to extract source code</li>
                        <li>Upload malicious software or attempt to disrupt services</li>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Share account credentials with unauthorized users</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription and Billing */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Billing</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Billing Terms</h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>Subscriptions are billed in advance on a <strong>monthly or annual basis</strong></li>
                      <li>All fees are <strong>non-refundable</strong> except as required by law</li>
                      <li>We reserve the right to change pricing with 30 days' notice</li>
                      <li>Late payments may result in service suspension</li>
                      <li>Taxes may apply based on your location</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 shadow-md">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">Cancellation</h3>
                    <p className="text-gray-700">
                      You may cancel your subscription at any time. Cancellation will take effect at the end of 
                      your current billing period. You will continue to have access to the platform until your 
                      subscription expires.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data and Privacy */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Data Ownership and Privacy</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 shadow-md">
                    <h3 className="text-2xl font-bold text-green-700 mb-4">Your Data</h3>
                    <p className="text-gray-700">
                      You <strong>retain ownership</strong> of all data you input into our platform, including player information, 
                      performance data, and academy records. We act as a processor of your data and will not use 
                      it for purposes other than providing our services.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Data Security</h3>
                    <p className="text-gray-700">
                      We implement appropriate technical and organizational measures to protect your data. However, 
                      no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. 
                      Please refer to our <strong>Privacy Policy</strong> for full details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Limitation of Liability</h2>
                
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 shadow-md">
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, Track My Academy shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                    whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Contact Us</h2>
                
                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white">
                  <p className="mb-4 text-lg">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> legal@trackmyacademy.com</li>
                    <li><strong>Address:</strong> Chennai, Tamil Nadu, India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
