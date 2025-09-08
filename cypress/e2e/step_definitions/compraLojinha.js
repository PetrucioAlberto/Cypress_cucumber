import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { compraLojinhaPage } from '../../support/pages/compraLojinha.Page.js';


const nome = "petrucio";
const sobrenome = "lima";
const empresa = "Lojinha_ebac";
const endereco = "rua teste";
const cidade = "osasco";
const cep = "06246090";
const telefone = "11967343635";
const produtoNome = "Ingrid Running Jacket";
const produtoTamanho = "XS";
const produtoCor = "Red";
const produtoQtd = "1"

Given("que estou na página inicial", () => {
  compraLojinhaPage.visitarSite();
  compraLojinhaPage.capturarScreenshot();
});

When("faço login com o email {string} e a senha {string}", (email, senha) => {
  cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/minha-conta/').as('login');
  compraLojinhaPage.realizarLogin(email, senha);
  cy.wait('@login').its('response.statusCode').should('eq', 302);
  compraLojinhaPage.validarBoasVindas(); 
  compraLojinhaPage.capturarScreenshot();
});

When("escolho um produto", () => {
    
  cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/?wc-ajax=get_refreshed_fragments', {
    statusCode: 200,
    body: {
      "fragments": {
        "div.widget_shopping_cart_content": '<div class="widget_shopping_cart_content"><p class="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><bdi>R$200,00</bdi></span></p></div>',
        ".widget_shopping_cart_content": '<div class="widget_shopping_cart_content"><p class="woocommerce-mini-cart__total total"><strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><bdi>R$200,00</bdi></span></p></div>'
      },
      "item_count": 1,
      "cart_contents_count": 1
    }
  }).as('addToCart');

  
  compraLojinhaPage.escolherProduto(produtoNome, produtoTamanho, produtoCor, produtoQtd );
  cy.wait('@addToCart').its('response.statusCode').should('eq', 200);
  compraLojinhaPage.capturarScreenshot();
});

When("adiciono o produto ao carrinho", () => {
  compraLojinhaPage.clicarVerCarrinho();
  compraLojinhaPage.validarItemCarrinho(); 
  compraLojinhaPage.clicarCheckout(); 
  compraLojinhaPage.capturarScreenshot();
});

When("insiro os dados do cartao", () => {
  
  compraLojinhaPage.inserirDadosCartao(nome, sobrenome, empresa, endereco, cidade, cep, telefone);
  compraLojinhaPage.capturarScreenshot();
});

When("realizo a compra", () => {
  cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/?wc-ajax=get_refreshed_fragments').as('confirmaCompra');
  compraLojinhaPage.realizarCompra();
  cy.wait('@confirmaCompra').its('response.statusCode').should('eq', 200);
  compraLojinhaPage.capturarScreenshot();
});

Then("recebo a confirmação da compra", () => {
  compraLojinhaPage.confirmacaoCompra();
  compraLojinhaPage.capturarScreenshot();
});