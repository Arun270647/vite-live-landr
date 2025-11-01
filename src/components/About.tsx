import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-fast performance',
      description: 'Optimized for speed and efficiency'
    },
    {
      icon: Shield,
      title: 'Enterprise-grade security',
      description: 'Your data is always protected'
    },
    {
      icon: Globe,
      title: 'Access from anywhere',
      description: 'Cloud-based platform available 24/7'
    },
    {
      icon: Sparkles,
      title: 'Easy to use interface',
      description: 'Intuitive design for everyone'
    }
  ];

  const capabilities = [
    'Attendance tracking',
    'Performance analytics',
    'Event management',
    'Team communication'
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Modern
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Built for modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">sports academies</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Streamline operations, track performance, and scale your academy with our comprehensive management platform. Everything you need in one place.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">All-in-one platform</h3>
              <p className="text-gray-400 mb-8">Everything you need to manage your sports academy effectively</p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-background/50 rounded-lg p-4 border border-white/5"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white font-medium">{capability}</span>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-8 bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                Try it free
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
