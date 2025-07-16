import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Логотип с анимацией */}
        <div className="logo-container">
          <div className="logo-wrapper">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NFc0QSIvPgo8ZGVmcz4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHdoaXRlOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDFweDsgfQo8L3N0eWxlPgo8L2RlZnM+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMjUiIHkyPSIxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE1IiB5MT0iMTUiIHgyPSIxNSIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI1IiB5Mj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxNSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjgiIHkxPSIyMCIgeDI9IjEyIiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyOCIgeTE9IjIwIiB4Mj0iMzIiIHkyPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iOCIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyMCIgeTE9IjI4IiB4Mj0iMjAiIHkyPSIzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTAiIHgyPSIxMyIgeTI9IjEzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjI3IiB5Mj0iMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMzAiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"
              alt="VORTEXHOST Logo" 
              className="logo-img"
            />
            {/* Вращающийся круг вокруг логотипа */}
            <div className="logo-spinner"></div>
          </div>
        </div>

        {/* Название с анимацией появления */}
        <h1 className="main-title">
          VORTEXHOST
        </h1>

        {/* Подзаголовок */}
        <p className="subtitle">
          Minecraft хостинг
        </p>

        {/* Анимированный индикатор загрузки */}
        <div className="dots-container">
          <div className="dots-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        {/* Текст загрузки */}
        <p className="loading-text">
          Загрузка сервера...
        </p>
      </div>

      {/* Анимированный фон */}
      <div className="background-elements">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>

      {/* Плавающие частицы */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default Loading;