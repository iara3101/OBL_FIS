const path = require("path");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
      return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
    } catch (e) {
      return '';
    }
  }
  
  function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
      tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
        sourceFilename);
  }
  
  function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
      const resolved = tryResolveScss(url, prev);
      return {file: resolved || url};
    }
    return {file: url};
  }

// using enviroment variables to determine the correct compiling mode
let mode = (process.env.NODE_ENV === "production") ? "production" : "development";

module.exports = {

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",  
            },
            {
                test: /\.s?css$/i,
                use: [
                    // {
                    //    loader: MiniCssExtractPlugin.loader,
                    //    options: { publicPath: "",esModule: false,
                    // }
                    // }, 
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'bundle.css',
                        },
                      },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [
                              autoprefixer()
                            ]
                          }
                        } 
                      },
                      {
                        loader: 'sass-loader',
                        options: {   
                          // Prefer Dart Sass
                          implementation: require('sass'),
                          // See https://github.com/webpack-contrib/sass-loader/issues/804
                          webpackImporter: false,
                          sassOptions: {
                            importer: materialImporter,
                            includePaths: ['./node_modules'],
                          },
                        },
                      }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],

    mode: mode,
    devServer: {
        contentBase: "./dist",
    }
}