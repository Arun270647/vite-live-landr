import { motion } from 'framer-motion';
import { BarChart3, Users, Calendar, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time analytics and insights for athlete progress monitoring',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Comprehensive tools for coaches and administrators',
    },
    {
      icon: Calendar,
      title: 'Event Scheduling',
      description: 'Streamlined event and tournament management',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for better decision making',
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern sports academies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group hover:shadow-card"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
