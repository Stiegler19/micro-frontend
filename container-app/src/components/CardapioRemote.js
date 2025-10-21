import React, { lazy, Suspense } from 'react';

// Acessa o componente exposto pelo micro-cardapio
const CardapioApp = lazy(() => import('cardapio/CardapioApp'));

const CardapioRemote = () => (
  <Suspense fallback={<div>Carregando Cardápio...</div>}>
    <CardapioApp />
  </Suspense>
);
export default CardapioRemote;