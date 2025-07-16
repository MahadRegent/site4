import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Оптимизированная загрузка приложения - сокращено до 1.5 секунд
    const timer = setTimeout(() => {
      setFadeOut(true); // Начинаем fade-out анимацию
      setTimeout(() => {
        setLoading(false); // Убираем экран загрузки после анимации
      }, 500); // 500ms для быстрого плавного fade-out
    }, 1500); // 1.5 секунды анимации загрузки

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading fadeOut={fadeOut} />;
  }

  return (
    <div className="App">
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Блокировка всех остальных путей - перенаправление на главную */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;