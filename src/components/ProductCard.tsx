import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  onSelect: (item: { id: number; name: string; price: string; size: string }) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAdd = () => {
    onSelect({ id: product.id, name: product.name, price: product.price, size: selectedSize });
  };

  return (
    <div className="product-card group border rounded-xl overflow-hidden shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="font-brand text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <p className="font-body text-muted-foreground mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-1">Tamanho:</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
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

        <div className="flex items-center justify-between">
          <span className="font-brand text-2xl font-bold text-accent">
            {product.price}
          </span>

          <Button
            onClick={handleAdd}
            variant="default"
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};