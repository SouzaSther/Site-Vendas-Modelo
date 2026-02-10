import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, Image, FileText, ArrowLeft, Check } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative z-10 bg-white p-10 rounded-3xl shadow-card-hover text-center max-w-sm">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Check className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Produto Cadastrado!
          </h2>
          <p className="text-gray-500 text-sm">
            Redirecionando para a página principal...
          </p>
        </div>
      </div>
    );
  }

  const inputClass = "pl-11 w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white";

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-brand-700 text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao início</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="eyebrow mb-3 block">Administração</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Novo Produto
          </h1>
          <p className="text-gray-500">
            Adicione um novo produto ao catálogo da loja
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-card p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nome do Produto
              </label>
              <div className="relative">
                <Package className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Ex: Tênis Esportivo Premium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1.5">
                Descrição
              </label>
              <div className="relative">
                <FileText className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <textarea
                  id="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Descreva as características e benefícios do produto..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1.5">
                Preço (R$)
              </label>
              <div className="relative">
                <DollarSign className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="number"
                  id="price"
                  required
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={inputClass}
                  placeholder="0,00"
                />
              </div>
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1.5">
                URL da Imagem <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <div className="relative">
                <Image className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className={inputClass}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                Deixe em branco para usar uma imagem padrão
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-700 text-white py-3.5 rounded-xl font-medium text-sm hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mx-auto"></div>
                ) : (
                  'Cadastrar Produto'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductRegistrationPage;
