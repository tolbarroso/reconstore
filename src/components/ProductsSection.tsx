import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import shirt1 from '@/assets/shirt-1.jpg';
import shirt2 from '@/assets/shirt-2.jpg';
import shirt3 from '@/assets/shirt-3.jpg';
import shirt4 from '@/assets/shirt-4.jpg';
import shirt5 from '@/assets/shirt-5.jpg';
import shirt6 from '@/assets/shirt-6.jpg';
import shirt7 from '@/assets/shirt-7.jpg';

const products = [
  {
    id: 1,
    name: "Camiseta CEB Institucional",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt1,
    price: "R$ 39,90"
  },
  {
    id: 2,
    name: "Camiseta CEB 2Tm 3:16",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt2,
    price: "R$ 59,90"
  },
  {
    id: 3,
    name: "Camiseta CEB Pássaro",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt3,
    price: "R$ 44,90"
  },
  {
    id: 4,
    name: "Camiseta Vitral",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt4,
    price: "R$ 79,90"
  },
  {
    id: 5,
    name: "Camiseta Tudo se fez diferente",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt5,
    price: "R$ 69,90"
  },
  {
    id: 6,
    name: "Camiseta EuSouKids Incríveis da Fé",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt6,
    price: "R$ 39,90"
  },
  {
    id: 7,
    name: "Camiseta Continua a me Amar",
    description: "Tecido premium 100% algodão para máximo conforto no seu dia a dia.",
    image: shirt7,
    price: "R$ 39,90"
  }
];

export const ProductsSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; name: string; price: string; size: string }[]
  >([]);

  const handleSelect = (product: { id: number; name: string; price: string; size: string }) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id && p.size === product.size);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return;

    const productLines = selectedProducts.map(
      (p, index) => `${index + 1}. ${p.name} - ${p.price} (Tamanho: ${p.size})`
    );

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n\n${productLines.join('\n')}`;
    const url = `https://wa.me/5581999097261?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="products-section py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossa Coleção
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada peça é cuidadosamente desenvolvida para expressar sua fé com estilo contemporâneo. 
            Descubra designs únicos que conectam propósito e moda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={handleSelect} />
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div className="text-center mt-16">
            <Button
              onClick={handleWhatsAppCheckout}
              variant="whatsapp"
              size="lg"
              className="px-10 py-4 text-lg"
            >
              Comprar Produtos Selecionados
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
