// PavelRyzhkov's own configue
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const PAGES_DIR = `./src/pug/pages`;
const PAGES_FOLDERS = fs.readdirSync(PAGES_DIR);
// console.log(PAGES_FOLDERS);

const getFiles = (dir, fileType) => {
  return dir.map(folder => {
    const folderPath = `${PAGES_DIR}/${folder}/`;
    const folderFiles = fs.readdirSync(folderPath);
    const pageFile = folderFiles.find(fileName => fileName.endsWith(`.${fileType}`));
    return pageFile
    ;});}

const PAGES = getFiles(PAGES_FOLDERS, 'pug');
// console.log(PAGES);


module.exports = {
  entry: '/src/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]index.js',
  },

  module: {
    rules: [
    // html
    { 
      test: /\.html$/i,
      loader: "html-loader",
      },
    // Bubel
    {
      test: /\.m?js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      },
    // styles
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    // sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // Pug
      {
        test: /\.pug$/,
        // loader: 'pug-loader',
        oneOf: [
          { use: ['pug-loader?pretty=true']}
               ]
      },
    // Copy
    // {
    //   test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
    //   use: [
    //     {
    //       loader: 'file-loader?name=./fonts/[name].[ext]'
    //     },
    //   ],
    // }, 

  // End rules  
  ],
},

    


  plugins: [
    
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
   
    new HtmlWebpackPlugin(),

    // css new file
    new MiniCssExtractPlugin({
      filename: `./css/[name].css`,
    }),

  // copywebpack
  new CopyPlugin({
    patterns: [
    { from: `./src/fonts`, to: `fonts` },
    { from: `./src/img`, to: `img` },
    { from: `./src/favicons`, to: 'favicons' },
  ]}),
  // Pug
  // new HtmlWebpackPlugin({
  //   template: `.src/pug/pages/colorstype/colorstrype.pug`,
  //   filename: './colorstype.html',
  //   inject: true
  // }),

  ...PAGES.map((page, index) => new HtmlWebpackPlugin({
    template: `${PAGES_DIR}/${PAGES_FOLDERS[index]}/${page}`,
    filename: `./${page.replace(/\.pug/,'.html')}`, 
    pretty: true,
  })),
  ],
};