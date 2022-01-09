// PavelRyzhkov - own config
const path = require('path');
const fs = require('fs');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getFiles = (dir, fileType) => {
    return dir.map(folder => {
      const folderPath = `${PAGES_DIR}/${folder}`;
      const folderFiles = fs.readdirSync(folderPath);
      const pageFile = folderFiles.find(fileName => fileName.endsWith(`.${fileType}`));
      return pageFile;});}
const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    }
const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGE_FOLDERS = fs.readdirSync(PAGES_DIR);
const PAGES = getFiles(PAGE_FOLDERS, 'pug');

module.exports = {
   entry: './src/index.js',
   devtool: 'eval-source-map',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/[name].min.js`,
    },

  module: {
    rules: [
    // Pug 
        {
        test: /\.pug$/,
        oneOf: [
          { use: ['pug-loader?pretty=true']}
               ]
        },

    // Bubel
        {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        },

    // Copy
    {
        test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ],
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
     
    // css
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    //   end rules
    ],
  },

  plugins: [
  // css new file
  new MiniCssExtractPlugin({
    filename: `./css/[name].css`,
  }),

  // copywebpack
  new CopyWebpackPlugin({
    patterns: [
    { from: `${PATHS.src}/fonts`, to: `fonts` },
    { from: `${PATHS.src}/img`, to: `img` },
    { from: `${PATHS.src}/favicons`, to: 'favicons' },
  ]}),

  // pug
    ...PAGES.map((page, index) => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${PAGE_FOLDERS[index]}/${page}`,
        filename: `./${page.replace(/\.pug/,'.html')}`,
        })),
  ]
};