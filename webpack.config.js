const path = require('path');

module.exports = {

    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [

            {
                // transpile js files with babel on the fly
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }


        ]
    }


};