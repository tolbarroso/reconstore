import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import placeHolder from '@/assets/placeHolder.jpg';
import VitralAF from '@/assets/VitralAF.jpeg';
import VitralAT from '@/assets/VitralAT.jpeg';
import VitralPF from '@/assets/VitralPF.jpeg';
import VitralPT from '@/assets/VitralPT.jpeg';
import EucaristiaBF from '@/assets/EucaristiaBF.jpeg';
import EucaristiaBT from '@/assets/EucaristiaBT.jpeg';
import BolsaPG from '@/assets/BolsaPG.jpeg';
const products = [
  {
    id: 1,
    baseName: "Camiseta Básica - Vitral Recon",
    description: "lorem ipsum",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Vitral Recon (Areia)",
        images: [VitralAF, VitralAT], 
        color: "#d9c3a0",
      },
      {
        name: "Camiseta Básica - Vitral Recon (Preta)",
        images: [VitralPF, VitralPT], // <-- frente e costas
        color: "#000000",
      },]
},
  {
    id: 2,
    baseName: "Camiseta Oversized - Vitral Recon",
    description: "Lorem ipsum",
    category: "camisas",
    price: "R$ 110,00",
    variants: [
      {
        name: "Camiseta Oversized - Vitral Recon (Areia)",
        images: [VitralAF, VitralAT], // frente e costas
        color: "#d9c3a0",
      },
      {
        name: "Camiseta Oversized - Vitral Recon (Preta)",
        images: [VitralPF, VitralPT], // frente e costas
        color: "#000000",
      },
    ],
  },
  {
    id: 3,
    baseName: "Camiseta Básica - Eucaristia",
    description: "Lorem ipsum",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Eucaristia(Off-White)",
        images: [EucaristiaBF, EucaristiaBT], // frente e costas
        color: "#e0dfd8",
      },
    ],
  },
  {
    id: 4,
    baseName: "Camiseta Oversized - Eucaristia",
    description: "Lorem ipsum",
    category: "camisas",
    price: "R$ 110,00",
    variants: [
      {
        name: "Camiseta Oversized - Eucaristia (Off-White)",
        images: [EucaristiaBF, EucaristiaBT], // frente e costas
        color: "#e0dfd8",
      },
    ],
  },
  /*{
    id: 5,
    baseName: "Camisa Esportiva - Recon",
    description: "Lorem ipsum",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camisa Esportiva - Recon",
        images: [placeHolder, placeHolder], // frente e costas
        color: "#d9c3a0",
      },
      {
        name: "Camisa Esportiva - Recon",
        images: [placeHolder, placeHolder], // frente e costas
        color: "#000000",
      },
    ],
  },*/
  /*{
    id: 6,
    baseName: "Bolsa pequena - Recon",
    description: "Lorem ipsum",
    category: "acessorios",
    price: "R$ 79,90",
    variants: [
      {
        name: "Bolsa pequena - Recon",
        images: [placeHolder, placeHolder], // frente e costas
        color: "#d9c3a0",
      },
      {
        name: "Bolsa pequena - Recon",
        images: [placeHolder, placeHolder], // frente e costas
        color: "#000000",
      },
    ],
  },
  {
    id: 7,
    baseName: "Bolsa grande - Recon",
    description: "Lorem ipsum",
    category: "acessorios",
    price: "R$ 99,90",
    variants: [
      {
        name: "Bolsa grande - Recon(Preta)",
        images: [BolsaPG, BolsaPG], // frente e costas
        color: "#d9c3a0",
      },
      {
        name: "Bolsa grande - Recon",
        images: [placeHolder, placeHolder], // frente e costas
        color: "#000000",
      },
    ],
  }*/
];

export const ProductsSection = () => {
  const [selectedProducts, setSelectedProducts] = useState<
    { id: number; baseName: string; price: string; size: string }[]
  >([]);

  const handleSelect = (product: { id: number; baseName: string; price: string; size: string }) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return;

    const productLines = selectedProducts.map(
      (p, index) => `${index + 1}. ${p.baseName} - ${p.price} (Tamanho: ${p.size})`
    );

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n\n${productLines.join('\n')}`;
    const url = `https://wa.me/5581999014848?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  // 🔹 separando os produtos
  const shirts = products.filter((p) => p.category === "camisas");
  const accessories = products.filter((p) => p.category === "acessorios");

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

        {/* 🔹 Sessão de Camisas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Camisas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shirts.map((product) => (
              <ProductCard key={`${product.id}-${product.baseName}`} product={product} onSelect={handleSelect} />
            ))}
          </div>
        </div>

        {/* 🔹 Sessão de Acessórios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Acessórios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((product) => (
              <ProductCard key={`${product.id}-${product.baseName}`} product={product} onSelect={handleSelect} />
            ))}
          </div>
        </div>

        {/* 🔹 Produtos selecionados */}
        {selectedProducts.length > 0 && (
          <div className="mt-16 text-center flex flex-col items-center space-y-6">
            <div className="bg-white border border-muted p-6 rounded-lg max-w-xl w-full text-left shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Produtos Selecionados:</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                {selectedProducts.map((item, index) => (
                  <li key={index} className="border-b border-muted pb-2 flex justify-between items-center">
                    <span>
                      {index + 1}. <strong>{item.baseName}</strong> — {item.price} (Tamanho: {item.size})
                    </span>
                    <button
                      onClick={() =>
                        setSelectedProducts(prev =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="text-red-500 font-bold ml-4 hover:text-red-700 transition"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={handleWhatsAppCheckout}
              variant="whatsapp"
              size="lg"
              className="px-10 py-4 text-lg"
            >
              Comprar Produtos Selecionados ({selectedProducts.length})
            </Button>

            <button
              onClick={() => setSelectedProducts([])}
              className="text-sm text-accent border border-accent bg-white px-4 py-2 rounded-md hover:bg-accent hover:text-white transition"
            >
              Cancelar minhas compras
            </button>
          </div>
        )}
      </div>
    </section>
  );
};