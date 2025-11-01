import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'For small academies getting started',
      price: 'Contact us',
      popular: false,
      features: [
        'Core management features',
        'Performance tracking',
        'Event scheduling',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      description: 'For growing academies',
      price: 'Contact us',
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Custom branding',
        'Priority support',
        'API access',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Contact us',
      popular: false,
      features: [
        'Everything in Professional',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'On-premise option',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">🚀 Modern</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your academy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card rounded-xl border p-8 relative ${
                plan.popular ? 'border-primary shadow-card' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              </div>
              <a
                href="#contact"
                className={`block text-center px-6 py-2.5 rounded-lg font-medium transition-all mb-6 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                Get Started
              </a>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
