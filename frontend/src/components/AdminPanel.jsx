import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useToast } from '../hooks/use-toast';
import { mockPlans, mockRegions, savePlan, deletePlan, saveSettings } from '../mock';

const AdminPanel = () => {
  const [plans, setPlans] = useState(mockPlans);
  const [editingPlan, setEditingPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [planForm, setPlanForm] = useState({
    name: '',
    price: '',
    ram: '',
    disk: '',
    cpu: '',
    region: '',
    features: [],
    popular: false
  });

  const [newFeature, setNewFeature] = useState('');

  const handleEditPlan = (plan) => {
    setEditingPlan(plan.id);
    setPlanForm({
      name: plan.name,
      price: plan.price.toString(),
      ram: plan.ram,
      disk: plan.disk,
      cpu: plan.cpu,
      region: plan.region,
      features: [...plan.features],
      popular: plan.popular
    });
  };

  const handleSavePlan = async () => {
    if (!planForm.name || !planForm.price || !planForm.ram || !planForm.disk || !planForm.cpu || !planForm.region) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const planData = {
        ...planForm,
        price: parseInt(planForm.price)
      };

      await savePlan(planData);

      if (editingPlan) {
        setPlans(plans.map(p => p.id === editingPlan ? { ...p, ...planData } : p));
        toast({
          title: "Успех",
          description: "План обновлен успешно"
        });
      } else {
        const newPlan = {
          id: Date.now(),
          ...planData
        };
        setPlans([...plans, newPlan]);
        toast({
          title: "Успех",
          description: "План создан успешно"
        });
      }

      resetForm();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить план",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePlan = async (planId) => {
    setLoading(true);
    try {
      await deletePlan(planId);
      setPlans(plans.filter(p => p.id !== planId));
      toast({
        title: "Успех",
        description: "План удален успешно"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить план",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditingPlan(null);
    setPlanForm({
      name: '',
      price: '',
      ram: '',
      disk: '',
      cpu: '',
      region: '',
      features: [],
      popular: false
    });
  };

  const addFeature = () => {
    if (newFeature.trim() && !planForm.features.includes(newFeature.trim())) {
      setPlanForm({
        ...planForm,
        features: [...planForm.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };

  const removeFeature = (featureToRemove) => {
    setPlanForm({
      ...planForm,
      features: planForm.features.filter(f => f !== featureToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Панель администратора</h1>
          <p className="text-slate-300">Управление тарифными планами VORTEXHOST</p>
        </div>

        <Tabs defaultValue="plans" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="plans" className="text-white">Тарифные планы</TabsTrigger>
            <TabsTrigger value="settings" className="text-white">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Plan Form */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {editingPlan ? 'Редактировать план' : 'Создать новый план'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">Название плана</Label>
                      <Input
                        id="name"
                        value={planForm.name}
                        onChange={(e) => setPlanForm({...planForm, name: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Starter"
                      />
                    </div>
                    <div>
                      <Label htmlFor="price" className="text-slate-300">Цена (₽)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={planForm.price}
                        onChange={(e) => setPlanForm({...planForm, price: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="299"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ram" className="text-slate-300">Оперативная память</Label>
                      <Input
                        id="ram"
                        value={planForm.ram}
                        onChange={(e) => setPlanForm({...planForm, ram: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="2GB"
                      />
                    </div>
                    <div>
                      <Label htmlFor="disk" className="text-slate-300">Дисковое пространство</Label>
                      <Input
                        id="disk"
                        value={planForm.disk}
                        onChange={(e) => setPlanForm({...planForm, disk: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="10GB SSD"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cpu" className="text-slate-300">Процессор</Label>
                      <Input
                        id="cpu"
                        value={planForm.cpu}
                        onChange={(e) => setPlanForm({...planForm, cpu: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="1 Core"
                      />
                    </div>
                    <div>
                      <Label htmlFor="region" className="text-slate-300">Регион</Label>
                      <Select value={planForm.region} onValueChange={(value) => setPlanForm({...planForm, region: value})}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {mockRegions.map(region => (
                            <SelectItem key={region.id} value={region.name} className="text-white">
                              {region.flag} {region.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-300">Особенности плана</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Добавить особенность"
                        onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                      />
                      <Button onClick={addFeature} className="bg-green-600 hover:bg-green-700">
                        Добавить
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {planForm.features.map((feature, index) => (
                        <Badge key={index} className="bg-slate-700 text-white">
                          {feature}
                          <button
                            onClick={() => removeFeature(feature)}
                            className="ml-2 text-red-400 hover:text-red-300"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="popular"
                      checked={planForm.popular}
                      onChange={(e) => setPlanForm({...planForm, popular: e.target.checked})}
                      className="w-4 h-4 text-green-600 bg-slate-700 border-slate-600 rounded"
                    />
                    <Label htmlFor="popular" className="text-slate-300">Популярный план</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={handleSavePlan}
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {loading ? 'Сохранение...' : editingPlan ? 'Обновить' : 'Создать'}
                    </Button>
                    {editingPlan && (
                      <Button 
                        onClick={resetForm}
                        variant="outline"
                        className="border-slate-600 text-slate-300"
                      >
                        Отменить
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Plans List */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Текущие планы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {plans.map(plan => (
                      <div key={plan.id} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                            <p className="text-green-400 text-xl font-bold">{plan.price}₽/мес</p>
                          </div>
                          <div className="flex gap-2">
                            {plan.popular && (
                              <Badge className="bg-green-600 text-white">Популярный</Badge>
                            )}
                            <Button
                              onClick={() => handleEditPlan(plan)}
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Редактировать
                            </Button>
                            <Button
                              onClick={() => handleDeletePlan(plan.id)}
                              size="sm"
                              variant="destructive"
                              disabled={loading}
                            >
                              Удалить
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                          <div>RAM: {plan.ram}</div>
                          <div>Диск: {plan.disk}</div>
                          <div>CPU: {plan.cpu}</div>
                          <div>Регион: {plan.region}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Настройки сайта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="site-title" className="text-slate-300">Заголовок сайта</Label>
                  <Input
                    id="site-title"
                    defaultValue="VORTEXHOST"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="site-description" className="text-slate-300">Описание сайта</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Лучший хостинг для Minecraft серверов"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-slate-300">Email для связи</Label>
                  <Input
                    id="contact-email"
                    defaultValue="support@vortexhost.ru"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Сохранить настройки
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;