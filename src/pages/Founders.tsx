import Navbar from '@/components/Navbar';
import SEOHelmet from '@/components/SEOHelmet';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { Mail, Linkedin } from 'lucide-react';

const Founders = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Founders', url: '/founders' }
  ];

  const founders = [
    {
      name: "Founder Name",
      title: "Founder & CEO",
      role: "Student & Visionary",
      image: "/api/placeholder/300/300",
      bio: "Add founder's background, education, vision for Track My Academy, and experience in sports/technology here. This space will highlight their journey and passion for revolutionizing sports academy management.",
      details: [
        "Education background",
        "Previous experience",
        "Vision for sports technology",
        "Personal sports interests"
      ],
      social: {
        linkedin: "#",
        email: "founder@trackmyacademy.com"
      }
    },
    {
      name: "Co-Founder Name",
      title: "Co-Founder & CTO",
      role: "Sports Enthusiast & Business Tycoon",
      image: "/api/placeholder/300/300",
      bio: "Add co-founder's background in sports promotion business, entrepreneurial journey, and expertise in sports industry. Highlight their role in bringing business acumen and sports domain knowledge to Track My Academy.",
      details: [
        "Business background in sports",
        "Sports promotion experience", 
        "Industry connections",
        "Strategic vision for growth"
      ],
      social: {
        linkedin: "#",
        email: "cofounder@trackmyacademy.com"
      }
    }
  ];

  const foundersStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Track My Academy Founders",
    "description": "Meet the visionary founders behind Track My Academy - India's leading sports academy management platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "Track My Academy",
      "founders": founders.map(founder => ({
        "@type": "Person",
        "name": founder.name,
        "jobTitle": founder.title,
        "description": founder.bio,
        "email": founder.social.email
      }))
    }
  };

  return (
    <>
      <SEOHelmet 
        title="Meet Our Founders - Track My Academy | Sports Technology Leaders India"
        description="Meet the visionary founders behind Track My Academy - combining student innovation with sports industry expertise to revolutionize academy management in India."
        keywords="Track My Academy founders, sports technology founders India, academy management founders, sports startup founders Chennai"
        canonical="/founders"
        structuredData={foundersStructuredData}
      />
      <div className="bg-white min-h-screen">
        <Navbar />
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Founders
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The visionary minds behind Track My Academy, combining student innovation with sports industry expertise 
              to revolutionize how sports academies operate and grow across India.
            </p>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <article key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Header */}
                  <header className="bg-gradient-to-br from-primary to-secondary p-8 text-white text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <div className="w-28 h-28 bg-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{founder.name}</h2>
                    <p className="text-blue-100 text-lg font-semibold mb-2">{founder.title}</p>
                    <p className="text-blue-200">{founder.role}</p>
                  </header>

                  {/* Content */}
                  <div className="p-8">
                    {/* Bio */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                    </div>

                    {/* Key Details */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                      <ul className="space-y-3">
                        {founder.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
                      <div className="flex space-x-4">
                        <a 
                          href={founder.social.linkedin} 
                          className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5 text-primary" />
                        </a>
                        <a 
                          href={`mailto:${founder.social.email}`}
                          className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg hover:bg-green-200 transition-colors duration-300"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5 text-secondary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Founders;
