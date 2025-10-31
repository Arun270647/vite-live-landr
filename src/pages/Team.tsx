import Navbar from '@/components/Navbar';
import SEOHelmet from '@/components/SEOHelmet';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Lead Developer",
      expertise: "Full Stack Development",
      image: "/api/placeholder/250/250",
      description: "Add team member's contribution to the development of Track My Academy platform here.",
      technologies: ["React", "FastAPI", "MongoDB"]
    },
    {
      name: "Team Member 2", 
      role: "Frontend Developer",
      expertise: "UI/UX Development",
      image: "/api/placeholder/250/250",
      description: "Add team member's contribution to the frontend and user experience design here.",
      technologies: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      name: "Team Member 3",
      role: "Backend Developer", 
      expertise: "System Architecture",
      image: "/api/placeholder/250/250",
      description: "Add team member's contribution to the backend systems and database architecture here.",
      technologies: ["Python", "FastAPI", "Database Design"]
    },
    {
      name: "Team Member 4",
      role: "DevOps Engineer",
      expertise: "Infrastructure & Deployment",
      image: "/api/placeholder/250/250", 
      description: "Add team member's contribution to the deployment and infrastructure management here.",
      technologies: ["Docker", "Cloud Services", "CI/CD"]
    },
    {
      name: "Team Member 5",
      role: "QA Engineer",
      expertise: "Quality Assurance",
      image: "/api/placeholder/250/250",
      description: "Add team member's contribution to testing and quality assurance processes here.", 
      technologies: ["Testing", "Automation", "Quality Control"]
    }
  ];

  return (
    <>
      <SEOHelmet 
        title="Our Team - Track My Academy"
        description="Meet the talented team behind Track My Academy, dedicated to revolutionizing sports academy management."
        keywords="Track My Academy team, sports technology team, development team"
        canonical="/team"
      />
      <div className="bg-white min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Meet Our Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate individuals working together to revolutionize sports academy management in India. 
              Our diverse team brings expertise in technology, sports, and business.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <svg className="w-32 h-32 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{member.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {member.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-white mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for sports and technology.
            </p>
            <a
              href="mailto:careers@trackmyacademy.com"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              View Open Positions
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Team;
