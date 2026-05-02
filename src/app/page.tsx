import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Pillars from '@/components/layout/Pillars';
import BlogSection from '@/components/layout/BlogSection';
import BookingForm from '@/components/layout/BookingForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Pillars />
      <BlogSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
