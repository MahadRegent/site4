import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { mockPlans, mockFeatures, mockTestimonials } from '../mock';

const HomePage = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const { toast } = useToast();

  // Intersection Observer для анимации появления элементов (оригинальная версия)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveNavItem(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Remove active state after animation
    setTimeout(() => setActiveNavItem(''), 500);
  };

  const scrollToPricing = () => {
    scrollToSection('pricing');
  };

  const handleSelectPlan = () => {
    window.open('https://bill.vortexhost.pro', '_blank');
  };

  const handlePanelClick = () => {
    window.open('https://bill.vortexhost.pro', '_blank');
  };

  const handleAboutClick = () => {
    window.open('https://discord.gg/u2qvmqpNfh', '_blank');
  };

  const handleTicketsClick = () => {
    window.open('https://discord.gg/u2qvmqpNfh', '_blank');
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/u2qvmqpNfh', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 overflow-hidden">
      {/* Оригинальная навигация без backdrop blur и scroll progress */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50 fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NFc0QSIvPgo8ZGVmcz4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHdoaXRlOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDFweDsgfQo8L3N0eWxlPgo8L2RlZnM+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMjUiIHkyPSIxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE1IiB5MT0iMTUiIHgyPSIxNSIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI1IiB5Mj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxNSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjgiIHkxPSIyMCIgeDI9IjEyIiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyOCIgeTE9IjIwIiB4Mj0iMzIiIHkyPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iOCIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyMCIgeTE9IjI4IiB4Mj0iMjAiIHkyPSIzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTAiIHgyPSIxMyIgeTI9IjEzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjI3IiB5Mj0iMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMzAiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"
                alt="VORTEXHOST Logo" 
                className="w-10 h-10 filter drop-shadow-lg" 
              />
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                VORTEXHOST
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'features', label: 'Возможности' },
                { id: 'pricing', label: 'Тарифы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative ${
                    activeNavItem === item.id ? 'scale-110 text-gray-300' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleAboutClick}
                className="nav-item text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                О нас
              </button>
            </div>
            <Button 
              onClick={handlePanelClick}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Панель управления
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1632017734927-48988a0efae7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXJ2ZXJzfGVufDB8fHx8MTc1MjY5NDQ0NXww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              data-animate
              id="hero-title"
              className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ${
                isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Лучший хостинг для
              <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent block md:inline"> Minecraft</span>
            </h1>
            <p 
              data-animate
              id="hero-subtitle"
              className={`text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed transform transition-all duration-1000 delay-300 ${
                isVisible['hero-subtitle'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Создай свой мир с мгновенной настройкой, защитой от DDoS и круглосуточной поддержкой
            </p>
            <div 
              data-animate
              id="hero-cta"
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-600 ${
                isVisible['hero-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Button 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Выбрать тариф
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Оригинальная Features Section */}
      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div 
            data-animate
            id="features-header"
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['features-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Мы предоставляем все необходимое для создания и управления идеальным Minecraft сервером
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockFeatures.map((feature, index) => (
              <Card 
                key={feature.id} 
                data-animate
                id={`feature-${index}`}
                className={`bg-black/40 border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transform ${
                  isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 transform transition-all duration-300 hover:scale-110">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Оригинальная Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div 
            data-animate
            id="pricing-header"
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['pricing-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Выберите подходящий тариф для вашего сервера в Германии 🇩🇪
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {mockPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                data-animate
                id={`plan-${index}`}
                className={`relative bg-black/40 border-2 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transform ${
                  plan.popular ? 'border-gray-500 shadow-lg shadow-gray-500/20' : 'border-gray-700/50'
                } ${
                  isVisible[`plan-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 animate-pulse">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-400 mb-2">
                    {plan.price}₽
                  </div>
                  <CardDescription className="text-gray-300">в месяц</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="font-semibold">Процессор:</span> {plan.cpu}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold">RAM:</span> {plan.ram}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold">Хранилище:</span> {plan.disk}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold">Базы данных:</span> {plan.databases}
                    </div>
                  </div>
                  <div className="border-t border-gray-700/50 pt-4">
                    <ul className="space-y-2">
                      {plan.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <span className="text-gray-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          и еще {plan.features.length - 4} возможностей...
                        </li>
                      )}
                    </ul>
                  </div>
                  <Button 
                    onClick={handleSelectPlan}
                    className={`w-full mt-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-transparent border border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Оригинальная Testimonials Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div 
            data-animate
            id="testimonials-header"
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['testimonials-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                data-animate
                id={`testimonial-${index}`}
                className={`bg-black/40 border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transform ${
                  isVisible[`testimonial-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2 transform transition-all duration-300 hover:scale-110">{testimonial.avatar}</div>
                  <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl transition-all duration-300 hover:scale-125 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-black/60 border-t border-gray-700/50 py-12">
        <div className="container mx-auto px-4">
          <div 
            data-animate
            id="footer-content"
            className={`transform transition-all duration-1000 ${
              isVisible['footer-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-4 gap-8">
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NFc0QSIvPgo8ZGVmcz4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHdoaXRlOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDFweDsgfQo8L3N0eWxlPgo8L2RlZnM+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMjUiIHkyPSIxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE1IiB5MT0iMTUiIHgyPSIxNSIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI1IiB5Mj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxNSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjgiIHkxPSIyMCIgeDI9IjEyIiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyOCIgeTE9IjIwIiB4Mj0iMzIiIHkyPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iOCIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyMCIgeTE9IjI4IiB4Mj0iMjAiIHkyPSIzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTAiIHgyPSIxMyIgeTI9IjEzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjI3IiB5Mj0iMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMzAiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"
                    alt="VORTEXHOST Logo" 
                    className="w-8 h-8 filter drop-shadow-lg" 
                  />
                  <span className="text-xl font-bold text-white">VORTEXHOST</span>
                </div>
                <p className="text-gray-300">
                  Надежный хостинг для ваших Minecraft серверов
                </p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-white font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors duration-200">Minecraft хостинг</li>
                  <li className="hover:text-white transition-colors duration-200">Защита от DDoS</li>
                  <li className="hover:text-white transition-colors duration-200">Техподдержка</li>
                  <li className="hover:text-white transition-colors duration-200">Панель управления</li>
                </ul>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-white font-semibold mb-4">Поддержка</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors duration-200">База знаний</li>
                  <li className="hover:text-white transition-colors duration-200">Документация</li>
                  <li>
                    <button 
                      onClick={handleTicketsClick}
                      className="hover:text-white transition-all duration-200 transform hover:scale-105"
                    >
                      Тикеты
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={handleDiscordClick}
                      className="hover:text-white transition-all duration-200 transform hover:scale-105"
                    >
                      Discord
                    </button>
                  </li>
                </ul>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-white font-semibold mb-4">Соцсети</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors duration-200">Telegram</li>
                  <li className="hover:text-white transition-colors duration-200">VK</li>
                  <li>
                    <button 
                      onClick={handleDiscordClick}
                      className="hover:text-white transition-all duration-200 transform hover:scale-105"
                    >
                      Discord
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 VORTEXHOST. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;