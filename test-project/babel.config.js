module.exports = {
  presets: [['@babel/preset-env', {modules: 'commonjs', targets: {node: 'current'}}]],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
};