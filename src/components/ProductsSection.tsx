import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import placeHolder from '@/assets/placeHolder.jpg';
import VitralAF from '@/assets/VitralAF.jpeg';
import VitralAT from '@/assets/VitralAT.jpeg';
import overVitralAF from '@/assets/overVitralAF.png';
import overVitralAT from '@/assets/overVitralAT.png';
import VitralPF from '@/assets/VitralPF.jpeg';
import VitralPT from '@/assets/VitralPT.jpeg';
import overVitralPF from '@/assets/overVitralPF.png';
import overVitralPT from '@/assets/overVitralPT.png';
import EucaristiaBF from '@/assets/EucaristiaBF.jpeg';
import EucaristiaBT from '@/assets/EucaristiaBT.jpeg';
import overEucaristiaBF from '@/assets/overEucaristiaBF.png';
import overEucaristiaBT from '@/assets/overEucaristiaBT.png';
import BolsaGPF from '@/assets/bolsaGPF.png';
import BolsaGPL from '@/assets/bolsaGPL.png';
import BolsaPAP from '@/assets/bolsaPAP.png';
import BolsaPAF from '@/assets/bolsaPAF.png';
import BolsaGAF from '@/assets/bolsaGAF.png';
import BolsaGAL from '@/assets/bolsaGAL.png';
import GarrafaPFec from '@/assets/GarrafaPFec.png';
import GarrafaPAber from '@/assets/GarrafaPAber.png';
import GarrafaVFec from '@/assets/GarrafaVFec.png'
import GarrafaVAbert from '@/assets/GarrafaVAber.png'
import ECruzAF from "@/assets/EcruzAF.png"
import ECuidarVF from "@/assets/ECuidarVF.png"
import garrafaBA from "@/assets/garrafaBA.jpeg"
import garrafaBF from "@/assets/garrafaBF.jpeg"

const products = [
  {
    id: 1,
    baseName: "Camiseta Básica - Vitral ",
    description: "",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Vitral (Areia)",
        images: [VitralAF, VitralAT], 
        color: "#d9c3a0",
      },
      {
        name: "Camiseta Básica - Vitral (Preta)",
        images: [VitralPF, VitralPT], // <-- frente e costas
        color: "#000000",
      },]
},
  {
    id: 2,
    baseName: "Camiseta Oversized - Vitral ",
    description: "",
    category: "camisas",
    price: "R$ 110,00",
    variants: [
      {
        name: "Camiseta Oversized - Vitral (Areia)",
        images: [overVitralAF, overVitralAT], // frente e costas
        color: "#d9c3a0",
      },
      {
        name: "Camiseta Oversized - Vitral (Preta)",
        images: [overVitralPF, overVitralPT], // frente e costas
        color: "#000000",
      },
    ],
  },
  {
    id: 3,
    baseName: "Camiseta Básica - Eucaristia",
    description: "",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camiseta Básica - Eucaristia (Off-White)",
        images: [EucaristiaBF, EucaristiaBT], // frente e costas
        color: "#e0dfd8",
      },
    ],
  },
  {
    id: 4,
    baseName: "Camiseta Oversized - Eucaristia",
    description: "",
    category: "camisas",
    price: "R$ 110,00",
    variants: [
      {
        name: "Camiseta Oversized - Eucaristia (Off-White)",
        images: [overEucaristiaBF, overEucaristiaBT], // frente e costas
        color: "#e0dfd8",
      },
    ],
  },
  {
    id: 5,
    baseName: "Camisa Esportiva",
    description: "",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camisa Esportiva - Cruz (Azul)",
        images: [ECruzAF, ECruzAF], // frente e costas
        color: "#0c1f84",
      },
    ],
  },
  {
    id: 9,
    baseName: "Camisa Esportiva",
    description: "",
    category: "camisas",
    price: "R$ 70,00",
    variants: [
      {
        name: "Camisa Esportiva - Cuidar (Verde)",
        images: [ECuidarVF, ECuidarVF], // frente e costas
        color: "#012b31",
      },
    ],
  },
  {
    id: 6,
    baseName: "Bolsa pequena - ",
    description: "Uma bolsa pequena e prática, ideal para carregar seus itens essenciais com medidas de  29 cm de largura, 18 cm de altura e 9 cm de profundidade",
    category: "acessorios",
    price: "R$ 79,90",
    variants: [
      {
        name: "Bolsa pequena (Azul)",
        images: [BolsaPAP, BolsaPAF], // frente e costas
        color: "#99A2A7",
      },
    ],
  },
  {
    id: 7,
    baseName: "Bolsa grande - Recon",
    description: "Uma bolsa grande e espaçosa, perfeita para o dia a dia com medidas de  50 cm de largura, 29 cm de altura e 20 cm de profundidade.",
    category: "acessorios",
    price: "R$ 99,90",
    variants: [
      {
        name: "Bolsa grande (Preta)",
        images: [BolsaGPF, BolsaGPL], // frente e costas
        color: "#000000",
      },
      {
        name: "Bolsa grande (Azul)",
        images: [BolsaGAF, BolsaGAL], // frente e costas
        color: "#454C6E",
      },
    ],
  },
  {
    id: 8,
    baseName: "Garrafa Térmica",
    description: "Uma garrafa térmica elegante de 800ml, com 2 bicos e uma alça",
    category: "acessorios",
    price: "R$ 89,99",
    variants: [
      {
        name: "Garrafa Térmica (Preta)",
        images: [GarrafaPFec, GarrafaPAber], // frente e costas
        color: "#000000",
      },
      {
        name: "Garrafa Térmica (Verde)",
        images: [GarrafaVFec, GarrafaVAbert], // frente e costas
        color: "#3c6348",
      },
      {
        name: "Garrafa Térmica (Off-white)",
        images: [garrafaBA, garrafaBF], // frente e costas
        color: "#e0dfd8",
      },
    ],
  },
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