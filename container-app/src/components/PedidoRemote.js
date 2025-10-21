import React, { lazy, Suspense } from 'react';

// Acessa o componente exposto pelo micro-pedido
const PedidoApp = lazy(() => import('pedido/PedidoApp'));

const PedidoRemote = () => (
  <Suspense fallback={<div>Carregando Pedido...</div>}>
    <PedidoApp />
  </Suspense>
);
export default PedidoRemote;