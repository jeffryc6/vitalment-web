import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductSection from '@/components/layout/ProductSection';
import OrderForm from '@/components/layout/OrderForm';

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ProductSection />
        <OrderForm />
      </div>
      <Footer />
    </main>
  );
}
