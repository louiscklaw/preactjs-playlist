export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;
  console.log(babelConfig)
  process.exit();

  // babelConfig.plugins.push(require.resolve('babel-plugin-prismjs'));
  // babelConfig.env = {
    // ...some settings...
  // }
};
