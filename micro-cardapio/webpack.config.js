const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

// --- Configurações do Micro Cardápio (Remote) ---
const PORT = 3001;
const NAME = 'cardapio';

module.exports = {
  mode: 'development',
  // O ponto de entrada que importa o bootstrap.js
  entry: './src/index.js',
  output: {
    // Importante! Define a URL base para que outros apps possam carregar este micro
    publicPath: `http://localhost:${PORT}/`, 
    // Garante que o bundle principal seja nomeado corretamente (opcional)
    filename: 'bundle.[contenthash].js', 
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*', // ESSENCIAL!
    },
  },
  resolve: {
    // Permite importar módulos sem a extensão .js ou .jsx
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Aplica o Babel em arquivos .js e .jsx
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      // Adicionar loaders para CSS/Assets se necessário, mas simplificamos aqui
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: NAME, // 1. Nome único do micro-frontend (usado pelo Container)
      filename: 'remoteEntry.js', // 2. O arquivo manifest que o Container vai buscar
      exposes: {
        // 3. O que queremos expor para outros aplicativos
        // O Container vai importar: 'cardapio/CardapioApp'
        './CardapioApp': './src/App.js', 
      },
      shared: {
        // 4. Compartilhando React e React-DOM para evitar duplicação de bundle
        react: {
          singleton: true, // Garante que apenas uma instância seja carregada
          requiredVersion: require('./package.json').dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: require('./package.json').dependencies['react-dom'],
        },
      },
    }),
    // 5. Gera o arquivo index.html no build
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};