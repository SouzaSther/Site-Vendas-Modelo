import React from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Clock,
  Star,
  Truck,
  Shield,
  Heart,
  ArrowRight,
  Mail,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HomePage = () => {
  const { products } = useProducts();
  useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da StyleStore.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/stylestore', '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO SECTION - Fullscreen with gradient + pattern      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Eyebrow */}
          <div className="reveal stagger-1 mb-6">
            <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 px-5 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4 text-accent-400" />
              <span>Nova Coleção 2025 Disponível</span>
            </span>
          </div>

          {/* Main heading */}
          <h1 className="reveal stagger-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
            Descubra Seu
            <br />
            <span className="text-gradient-accent italic">Estilo</span> Único
          </h1>

          {/* Subtitle */}
          <p className="reveal stagger-3 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Curadoria exclusiva de peças que combinam qualidade premium,
            tendências atuais e um toque de personalidade.
          </p>

          {/* CTA Buttons */}
          <div className="reveal stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsAppClick} className="btn-whatsapp">
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </button>
            <button onClick={handleInstagramClick} className="btn-instagram">
              <Instagram className="h-5 w-5 mr-2" />
              Seguir no Instagram
            </button>
          </div>

          {/* Trust badges */}
          <div className="reveal stagger-5 mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>+500 Clientes Satisfeitos</span>
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FEATURES BAR                                           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:-mt-16 relative z-10 bg-white rounded-2xl shadow-card p-8 lg:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Truck, title: 'Entrega Expressa', desc: 'Receba em até 48h' },
              { icon: Shield, title: 'Pagamento Seguro', desc: 'Dados protegidos' },
              { icon: Heart, title: 'Satisfação Total', desc: 'Troca garantida' },
              { icon: Star, title: 'Qualidade Premium', desc: 'Peças selecionadas' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal stagger-${i + 1} flex items-center space-x-4 p-6 lg:p-8 ${
                  i < 3 ? 'lg:border-r border-gray-100' : ''
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* ABOUT SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text content */}
            <div>
              <span className="reveal eyebrow mb-4 block">Quem Somos</span>
              <h2 className="reveal stagger-1 section-title mb-6">
                Mais que uma loja.
                <br />
                <span className="text-gradient">Uma experiência.</span>
              </h2>
              <p className="reveal stagger-2 text-lg text-gray-500 leading-relaxed mb-8">
                A StyleStore é seu destino para descobrir as últimas tendências
                da moda com qualidade excepcional e atendimento personalizado.
                Cada peça é cuidadosamente selecionada para você.
              </p>

              {/* Info cards */}
              <div className="space-y-5">
                <div className="reveal stagger-3 flex items-start space-x-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo, SP - CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="reveal stagger-4 flex items-start space-x-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contato</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <a href="tel:+551133334444" className="hover:text-brand-700 transition-colors">(11) 3333-4444</a>
                      <span className="mx-2 text-gray-300">|</span>
                      <a href="tel:+5511999999999" className="hover:text-brand-700 transition-colors">(11) 99999-9999</a>
                    </p>
                  </div>
                </div>

                <div className="reveal stagger-5 flex items-start space-x-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horário</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Seg-Sex: 09h-18h &middot; Sáb: 09h-17h &middot; Dom: 10h-16h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual element */}
            <div className="reveal-right relative">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="StyleStore - Moda e Estilo"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover p-5 max-w-[200px]">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">+500 Avaliações</p>
                  <p className="text-xs text-gray-500">4.9 de 5.0</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-100 rounded-2xl -z-10" />
                <div className="absolute -bottom-6 -right-12 w-16 h-16 bg-accent-100 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* PRODUCTS SECTION                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="produtos" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="reveal eyebrow mb-4 block">Coleção</span>
            <h2 className="reveal stagger-1 section-title mb-4">
              Nossos <span className="text-gradient">Produtos</span>
            </h2>
            <p className="reveal stagger-2 text-lg text-gray-500 max-w-2xl mx-auto">
              Explore nossa coleção cuidadosamente selecionada de produtos de moda e estilo
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <div key={product.id} className={`reveal stagger-${(i % 3) + 1}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="reveal text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-xl text-gray-500 mb-2">
                Nenhum produto cadastrado ainda.
              </p>
              <p className="text-gray-400">
                Faça login como administrador para adicionar produtos ao catálogo.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONTACT CTA SECTION                                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        id="contato"
        className="relative py-24 lg:py-32 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 text-white overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="reveal eyebrow !text-brand-200 mb-4 block">Fale Conosco</span>
          <h2 className="reveal stagger-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Vamos Encontrar o<br />
            <span className="text-gradient-accent italic">Look Perfeito</span> Para Você
          </h2>
          <p className="reveal stagger-2 text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Estamos aqui para ajudar você a encontrar exatamente o que precisa
          </p>
          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsAppClick} className="btn-whatsapp">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </button>
            <a href="tel:+551133334444" className="btn-secondary !border-white/20 !text-white !bg-white/10 hover:!bg-white/20">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FOOTER                                                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <footer className="bg-slate-900 text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-2xl font-bold mb-4">
                Style<span className="text-gradient">Store</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Sua loja de moda e estilo com as melhores tendências e produtos de qualidade premium.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleInstagramClick}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-700 flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Navegação</h4>
              <ul className="space-y-3">
                {['Início', 'Sobre', 'Produtos', 'Contato'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">
                    Rua das Flores, 123<br />Centro, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-slate-500 flex-shrink-0" />
                  <a href="tel:+551133334444" className="text-slate-400 text-sm hover:text-white transition-colors">
                    (11) 3333-4444
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-slate-500 flex-shrink-0" />
                  <a href="mailto:contato@stylestore.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                    contato@stylestore.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Horário</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { day: 'Segunda à Sexta', time: '09:00 - 18:00' },
                  { day: 'Sábado', time: '09:00 - 17:00' },
                  { day: 'Domingo', time: '10:00 - 16:00' },
                ].map((item) => (
                  <li key={item.day} className="flex justify-between">
                    <span className="text-slate-400">{item.day}</span>
                    <span className="text-white font-medium">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} StyleStore. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer transition-colors">
                Política de Privacidade
              </span>
              <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer transition-colors">
                Termos de Uso
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
