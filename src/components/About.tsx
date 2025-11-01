import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { title: 'Lightning-fast performance', description: 'Built for speed' },
    { title: 'Enterprise-grade security', description: 'Your data is safe' },
    { title: 'Access from anywhere', description: 'Mobile & desktop' },
    { title: 'Easy to use interface', description: 'No learning curve' },
    { title: 'All-in-one platform', description: 'Everything included' },
    { title: 'Everything you need', description: 'Complete solution' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">sports academies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline operations, track performance, and scale your academy with our comprehensive management platform. Everything you need in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-all group"
            >
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
