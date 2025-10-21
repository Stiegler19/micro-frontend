const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

// --- Configurações do Container (Host) ---
const PORT = 3000; // Porta 3000

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: `http://localhost:${PORT}/`, 
    filename: 'bundle.[contenthash].js',
  },
  devServer: {
    port: PORT,
    // Garante que o roteamento interno (se houver) funcione
    historyApiFallback: true, 
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // O nome do Host
      remotes: {
        // Mapeamento dos Micros Remotos: <NOME_LOCAL> : <NOME_REMOTO>@<URL_REMOTE_ENTRY>
        cardapio: 'cardapio@http://localhost:3001/remoteEntry.js', 
        pedido: 'pedido@http://localhost:3002/remoteEntry.js', 
      },
      // Compartilhamento de dependências (IDÊNTICO AOS OUTROS)
      shared: {
        react: {
          singleton: true, 
          requiredVersion: require('./package.json').dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: require('./package.json').dependencies['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};