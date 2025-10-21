import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Função para renderizar a aplicação Micro Cardápio
const render = () => {
  // 1. Encontra o elemento 'root' no index.html
  const rootElement = document.getElementById('root');
  
  // 2. Cria a raiz do React 18
  const root = ReactDOM.createRoot(rootElement);

  // 3. Renderiza o componente principal (CardapioApp)
  root.render(<App />);
};

// Como este Micro Frontend é projetado para rodar em modo Standalone (porta 3001) 
// e também via Module Federation, ele se inicializa diretamente.
render();