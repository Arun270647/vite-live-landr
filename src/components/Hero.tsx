import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ShaderBackground from './ui/shader-background';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Shader Background */}
      <ShaderBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Sports Academy Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Simplified
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Track performance, manage operations, and scale your academy with intelligent automation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center bg-white text-background px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              View Demo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10"
          >
            <div>
              <div className="text-4xl font-black text-primary mb-2">50+</div>
              <div className="text-sm text-gray-400">Academies</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">10k+</div>
              <div className="text-sm text-gray-400">Players</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">99%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
