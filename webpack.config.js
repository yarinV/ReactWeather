var webpack  = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    external:{
        jquery: 'jQuery'
    },
    plugin: [
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main : 'app/components/Main.jsx',
            MainStyle : 'app/styles/components/_main.css',
            Nav : 'app/components/Nav.jsx',
            NavStyle: 'app/styles/components/_nav.css',
            Weather : 'app/components/Weather.jsx',
            About : 'app/components/About.jsx',
            Examples : 'app/components/Examples.jsx',
            WeatherForm : 'app/components/WeatherForm.jsx',
            WeatherFormStyle: 'app/styles/components/_weatherForm.css',
            WeatherMessage : 'app/components/WeatherMessage.jsx',
            WeatherMessageStyle : 'app/styles/components/_weatherMessage.css',
            openWeatherMap : 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-aval-source-map'
};

