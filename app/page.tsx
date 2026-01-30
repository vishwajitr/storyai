import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhatYouGet from '@/components/WhatYouGet';
import AIInfluencerModels from '@/components/AIInfluencerModels';
import WhyAIVideos from '@/components/WhyAIVideos';
import Pricing from '@/components/Pricing';
import SampleVideo from '@/components/SampleVideo';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <AIInfluencerModels />
      <WhyAIVideos />
      <Pricing />
      <SampleVideo />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
