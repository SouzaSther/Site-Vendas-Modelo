import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../contexts/ProductContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick action button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full flex items-center justify-center space-x-2 bg-white/95 backdrop-blur-sm text-gray-900 py-3 rounded-xl font-medium text-sm hover:bg-white transition-colors">
            <ShoppingBag className="h-4 w-4" />
            <span>Ver Detalhes</span>
          </button>
        </div>

        {/* Price badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/95 backdrop-blur-sm text-brand-700 px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-brand-700 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <button className="flex items-center space-x-1 text-brand-600 text-sm font-medium group/btn hover:text-brand-800 transition-colors">
            <span>Detalhes</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
