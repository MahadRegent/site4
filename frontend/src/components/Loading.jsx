import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Логотип с анимацией */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NFc0QSIvPgo8ZGVmcz4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHdoaXRlOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDFweDsgfQo8L3N0eWxlPgo8L2RlZnM+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjEuNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+CjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMjUiIHkyPSIxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjE1IiB5MT0iMTUiIHgyPSIxNSIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMjUiIHkxPSIxNSIgeDI9IjI1IiB5Mj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxNSIgeTE9IjI1IiB4Mj0iMjUiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjgiIHkxPSIyMCIgeDI9IjEyIiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyOCIgeTE9IjIwIiB4Mj0iMzIiIHkyPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iOCIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIyMCIgeTE9IjI4IiB4Mj0iMjAiIHkyPSIzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTAiIHgyPSIxMyIgeTI9IjEzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjI3IiB5Mj0iMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPGxpbmUgeDE9IjMwIiB5MT0iMzAiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K"
              alt="VORTEXHOST Logo" 
              className="w-20 h-20 animate-pulse"
            />
            {/* Вращающийся круг вокруг логотипа */}
            <div className="absolute inset-0 border-4 border-transparent border-t-gray-400 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Название с анимацией появления */}
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          VORTEXHOST
        </h1>

        {/* Подзаголовок */}
        <p className="text-gray-300 mb-8 animate-fade-in-delay">
          Minecraft хостинг
        </p>

        {/* Анимированный индикатор загрузки */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce-delay-1"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce-delay-2"></div>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="w-64 mx-auto bg-gray-700 rounded-full h-1 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-full animate-progress rounded-full"></div>
        </div>

        {/* Текст загрузки */}
        <p className="text-gray-400 mt-4 text-sm animate-fade-in-delay-2">
          Загрузка сервера...
        </p>
      </div>

      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-600 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border border-gray-600 rounded-full animate-pulse-slow-delay"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border border-gray-600 rounded-full animate-pulse-slow-delay-2"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-600 rounded-full animate-pulse-slow"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-delay-1 {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        @keyframes bounce-delay-2 {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-bounce-delay-1 {
          animation: bounce-delay-1 1.4s infinite 0.16s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-delay-2 1.4s infinite 0.32s;
        }

        .animate-progress {
          animation: progress 2s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow 3s ease-in-out infinite 1s;
        }

        .animate-pulse-slow-delay-2 {
          animation: pulse-slow 3s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default Loading;