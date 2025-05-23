// webpack.config.js

export const module = {
    rules: [
        {
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                        sassOptions: {
                            indentedSyntax: true 
                        },
                    },
                },
            ],
        },
    ],
};