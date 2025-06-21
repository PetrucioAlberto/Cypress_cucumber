let contadorDePrints = 1;

export const compraLojinhaPage = {
  realizarLogin(email, senha) {
  cy.get('.icon-user-unfollow').should('be.visible').click();
  cy.get('#username').should('be.visible').type(email);
  cy.get('#password').should('be.visible').type(senha);
  cy.get('.woocommerce-form > .button').should('be.visible').click();
  cy.get('a > .hidden-xs').should('have.text', 'Welcome petrucio2000 !'); 
  },

  visitarSite() {
    cy.visit("http://lojaebac.ebaconline.art.br");
  },

  escolherProduto() {
     cy.get('.search').should('be.visible').type("Augusta Pullover Jacket");
      cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').should('be.visible').click();
      cy.get('.button-variable-item-XS').should('be.visible').click();
      cy.get('.button-variable-item-Red').should('be.visible').click();
      cy.get('.input-text').should('be.visible').clear().type("3"); 
      cy.wait(2000)
      cy.get('.single_add_to_cart_button').should('be.visible').click()
  },

  adicionarCarrinho() {
    cy.get('.woocommerce-message > .button').should('be.visible').click();
    cy.get('.product-name > a').should('have.text', 'Augusta Pullover Jacket - XS, Red').scrollIntoView();
    cy.get('.checkout-button').should('be.visible').click();  
  },

  realizarCompra() {
    cy.get('#place_order').should('be.visible').click()
  },

  confirmacaoCompra() {
    cy.get('.page-title').should('have.text', 'Pedido recebido');
    cy.get('.page-title').should('be.visible');
    
  },  

  capturarScreenshot() {
    const nomeDoPrint = `screenshot-${contadorDePrints}`;
    cy.screenshot(nomeDoPrint);
    contadorDePrints++;
  },
};
