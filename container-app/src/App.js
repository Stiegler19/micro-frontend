import React from 'react';

// Importa os Micro Frontends (Module Federation)
const CardapioApp = React.lazy(() => import('cardapio/CardapioApp'));
const PedidoApp = React.lazy(() => import('pedido/PedidoApp'));

const App = () => {
    return (
        // Fundo Cinza Claro Profundo e Fonte 'Roboto'
        <div style={{ 
            padding: '50px 30px', // Mais padding
            backgroundColor: '#E8EAEF', 
            minHeight: '100vh',
            fontFamily: 'Roboto, Arial, sans-serif' 
        }}>

            {/* TÍTULO UNIFICADO - FONTE MAIOR */}
            <h1 style={{ 
                textAlign: 'center', 
                marginBottom: '60px', 
                color: '#2C3E50', // Cor de texto mais escura
                fontWeight: '500', 
                fontSize: '2.5rem' // Fonte maior
            }}>
                🍽️ Sistema de Pedidos - Micro Frontends Elegante
            </h1>
            
            {/* LAYOUT PRINCIPAL: FLEXBOX */}
            <div style={{ 
                display: 'flex', 
                gap: '50px', // Mais espaçamento entre os micros
                maxWidth: '1400px', // Layout mais largo
                margin: '0 auto' 
            }}>
                
                {/* COLUNA ESQUERDA: Cardápio */}
                <div style={{ flex: 3 }}>
                    <React.Suspense fallback={
                        <div className="alert alert-info">Carregando Cardápio...</div>
                    }>
                        <CardapioApp />
                    </React.Suspense>
                </div>
                
                {/* COLUNA DIREITA: Pedido */}
                <div style={{ flex: 1.5 }}>
                    <React.Suspense fallback={
                        <div className="alert alert-info">Carregando Pedido...</div>
                    }>
                        <PedidoApp />
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
};

export default App;