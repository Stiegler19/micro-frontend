const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

// --- Configurações do Micro Pedido (Remote) ---
const PORT = 3002;
const NAME = 'pedido'; 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {

    publicPath: `http://localhost:${PORT}/`, 
    filename: 'bundle.[contenthash].js',
  },
  devServer: {
  port: PORT,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*', // ESSENCIAL para o 3000 carregar o 3002
  },
},
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [ {
        test: /\.jsx?$/, // <-- IMPORTANTE: Pega .js e .jsx
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      }, ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: NAME, 
      filename: 'remoteEntry.js', 
      exposes: {
        // Expondo o PedidoApp
        './PedidoApp': './src/App.js', 
      },
      shared: {
        // Compartilhamento de React (igual ao Cardápio)
        react: { /* ... */ },
        'react-dom': { /* ... */ },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};