import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import PersonalSection from '@/components/layout/PersonalSection';
import Pillars from '@/components/layout/Pillars';
import CorporateSection from '@/components/layout/CorporateSection';
import MobileAppTeaser from '@/components/layout/MobileAppTeaser';
import BlogSection from '@/components/layout/BlogSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PersonalSection />
      <CorporateSection />
      <Pillars />
      <MobileAppTeaser />
      <BlogSection />
      <Footer />
    </main>
  );
}
