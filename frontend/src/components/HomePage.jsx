import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockPlans, mockFeatures, mockTestimonials } from '../mock';

const HomePage = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold text-white">VORTEXHOST</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-green-400 transition-colors">Главная</a>
              <a href="#features" className="text-white hover:text-green-400 transition-colors">Возможности</a>
              <a href="#pricing" className="text-white hover:text-green-400 transition-colors">Тарифы</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors">О нас</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors">Контакты</a>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Панель управления
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1646729471602-3387c6715f3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBzZXJ2ZXJ8ZW58MHx8fGdyZWVufDE3NTI2OTE0NTR8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Лучший хостинг для
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Minecraft</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Создай свой мир с мгновенной настройкой, защитой от DDoS и круглосуточной поддержкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPricing}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Выбрать тариф
              </Button>
              <Button 
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Демо панель
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Мы предоставляем все необходимое для создания и управления идеальным Minecraft сервером
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockFeatures.map((feature) => (
              <Card key={feature.id} className="bg-black/40 border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-100 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего сервера
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockPlans.map((plan) => (
              <Card key={plan.id} className={`relative bg-black/40 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-2">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {plan.price}₽
                  </div>
                  <CardDescription className="text-green-100">в месяц</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-green-100">
                      <span className="font-semibold">RAM:</span> {plan.ram}
                    </div>
                    <div className="text-green-100">
                      <span className="font-semibold">Диск:</span> {plan.disk}
                    </div>
                    <div className="text-green-100">
                      <span className="font-semibold">CPU:</span> {plan.cpu}
                    </div>
                    <div className="text-green-100">
                      <span className="font-semibold">Регион:</span> {plan.region}
                    </div>
                  </div>
                  <div className="border-t border-green-500/30 pt-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-green-100">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-transparent border border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-black/40 border-green-500/30 hover:border-green-500/60 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-green-500/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="text-xl font-bold text-white">VORTEXHOST</span>
              </div>
              <p className="text-green-100">
                Надежный хостинг для ваших Minecraft серверов
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-green-100">
                <li>Minecraft хостинг</li>
                <li>Защита от DDoS</li>
                <li>Техподдержка</li>
                <li>Панель управления</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-green-100">
                <li>База знаний</li>
                <li>Документация</li>
                <li>Тикеты</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-green-100">
                <li>support@vortexhost.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Telegram</li>
                <li>VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-500/30 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2025 VORTEXHOST. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;