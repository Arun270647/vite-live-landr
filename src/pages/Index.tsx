import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import SEOHelmet from '@/components/SEOHelmet';

const Index = () => {
  return (
    <>
      <SEOHelmet 
        title="Track My Academy - Sports Academy Management Platform"
        description="India's leading sports academy management platform with player tracking, performance analytics, and comprehensive academy tools."
        keywords="sports academy management, player tracking, performance analytics, academy software India, sports management platform"
        canonical="/"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default Index;
