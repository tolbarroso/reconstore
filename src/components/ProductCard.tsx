import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check } from 'lucide-react';

interface ProductVariant {
  name: string;
  images: string[];
  color: string;
  sizes?: { [key: string]: boolean };
  inStock?: boolean;
}

interface Product {
  id: number;
  baseName: string;
  description: string;
  price: string;
  variants: ProductVariant[];
}

interface ProductCardProps {
  product: Product;
  onSelect: (item: { id: number; baseName: string; price: string; size: string }) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0]);

  const [selectedSize, setSelectedSize] = useState<string | null>(
    currentVariant.sizes
      ? Object.keys(currentVariant.sizes).find((size) => currentVariant.sizes?.[size]) || null
      : null
  );

  const [added, setAdded] = useState(false);

  const isAccessory = !currentVariant.sizes;

  const handleAdd = () => {
    if (isAccessory) {
      if (!currentVariant.inStock) return; // acessório sem estoque
    } else {
      if (!selectedSize) return; // camisa sem tamanho válido
    }

    onSelect({
      id: product.id,
      baseName: currentVariant.name,
      price: product.price,
      size: isAccessory ? 'Único' : selectedSize!,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="product-card group border rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative overflow-hidden">
        <img
          src={currentVariant.images[0]}
          alt={currentVariant.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Botões de cor */}
      <div className="flex justify-center gap-3 my-4">
        {product.variants.map((variant, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: variant.color }}
            className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
              currentVariant.name === variant.name ? 'border-accent' : 'border-gray-300'
            } hover:scale-110 transition`}
            onClick={() => {
              setCurrentVariant(variant);
              setSelectedSize(
                variant.sizes
                  ? Object.keys(variant.sizes).find((size) => variant.sizes?.[size]) || null
                  : null
              );
            }}
            title={variant.name}
          />
        ))}
      </div>

      <div className="p-6">
        <h3 className="font-brand text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {currentVariant.name}
        </h3>

        <p className="font-body text-sm text-muted-foreground mb-4 leading-snug">
          {product.description}
        </p>

        {!isAccessory && currentVariant.sizes && (
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tamanho:</label>
            <select
              className="w-full border rounded-md px-3 py-2 text-sm"
              value={selectedSize || ''}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {Object.entries(currentVariant.sizes).map(([size, inStock]) => (
                <option key={size} value={size} disabled={!inStock}>
                  {size} {inStock ? '' : '(Esgotado)'}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-brand text-2xl font-bold text-accent">{product.price}</span>

          <Button
            onClick={handleAdd}
            disabled={isAccessory ? !currentVariant.inStock : !selectedSize}
            variant={added ? 'outline' : 'default'}
            className={`flex items-center gap-2 px-4 py-2 ${
              added ? 'bg-green-100 text-green-700 border border-green-500' : ''
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
                {isAccessory
                  ? currentVariant.inStock
                    ? 'Adicionar'
                    : 'Esgotado'
                  : selectedSize
                  ? 'Adicionar'
                  : 'Esgotado'}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};