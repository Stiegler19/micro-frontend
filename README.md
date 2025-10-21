# Sistema de Pedidos - Micro Frontends (Module Federation)

Este projeto demonstra a integração de três aplicações React independentes usando o **Webpack Module Federation**. O sistema é um simulador de pedidos com um Cardápio e um Carrinho.

## 🚀 Como Rodar o Projeto

É obrigatório iniciar os **três microsserviços** em terminais separados, pois o `Container App` depende da disponibilidade do `Cardápio` e do `Pedido`.

1.  **Instalação:** Em cada uma das três pastas (`container-app`, `micro-cardapio`, `micro-pedido`), execute:
    ```bash
    npm install
    ```

2.  **Inicialização (3 Terminais):** Abra três terminais/abas diferentes e execute `npm start` em cada pasta:

    | Terminal 1 | Terminal 2 | Terminal 3 |
    | :--- | :--- | :--- |
    | `cd micro-cardapio` | `cd micro-pedido` | `cd container-app` |
    | `npm start` (Porta 3001) | `npm start` (Porta 3002) | `npm start` (Porta 3000) |

3.  **Acesso:** O sistema final estará disponível em:
    ```
    http://localhost:3000
    ```

## 🤝 Comunicação entre Micro Frontends

A comunicação entre os componentes é o ponto central da arquitetura:

| Remetente (Porta 3001) | Receptor (Porta 3002) | Mecanismo |
| :--- | :--- | :--- |
| **Micro Cardápio** | **Micro Pedido** | Eventos Globais (`window.dispatchEvent`) |

1.  O **Micro Cardápio** (botão "Adicionar") dispara um `CustomEvent` global na `window`.
2.  O **Micro Pedido** está escutando continuamente esse evento (`window.addEventListener`) e, ao capturá-lo, atualiza seu estado (a lista de itens do pedido) em tempo real.

Este desacoplamento garante que cada micro mantenha sua independência total.
