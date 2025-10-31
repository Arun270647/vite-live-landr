import { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new and growing academies",
      annualPrice: "₹0",
      monthlyPrice: "₹0",
      savings: "",
      color: "blue",
      popular: false,
      guarantee: false,
      features: [
        "Up to 50 Players",
        "5 Coach Accounts",
        "Basic Performance Tracking",
        "Attendance Management",
        "Communication Hub",
        "Email Support",
        "Mobile App Access",
        "Data Export"
      ],
      cta: "Start Now"
    },
    {
      name: "Pro",
      description: "Best for established academies",
      annualPrice: "₹29,999",
      monthlyPrice: "₹3,500", 
      savings: "Save 2 months (₹7,000)",
      color: "green",
      popular: true,
      guarantee: true,
      features: [
        "Up to 250 Players",
        "25 Coach Accounts",
        "Advanced Analytics",
        "Performance Insights",
        "Priority Support",
        "Multi-Location Support",
        "Custom Branding"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large-scale organizations",
      annualPrice: "₹44,999",
      monthlyPrice: "₹5,499", 
      savings: "Save 2 months (₹10,998)",
      color: "purple",
      popular: false,
      guarantee: true,
      features: [
        "1000+ Players",
        "100+ Coach Accounts",
        "Custom Features",
        "White-label Options",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Integrations",
        "Advanced Security",
        "Training & Onboarding"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100 rounded-full translate-y-48 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your academy. All plans include our core features with 
            no hidden costs and the flexibility to upgrade anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-xl border border-gray-200 inline-flex">
              <div className="flex space-x-1">
                <button 
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'annual' 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Annual (Save up to 2 months)
                </button>
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly' 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-secondary scale-[1.03] lg:scale-105'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondary to-green-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-black text-gray-900">
                      {billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice !== '₹0' && (
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'annual' ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'annual' && plan.savings && (
                    <p className="text-secondary font-semibold text-sm">{plan.savings}</p>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold text-lg mb-8 transition-all hover:shadow-lg hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Guarantee Badge */}
                {plan.guarantee && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span>✓</span>
                      <span className="font-semibold">14-day money-back guarantee</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan? <a href="#contact" className="text-primary font-semibold hover:underline">Contact our sales team</a>
          </p>
          <p className="text-sm text-gray-500">
            All prices are in Indian Rupees (INR). Taxes may apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
