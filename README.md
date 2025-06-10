# Cypress Test Suite

Este repositório contém uma suíte de testes automatizados desenvolvida com Cypress para validar a aplicação [ServeRest](https://front.serverest.dev/). 
O projeto abrange testes End-to-End (E2E) via interface web e testes de API, garantindo a verificação completa do comportamento da aplicação tanto no frontend
quanto nas requisições HTTP.

A aplicação testada utiliza os endpoints da [API ServeRest]([https://front.serverest.dev/]) como backend de simulação para operações de usuários, produtos e login.

---

## 📋 Índice

- [📌 Visão Geral](#-visão-geral)
- [🧱 Arquitetura do Projeto](#-arquitetura-do-projeto)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [📦 Instalação e Configuração](#-instalação-e-configuração)
- [🚀 Execução dos Testes](#-execução-dos-testes)
- [📁 Estrutura de Diretórios](#-estrutura-de-diretórios)
- [🤝 Contribuindo](#-contribuindo)
- [📝 Licença](#-licença)
- [📚 Referências](#-referências)

---

## 📌 Visão Geral

Este projeto tem como objetivo validar o comportamento da aplicação front-end que consome a API [ServeRest](https://front.serverest.dev/), utilizando o framework de testes Cypress. São realizados testes automatizados de interface e de lógica, abrangendo:

- Autenticação de usuários
- Cadastro de produtos e listagem de produtos
- Validações de formulários e respostas da API

---

## 🧱 Arquitetura do Projeto

O projeto é dividido em:

- `cypress/e2e`: Testes end-to-end que simulam o fluxo completo.
- `cypress/fixtures`: imagem utilizada no cadastro.
- `cypress/support`: importação do file-upload.
- `cypress.config.js`: Arquivo de configuração principal do Cypress com cucumber.

---

## ⚙️ Pré-requisitos

- Node.js (versão 16.x ou superior)
- npm (ou yarn)
- Git

---

## 📦 Instalação e Configuração

```no bash
git clone https://github.com/clessio35/cypress-test-suite.git
cd cypress-test-suite
npm install
```

Para abrir a interface interativa do Cypress:

```
npx cypress open
```

---

## 🚀 Execução dos Testes

```no terminal/bash execute:
npx cypress open
```

## 📁 Estrutura de Diretórios

```
cypress-test-suite/
├── cypress/
│ ├── e2e/
│ │ ├── elements/
│ │ │ ├── server-elements.js
│ │ │ └── server-payload.js
│ │ ├── features/
│ │ │ ├── serverestapi.feature
│ │ │ └── usuarioseprodutosweb.feature
│ │ ├── pages/
│ │ │ ├── serverRestPage.js
│ │ │ └── serverRestServicePage.js
│ │ └── step_definitions/
│ │ ├── serverRestApiStep.js
│ │ └── serverRestStep.js
│ ├── fixtures/
│ │ ├── example.json
│ │ └── image-test.jpeg
│ ├── support/
│ │ ├── commands.js
│ │ └── index.js
├── cypress.config.js
├── package.json
└── package-lock.json
```

---

## 🤝 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature:

```bash
git checkout -b minha-feature
```

3. Faça commit das alterações:

```bash
git commit -m "Minha nova feature"
```

4. Envie para o repositório remoto:

```bash
git push origin minha-feature
```

5. Abra um Pull Request.

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📚 Referências

- [Cypress - Documentação oficial](https://docs.cypress.io/)
- [ServeRest - API pública para testes]([https://front.serverest.dev/])
