import Navbar from '@/components/Navbar';
import SEOHelmet from '@/components/SEOHelmet';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <SEOHelmet 
        title="Privacy Policy - Track My Academy"
        description="Learn how Track My Academy collects, uses, and protects your information."
        keywords="privacy policy, data protection, Track My Academy privacy"
        canonical="/privacy-policy"
      />
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Track My Academy ("we," "our," or "us") is committed to protecting your privacy. This <strong>Privacy Policy</strong> explains how we collect, use, disclose, and safeguard your information when you use our sports academy 
                  management platform and services. By using our services, you consent to the data practices described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Information We Collect</h2>
                
                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">Personal Information</h3>
                    <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>Name, email address, and phone number</li>
                      <li>Academy name and address</li>
                      <li>Player and coach information</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">Usage Data</h3>
                    <p className="text-gray-700 mb-4">We automatically collect:</p>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li>IP address and browser type</li>
                      <li>Device information</li>
                      <li>Pages visited and features used</li>
                      <li>Date and time of visits</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking</h3>
                    <p className="text-gray-700">
                      We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                      and improve our services. You can control cookie preferences through your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">How We Use Your Information</h2>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-md">
                  <p className="text-gray-700 mb-4 font-semibold">We use your information to:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Provide and maintain our services</li>
                    <li>Process payments and billing</li>
                    <li>Provide customer support</li>
                    <li>Improve our services and features</li>
                    <li>Send important updates and notifications</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Information Sharing and Disclosure</h2>
                
                <div className="bg-red-50 rounded-xl p-6 border border-red-200 shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">We Do Not Sell Your Data</h3>
                  <p className="text-gray-700">
                    <strong>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</strong>
                  </p>
                </div>

                <p className="text-gray-700 mb-6 font-semibold">We may share your information in the following limited circumstances:</p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Service Providers</h4>
                    <p className="text-gray-700">Third-party vendors who help us operate our platform (hosting, payment processing, analytics).</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Legal Requirements</h4>
                    <p className="text-gray-700">When required by law, legal process, or government request.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Business Transfers</h4>
                    <p className="text-gray-700">In connection with a merger, acquisition, or sale of company assets.</p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Data Security</h2>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-md">
                  <p className="text-gray-700 mb-4 font-semibold">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>SSL/TLS encryption</strong> for data transmission</li>
                    <li>Secure database storage with <strong>encryption at rest</strong></li>
                    <li>Regular security audits and monitoring</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Your Rights and Choices</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">Access and Update</h3>
                    <p className="text-gray-700">
                      Access and update your personal information through your account settings or contact us directly.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">Data Deletion</h3>
                    <p className="text-gray-700">
                      Request <strong>deletion</strong> of your account and associated data, subject to legal retention requirements.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">Data Portability</h3>
                    <p className="text-gray-700">
                      Request a copy of your data in a <strong>structured, machine-readable format</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">Opt-Out</h3>
                    <p className="text-gray-700">
                      <strong>Unsubscribe</strong> from marketing communications while maintaining service communications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-2">Contact Us</h2>
                
                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white">
                  <p className="mb-4 text-lg">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> privacy@trackmyacademy.com</li>
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

export default PrivacyPolicy;
