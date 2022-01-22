const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),   

  output: {
    path:path.resolve(__dirname, "dist"),
  },
  mode: 'development',
  module: {
    rules: [  // rules for transpiling file with babel
      {
        test: /\.?js$/, // for all extension files end with .js 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // webpack loader , it helps to use babel core (transpiler)
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            //  @babel/preset-env = > ES 2015 + syntax
            // @babel/preset-react => react code 
          }
        }
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}
