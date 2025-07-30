import { HeroCarousel } from '@/components/HeroCarousel';
import { ProductsSection } from '@/components/ProductsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
