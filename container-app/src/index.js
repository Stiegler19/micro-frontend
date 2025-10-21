// O ponto de entrada principal do Webpack.
// Importa o bootstrap.js de forma assíncrona para que o Module Federation
// possa carregar os remotos antes que o React seja inicializado.
import('./bootstrap');