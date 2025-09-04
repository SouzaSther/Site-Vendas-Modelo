import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { products } = useProducts();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da StyleStore.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/stylestore', '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            StyleStore
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Sua loja de moda e estilo com as melhores tendências e produtos de qualidade premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </button>
            <button
              onClick={handleInstagramClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Seguir no Instagram
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre Nossa Loja
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A StyleStore é mais do que uma loja - somos seu destino para descobrir as últimas tendências 
              da moda com qualidade excepcional e atendimento personalizado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contato</h3>
                  <p className="text-gray-600">
                    <a href="tel:+551133334444" className="hover:text-blue-700 transition-colors">
                      (11) 3333-4444
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+5511999999999" className="hover:text-blue-700 transition-colors">
                      (11) 99999-9999
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Segunda à Sexta:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossa coleção cuidadosamente selecionada de produtos de moda e estilo
            </p>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">
                Nenhum produto cadastrado ainda.
              </p>
              <p className="text-gray-400">
                Faça login como administrador para adicionar produtos ao catálogo.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos aqui para ajudar você a encontrar exatamente o que precisa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </button>
            <a
              href="tel:+551133334444"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;