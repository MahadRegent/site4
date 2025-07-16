import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симулируем загрузку приложения
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 секунды анимации загрузки

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Блокировка всех остальных путей - перенаправление на главную */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;