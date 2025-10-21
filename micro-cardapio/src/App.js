import React from 'react';

// Dados estáticos
const PRATOS = [
  { id: 1, nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão.', preco: 35.00 },
  { id: 2, nome: 'Lasanha à Bolonhesa', descricao: 'Massa fresca, carne moída e molho bechamel.', preco: 45.00 },
  { id: 3, nome: 'Salmão Grelhado', descricao: 'Acompanhado de purê de batatas rústico.', preco: 58.00 },
];

const CardapioApp = () => {
  
  const handleAdicionarAoPedido = (prato) => {
    // ... lógica de eventos ...
    window.dispatchEvent(
      new CustomEvent('adicionarAoPedido', { detail: prato })
    );
    alert(`"${prato.nome}" adicionado!`);
  };

  // Estilos de Botão para Hover/Click
  const buttonStyle = {
    transition: 'all 0.3s ease',
    backgroundColor: '#3498DB', 
    borderColor: '#3498DB',
    boxShadow: '0 4px #2980B9', // Sombra 3D
    color: 'white',
    borderRadius: '6px',
    padding: '8px 15px',
    fontWeight: '600'
  };
  
  return (
    // Fundo branco, padding maior e sombra mais forte
    <div className="p-5 bg-white shadow-lg" style={{ borderRadius: '12px' }}> 
      <h3 
        className="mb-5 text-dark" 
        style={{ borderLeft: '5px solid #3498DB', paddingLeft: '15px', fontWeight: '700', fontSize: '1.8rem' }}
      >
        Menu Premium
      </h3>
      
      <div className="d-grid gap-4"> {/* Mais espaçamento vertical */}
        {PRATOS.map((prato) => (
          // Cards Arredondados e com Sombra Aprimorada
          <div 
            key={prato.id} 
            className="card border-0 shadow-sm"
            style={{ 
              transition: 'all 0.3s ease', 
              borderRadius: '10px', 
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'} // Sombra maior no hover
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.08)'}
          > 
            <div className="card-body d-flex justify-content-between align-items-center p-4"> {/* Mais padding interno */}
              
              {/* Informações do prato - Fontes maiores */}
              <div>
                <h5 className="card-title text-dark mb-1" style={{ fontWeight: '700', fontSize: '1.4rem' }}>{prato.nome}</h5>
                <p className="text-secondary mb-1" style={{ fontSize: '1rem' }}>{prato.descricao}</p>
                <p className="fw-bold text-success m-0" style={{ fontSize: '1.5rem', fontWeight: '800' }}>R$ {prato.preco.toFixed(2).replace('.', ',')}</p>
              </div>

              {/* Botão de ação com Hover/Click */}
              <button 
                className="btn btn-sm"
                onClick={() => handleAdicionarAoPedido(prato)}
                style={buttonStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2980B9'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3498DB'}
                onMouseDown={e => { e.currentTarget.style.transform = 'translateY(4px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px #2980B9'; }}
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardapioApp;