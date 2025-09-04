import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, Image, FileText } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';

const ProductRegistrationPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      addProduct({
        name,
        description,
        price: parseFloat(price),
        imageUrl: imageUrl || 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400'
      });

      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Produto Cadastrado!
          </h2>
          <p className="text-gray-600">
            Redirecionando para a página principal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Package className="h-12 w-12 text-blue-700 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            Cadastrar Novo Produto
          </h1>
          <p className="text-gray-600 mt-2">
            Adicione um novo produto ao catálogo da loja
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Produto
              </label>
              <div className="relative">
                <Package className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 block w-full border border-gray-300 rounded-lg px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ex: Tênis Esportivo Premium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <div className="relative">
                <FileText className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <textarea
                  id="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="pl-10 block w-full border border-gray-300 rounded-lg px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva as características e benefícios do produto..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Preço (R$)
              </label>
              <div className="relative">
                <DollarSign className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="number"
                  id="price"
                  required
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pl-10 block w-full border border-gray-300 rounded-lg px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="0,00"
                />
              </div>
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                URL da Imagem (opcional)
              </label>
              <div className="relative">
                <Image className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="pl-10 block w-full border border-gray-300 rounded-lg px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Deixe em branco para usar uma imagem padrão
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Cadastrar Produto'
                )}
              </button>
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-blue-700 hover:text-blue-800 transition-colors"
              >
                Voltar para a página principal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductRegistrationPage;