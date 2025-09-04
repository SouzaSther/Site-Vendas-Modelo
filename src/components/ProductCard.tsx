import React from 'react';
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-emerald-600">
            {formatPrice(product.price)}
          </span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;