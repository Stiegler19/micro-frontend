import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Função para renderizar a aplicação Container
const render = () => {
  // 1. Encontra o elemento 'root' no index.html
  const rootElement = document.getElementById('root');
  
  // 2. Cria a raiz do React 18
  const root = ReactDOM.createRoot(rootElement);

  // 3. Renderiza o componente principal
  root.render(<App />);
};

// Como este é o Host (Container), ele sempre se inicia sozinho.
// A função 'render' é chamada diretamente.
render();