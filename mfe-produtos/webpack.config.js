// mfe-produtos/webpack.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const { withModuleFederation } = require('@angular-architects/module-federation/webpack');

module.exports = async (config, context) => {
  // Cria a configuração de Module Federation
  const mf = await withModuleFederation({
    name: 'mfeProdutos',
    filename: 'remoteEntry.js',
    exposes: {
      // Ajuste o caminho se seu componente mudou de lugar
      './ProdutosComponent': './src/app/produtos/produtos.component.ts',
    },
    shared: {
      '@angular/core':   { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      'rxjs':            { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      'zone.js':         { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    },
  });

  // Mescla com a config do Angular
  const merged = mf(config);

  // Boas práticas para MF com Angular 16+ (vale para 20):
  merged.output = {
    ...(merged.output || {}),
    uniqueName: 'mfeProdutos',
    publicPath: 'auto',
    clean: true,
  };

  // Evita múltiplos runtimes quando for carregado pelo host
  merged.optimization = {
    ...(merged.optimization || {}),
    runtimeChunk: false,
  };

  return merged;
};
