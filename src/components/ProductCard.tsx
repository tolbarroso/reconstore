import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";

interface ProductVariant {
  name: string;
  images: string[];
  color: string;
}

interface Product {
  id: number;
  baseName: string;
  category: string;
  description: string;
  price: string;
  variants: ProductVariant[];
}

interface ProductCardProps {
  product: Product;
  onSelect: (item: {
    id: number;
    baseName: string;
    price: string;
    size: string;
  }) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(product.variants[0]);

  const handleAdd = () => {
  onSelect({
    id: product.id,
    baseName: currentVariant.name,
    price: product.price,
    size: product.category === "camisas" ? selectedSize : "Único",
  });
  setAdded(true);
  setTimeout(() => setAdded(false), 3000);
};

  return (
    <div className="product-card group border rounded-xl overflow-hidden shadow-md bg-white">
      {/* Imagens empilhadas */}
      <div className="relative w-full h-80 overflow-hidden">
        {/* Frente */}
        <img
          src={currentVariant.images[0]}
          alt={`${currentVariant.name} frente`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Costas */}
        <img
          src={currentVariant.images[1]}
          alt={`${currentVariant.name} costas`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="p-6">
        <h3 className="font-brand text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {currentVariant.name}
        </h3>

        <p className="font-body text-sm text-muted-foreground mb-4 leading-snug">
          {product.description}
        </p>

        {/* Bolinhas de cor */}
        <div className="flex items-center gap-3 mb-4">
          {product.variants.map((variant, idx) => (
            <div
              key={idx}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                currentVariant.name === variant.name
                  ? "border-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: variant.color }}
              onClick={() => setCurrentVariant(variant)}
            />
          ))}
        </div>

        {/* Seletor de tamanho - só aparece se for camisa */}
{product.category === "camisas" && (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-foreground mb-1">
      Tamanho:
    </label>
    <select
      className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition"
      value={selectedSize}
      onChange={(e) => setSelectedSize(e.target.value)}
    >
      <option value="PP">PP</option>
      <option value="P">P</option>
      <option value="M">M</option>
      <option value="G">G</option>
      <option value="GG">GG</option>
      <option value="XG">XG</option>
    </select>
  </div>
)}

        <div className="flex items-center justify-between">
          <span className="font-brand text-2xl font-bold text-accent">
            {product.price}
          </span>

          <Button
            onClick={handleAdd}
            variant={added ? "outline" : "default"}
            className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
              added ? "bg-green-100 text-green-700 border border-green-500" : ""
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Adicionado
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Adicionar
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};