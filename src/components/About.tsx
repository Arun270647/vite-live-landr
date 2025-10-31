import { Target, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empowering sports academies with cutting-edge technology to nurture the next generation of athletes.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive ecosystem for coaches, players, and administrators to thrive together.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving with the latest technology to provide the best management experience.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data is protected with enterprise-grade security and privacy measures.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Track My Academy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing sports academy management in India with innovative technology 
            that makes coaching, tracking, and growing your academy effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">Join 50+ Academies Already Using Track My Academy</h3>
          <p className="text-xl mb-8 text-white/90">
            Start your free trial today and experience the difference
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
