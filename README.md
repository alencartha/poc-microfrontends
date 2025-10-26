# Prova de Conceito – Arquitetura com Micro Frontends

Este repositório contém a estrutura inicial da Prova de Conceito (PoC) desenvolvida para o TCC _"Do Monolito à Autonomia: Uma Abordagem Aplicada com Micro Front-ends e Entrega Contínua"_. O objetivo é demonstrar, de forma prática, a extração de um módulo funcional de uma aplicação monolítica para um micro frontend.

## Estrutura do Projeto

```bash
poc-microfrontends/
├── loja-monolito/          # Aplicação monolítica base (porta 4200)
├── mfe-produtos/           # Micro frontend de produtos (porta 4201)
└── host-app/               # Aplicação host/container (porta 4202)
```

### Descrição dos Módulos

- **loja-monolito**: Aplicação Angular simulando um sistema legado. Contém o módulo de produtos antes da extração.
- **mfe-produtos**: Micro frontend independente que replica a funcionalidade de produtos.
- **host-app**: Aplicação container configurada com Webpack Module Federation para compor dinamicamente o micro frontend em tempo de execução.

## Tecnologias Utilizadas

- **Angular 2+**
- **Webpack Module Federation**
- **Vite** (usado como builder moderno no Angular 2+)
- **TypeScript**
- **pnpm** para gerenciamento de pacotes
- **Git** para versionamento

## Pré-requisitos

- Node.js 18+
- pnpm instalado globalmente (`npm install -g pnpm`)

## Como Executar

Em terminais separados:

```bash
cd loja-monolito && pnpm install && pnpm start
cd mfe-produtos && pnpm install && pnpm start
cd host-app && pnpm install && pnpm start
```

Acesse nos navegadores:

- Loja Monolito: http://localhost:4200
- Micro Frontend Produtos: http://localhost:4201
- Host App: http://localhost:4202

## Scripts Disponíveis (`mfe-produtos`)

| Script                   | Descrição                                      |
| ------------------------ | ---------------------------------------------- |
| `start`                  | Inicia a aplicação localmente via `ng serve`   |
| `build`                  | Compila o projeto Angular para produção        |
| `serve:ssr:mfe-produtos` | Inicia o micro frontend com SSR usando Express |
| `run:all`                | Inicia o dev server federado com módulo remoto |

## CI/CD com GitHub Actions

A esteira de integração e entrega contínua será implementada em etapas. Inicialmente, contempla:

- **Build automatizado por branch**
- **Testes automatizados via Karma/Jasmine**
- **Deploy contínuo para ambiente de preview (ex: Vercel ou Netlify)**

### Estrutura esperada do pipeline (`.github/workflows/main.yml`):

```yaml
name: CI/CD - Micro Frontend Produtos

on:
  push:
    branches: [ main, dev ]
  pull_request:
    branches: [ main, dev ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Instalação do Node e pnpm
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'

      - name: Instalar dependências
        run: pnpm install

      - name: Build de Produção
        run: pnpm build --configuration production


Esta PoC visa validar os seguintes aspectos:

- A viabilidade técnica da extração modular de um front-end legado
- A integração via Module Federation em Angular
- A separação de responsabilidades por domínio funcional
- A autonomia de build e deploy por micro frontend

---

**Licença:** Projeto exclusivamente educacional, parte do TCC de Thaís Araujo de Alencar
(MBA em Engenharia de Software – USP/ESALQ).
Sem finalidade comercial.
```
