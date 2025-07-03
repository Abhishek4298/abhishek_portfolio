const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  // Add a custom rule to handle SCSS files with sass instead of node-sass
  addWebpackModuleRule({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
        },
      },
    ],
  })
);
