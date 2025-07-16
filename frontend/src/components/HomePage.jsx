import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { mockPlans, mockFeatures, mockTestimonials, mockRegions } from '../mock';

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState('Германия');
  const [activeNavItem, setActiveNavItem] = useState('');
  const { toast } = useToast();

  const scrollToSection = (sectionId) => {
    setActiveNavItem(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    // Remove active state after animation
    setTimeout(() => setActiveNavItem(''), 300);
  };

  const scrollToPricing = () => {
    scrollToSection('pricing');
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    if (region === 'Россия') {
      toast({
        title: "Регион недоступен",
        description: "Локация Россия пока недоступна, но появится в скором времени!",
        variant: "destructive"
      });
      setSelectedRegion('Германия');
    }
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

  const filteredPlans = mockPlans.filter(plan => plan.region === selectedRegion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold text-white">VORTEXHOST</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-white hover:text-gray-300 transition-all duration-200 transform ${
                  activeNavItem === 'home' ? 'scale-110 text-gray-300' : ''
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-white hover:text-gray-300 transition-all duration-200 transform ${
                  activeNavItem === 'features' ? 'scale-110 text-gray-300' : ''
                }`}
              >
                Возможности
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`text-white hover:text-gray-300 transition-all duration-200 transform ${
                  activeNavItem === 'pricing' ? 'scale-110 text-gray-300' : ''
                }`}
              >
                Тарифы
              </button>
              <button 
                onClick={handleAboutClick}
                className="text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-white hover:text-gray-300 transition-all duration-200 transform ${
                  activeNavItem === 'contact' ? 'scale-110 text-gray-300' : ''
                }`}
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={handlePanelClick}
              className="bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 transform hover:scale-105"
            >
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
              <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"> Minecraft</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Создай свой мир с мгновенной настройкой, защитой от DDoS и круглосуточной поддержкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToPricing}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Выбрать тариф
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Мы предоставляем все необходимое для создания и управления идеальным Minecraft сервером
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockFeatures.map((feature) => (
              <Card key={feature.id} className="bg-black/40 border-gray-700/50 hover:border-gray-600/80 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Выберите подходящий тариф для вашего сервера
            </p>
            
            {/* Region Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-black/40 p-4 rounded-lg border border-gray-700/50">
                <label className="text-white text-sm font-medium mb-2 block">Выберите регион:</label>
                <Select value={selectedRegion} onValueChange={handleRegionChange}>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {mockRegions.map(region => (
                      <SelectItem key={region.id} value={region.name} className="text-white">
                        {region.flag} {region.name} {!region.available && '(Недоступно)'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredPlans.map((plan) => (
              <Card key={plan.id} className={`relative bg-black/40 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular ? 'border-gray-500 shadow-lg shadow-gray-500/20' : 'border-gray-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gray-600 text-white px-4 py-2">
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
                    <div className="text-gray-300">
                      <span className="font-semibold">Регион:</span> 🇩🇪 {plan.region}
                    </div>
                  </div>
                  <div className="border-t border-gray-700/50 pt-4">
                    <ul className="space-y-2">
                      {plan.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
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
                    className={`w-full mt-6 transition-all duration-200 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gray-600 hover:bg-gray-700 text-white' 
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

      {/* Testimonials Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-black/40 border-gray-700/50 hover:border-gray-600/80 transition-all duration-300 hover:transform hover:scale-105">
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
                  <p className="text-gray-300 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/60 border-t border-gray-700/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="text-xl font-bold text-white">VORTEXHOST</span>
              </div>
              <p className="text-gray-300">
                Надежный хостинг для ваших Minecraft серверов
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Minecraft хостинг</li>
                <li>Защита от DDoS</li>
                <li>Техподдержка</li>
                <li>Панель управления</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li>База знаний</li>
                <li>Документация</li>
                <li>Тикеты</li>
                <li>
                  <button 
                    onClick={handleAboutClick}
                    className="hover:text-gray-100 transition-colors"
                  >
                    Discord
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>support@vortexhost.pro</li>
                <li>+7 (999) 123-45-67</li>
                <li>Telegram</li>
                <li>VK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 VORTEXHOST. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;