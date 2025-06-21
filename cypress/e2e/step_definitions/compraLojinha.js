import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';  
import { compraLojinhaPage } from '../../support/pages/compraLojinha.page.js';
import '../../support/commands.js';

Given("que estou na página inicial", () => {
  compraLojinhaPage.visitarSite()
  compraLojinhaPage.capturarScreenshot()
});

When("faço login com o email {string} e a senha {string}", (email, senha) => {
  compraLojinhaPage.realizarLogin(email, senha) 
  compraLojinhaPage.capturarScreenshot()
});

When("escolho um produto", () => {
  compraLojinhaPage.escolherProduto()
  compraLojinhaPage.capturarScreenshot()
});

When("adiciono o produto ao carrinho", () => {
  compraLojinhaPage.adicionarCarrinho()
  
});

When("insiro os dados do cartao", () => {
 cy.inserirDadosCartao()
 
});

When("realizo a compra", () => {
  compraLojinhaPage.realizarCompra()
  compraLojinhaPage.capturarScreenshot()
});

Then("recebo a confirmação da compra", () => {
compraLojinhaPage.confirmacaoCompra()
compraLojinhaPage.capturarScreenshot()
});


