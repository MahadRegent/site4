import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ fadeOut }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Инициализация...');

  useEffect(() => {
    const texts = [
      'Инициализация...',
      'Подключение к серверу...',
      'Загрузка компонентов...',
      'Почти готово...'
    ];

    const intervals = [0, 400, 800, 1200];
    const progressIntervals = [0, 30, 70, 100];

    texts.forEach((text, index) => {
      setTimeout(() => {
        setCurrentText(text);
        setLoadingProgress(progressIntervals[index]);
      }, intervals[index]);
    });
  }, []);

  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Оптимизированный логотип */}
        <div className="logo-container">
          <div className="logo-wrapper">
            <svg 
              width="100" 
              height="100" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg"
            >
              <rect x="10" y="10" width="20" height="20" rx="2" fill="none" stroke="white" strokeWidth="1.5" transform="rotate(45 20 20)"/>
              <circle cx="15" cy="15" r="1.5" fill="white"/>
              <circle cx="25" cy="15" r="1.5" fill="white"/>
              <circle cx="15" cy="25" r="1.5" fill="white"/>
              <circle cx="25" cy="25" r="1.5" fill="white"/>
              <line x1="15" y1="15" x2="25" y2="15" stroke="white" strokeWidth="1.5"/>
              <line x1="15" y1="15" x2="15" y2="25" stroke="white" strokeWidth="1.5"/>
              <line x1="25" y1="15" x2="25" y2="25" stroke="white" strokeWidth="1.5"/>
              <line x1="15" y1="25" x2="25" y2="25" stroke="white" strokeWidth="1.5"/>
              <line x1="8" y1="20" x2="12" y2="20" stroke="white" strokeWidth="1.5"/>
              <line x1="28" y1="20" x2="32" y2="20" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="8" x2="20" y2="12" stroke="white" strokeWidth="1.5"/>
              <line x1="20" y1="28" x2="20" y2="32" stroke="white" strokeWidth="1.5"/>
              <line x1="10" y1="10" x2="13" y2="13" stroke="white" strokeWidth="1.5"/>
              <line x1="30" y1="10" x2="27" y2="13" stroke="white" strokeWidth="1.5"/>
              <line x1="10" y1="30" x2="13" y2="27" stroke="white" strokeWidth="1.5"/>
              <line x1="30" y1="30" x2="27" y2="27" stroke="white" strokeWidth="1.5"/>
            </svg>
            {/* Оптимизированные спиннеры */}
            <div className="logo-spinner primary"></div>
            <div className="logo-spinner secondary"></div>
            <div className="logo-spinner tertiary"></div>
          </div>
        </div>

        {/* Название с оптимизированной анимацией */}
        <h1 className="main-title">
          VORTEXHOST
        </h1>

        {/* Подзаголовок с быстрым эффектом печатания */}
        <p className="subtitle typewriter">
          Minecraft хостинг
        </p>

        {/* Оптимизированный индикатор загрузки */}
        <div className="dots-container">
          <div className="dots-wrapper">
            <div className="dot pulse"></div>
            <div className="dot pulse"></div>
            <div className="dot pulse"></div>
          </div>
        </div>

        {/* Прогресс бар с реальным прогрессом */}
        <div className="progress-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${loadingProgress}%` }}
          >
            <div className="progress-shine"></div>
          </div>
        </div>

        {/* Динамический текст загрузки */}
        <p className="loading-text animated-text">
          {currentText}
        </p>
      </div>

      {/* Минимальные плавающие частицы */}
      <div className="particles">
        <div className="particle simple"></div>
        <div className="particle simple"></div>
        <div className="particle simple"></div>
        <div className="particle simple"></div>
        <div className="particle simple"></div>
        <div className="particle simple"></div>
      </div>
    </div>
  );
};

export default Loading;