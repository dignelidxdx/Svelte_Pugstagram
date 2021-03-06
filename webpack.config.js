const path = require('path'); //Modulo dentro de node para identificar un valor del sistema OP donde se este trabajando
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',    
    output: {
        path: path.resolve(__dirname, 'dist'), //distribution
        filename: 'bundle.js'
    },
    resolve: { //typo
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { inject: true,
              template: './public/index.html',
              filename: './index.html'}
        )
    ]
}
