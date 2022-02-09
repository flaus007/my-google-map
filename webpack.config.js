const path = require("path");

module.exports = {
    mode: 'production',
    watch: true,
    entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}
