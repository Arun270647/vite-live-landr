import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "For small academies getting started",
      price: "Contact us",
      popular: false,
      features: [
        "Core management features",
        "Performance tracking",
        "Event scheduling",
        "Email support"
      ]
    },
    {
      name: "Professional",
      subtitle: "For growing academies",
      price: "Contact us",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Custom branding",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Contact us",
      popular: false,
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise option"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Simple pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for your academy
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card border rounded-3xl p-8 transition-all ${
                plan.popular 
                  ? 'border-primary shadow-[0_0_50px_rgba(139,92,246,0.3)] scale-105' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                    Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.subtitle}</p>
                <div className="text-4xl font-black text-white mb-6">{plan.price}</div>
                <button className={`w-full py-4 rounded-lg font-semibold transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
