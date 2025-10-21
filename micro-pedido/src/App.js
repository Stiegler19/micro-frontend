import React, { useState, useEffect } from 'react';

const PedidoApp = () => {
    const [itens, setItens] = useState([]);

    // Lógica de Eventos Globais
    useEffect(() => {
        const handleAdicionar = (event) => {
            const novoItem = event.detail;
            setItens((prevItens) => [...prevItens, novoItem]);
        };
        window.addEventListener('adicionarAoPedido', handleAdicionar);
        return () => {
            window.removeEventListener('adicionarAoPedido', handleAdicionar);
        };
    }, []); 

    // Calcula o total
    const total = itens.reduce((sum, item) => sum + item.preco, 0);
    
    // Estilos de Botão Finalizar
    const finishButtonStyle = {
        background: 'linear-gradient(45deg, #E74C3C, #C0392B)', // Gradiente de Alerta
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        boxShadow: '0 4px #A93226', // Sombra 3D
        transition: 'all 0.2s'
    };

    return (
        // Card de destaque, mais arredondado e com sombra forte
        <div className="card shadow-lg border-0" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
            <div className="card-body p-4">
                <h4 
                    className="card-title text-dark mb-4" 
                    style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px', fontWeight: '700', fontSize: '1.5rem' }}
                >
                    🛒 Seu Pedido
                </h4>
            
                {/* LISTA DE PEDIDOS */}
                <ul className="list-group list-group-flush mb-3">
                    {itens.length === 0 ? (
                        <li className="list-group-item text-center text-secondary bg-transparent py-4">
                            Seu pedido está vazio.
                        </li>
                    ) : (
                        itens.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between bg-transparent py-2">
                                <span style={{ fontSize: '1.1rem' }}>{item.nome}</span>
                                <span className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                            </li>
                        ))
                    )}
                </ul>

                {/* TOTAL DO PEDIDO EM CAIXA DESTAQUE - Fonte Maior */}
                {itens.length > 0 && (
                    <div className="p-3 mt-4 rounded d-flex justify-content-between align-items-center"
                        style={{ background: '#2C3E50', color: 'white', fontWeight: '700', borderRadius: '8px' }} // Fundo Escuro para Total
                    >
                        <span style={{ fontSize: '1.5rem' }}>TOTAL:</span>
                        <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                )}

                {/* BOTÃO FINALIZAR com Hover/Click */}
                {itens.length > 0 && (
                    <button 
                        className="btn w-100 mt-4" 
                        onClick={() => alert(`Pedido no valor de R$ ${total.toFixed(2).replace('.', ',')} finalizado!`)}
                        style={finishButtonStyle}
                        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(45deg, #C0392B, #E53935)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(45deg, #E74C3C, #C0392B)'}
                        onMouseDown={e => { e.currentTarget.style.transform = 'translateY(4px)'; e.currentTarget.style.boxShadow = 'none'; }}
                        onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px #A93226'; }}
                    >
                        Pagar e Finalizar Pedido
                    </button>
                )}
            </div>
        </div>
    );
};

export default PedidoApp;