const { withModuleFederation } = require('@angular-architects/module-federation/webpack');

module.exports = async (config, context) => {
  const mf = await withModuleFederation({
    name: 'mfeProdutos',
    filename: 'remoteEntry.js',
    exposes: {
      './ProdutosComponent': './src/app/produtos/produtos.component.ts'
    },
    shared: {
      '@angular/core': { singleton: true, strictVersion: true },
      '@angular/common': { singleton: true, strictVersion: true },
      '@angular/router': { singleton: true, strictVersion: true }
    }
  });

  return mf(config);
};