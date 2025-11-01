import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              🏆 India's #1 Sports Academy Platform
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Sports Academy
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Comprehensive management platform for sports academies. Track players, analyze performance, 
              and grow your academy with powerful tools designed for success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all group"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-3xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600">Academies</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-1">10k+</div>
                <div className="text-sm text-gray-600">Players</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-1">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-green-500 p-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-4">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Real-time Analytics</div>
                      <div className="text-sm text-white/80">Track performance instantly</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-4">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Player Management</div>
                      <div className="text-sm text-white/80">Comprehensive profiles</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-4">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">Mobile First</div>
                      <div className="text-sm text-white/80">Access anywhere, anytime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
