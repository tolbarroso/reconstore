import { HeroCarousel } from '@/components/HeroCarousel';
import { BrandSection } from '@/components/BrandSection';
import { ProductsSection } from '@/components/ProductsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <BrandSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
