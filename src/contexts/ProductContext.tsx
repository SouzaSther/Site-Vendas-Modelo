import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  removeProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Produtos de exemplo
      const exampleProducts: Product[] = [
        {
          id: '1',
          name: 'Tênis Esportivo Premium',
          description: 'Tênis confortável para todas as ocasiões, com tecnologia de amortecimento avançada.',
          price: 299.90,
          imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
          createdAt: new Date()
        },
        {
          id: '2',
          name: 'Camiseta Casual Elegante',
          description: 'Camiseta de algodão premium com design moderno e corte impecável.',
          price: 89.90,
          imageUrl: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
          createdAt: new Date()
        },
        {
          id: '3',
          name: 'Jaqueta Urbana',
          description: 'Jaqueta moderna e versátil, perfeita para o clima urbano contemporâneo.',
          price: 189.90,
          imageUrl: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
          createdAt: new Date()
        }
      ];
      setProducts(exampleProducts);
      localStorage.setItem('products', JSON.stringify(exampleProducts));
    }
  }, []);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const removeProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const value = {
    products,
    addProduct,
    removeProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};