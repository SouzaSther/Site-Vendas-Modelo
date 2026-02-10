import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, ArrowLeft, Store } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Email ou senha incorretos. Use: admin@loja.com / admin123');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      <div className="relative z-10 w-full max-w-md">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao início</span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-card-hover p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl mb-4">
              <Store className="h-7 w-7 text-brand-700" />
            </div>
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-1">
              Área do Admin
            </h1>
            <p className="text-sm text-gray-500">
              Faça login para gerenciar os produtos
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Sua senha"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-700 text-white py-3.5 rounded-xl font-medium text-sm hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mx-auto"></div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Test credentials */}
          <div className="mt-6 p-4 bg-brand-50 rounded-xl border border-brand-100">
            <p className="text-xs text-brand-700 text-center leading-relaxed">
              <span className="font-semibold">Credenciais de teste:</span><br />
              admin@loja.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
