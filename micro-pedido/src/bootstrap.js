import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Função para renderizar a aplicação Micro Pedido
const render = () => {
  // 1. Encontra o elemento 'root' no index.html
  const rootElement = document.getElementById('root');
  
  // 2. Cria a raiz do React 18
  const root = ReactDOM.createRoot(rootElement);

  // 3. Renderiza o componente principal (PedidoApp)
  root.render(<App />);
};

// O Micro Pedido se inicializa diretamente, pois é projetado para rodar 
// tanto em modo Standalone (porta 3002) quanto via Module Federation.
render();