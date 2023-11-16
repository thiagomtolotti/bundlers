const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './src/index.js',
    //Múltiplos pontos de entrada (programa com múltiplas páginas)
    /*
    entry : {
        foo: 'foo.js',
        bar: 'bar.js'
    }
    */

    output:{
        clean: true,
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    // Loader: uma forma de preprocessar os arquivos
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    // Plugins - Entrar no ciclo de trabalho do bundler
    plugins: [ new BundleAnalyzerPlugin() ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 9000,
    },

    mode: 'development'
}