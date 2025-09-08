let contadorDePrints = 1;

export const compraLojinhaPage = {
  
  visitarSite() {
    cy.visit("http://lojaebac.ebaconline.art.br/");
  },
  
  realizarLogin(email, senha) {
    cy.get('.icon-user-unfollow').should('be.visible').click();
    cy.get('#username').should('be.visible').type(email);
    cy.get('#password').should('be.visible').type(senha);
    cy.get('.woocommerce-form > .button').should('be.visible').click();
  },

  validarBoasVindas() {
    cy.get('a > .hidden-xs').should('have.text', 'Welcome petrucio2000 !');
  },

  escolherProduto() {
    cy.get('.search').should('be.visible').type("Ingrid Running Jacket");
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click();
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Red').click();
    cy.get('.input-text').clear().type("1");
    cy.get('.single_add_to_cart_button').should('be.visible').click();
  },

  clicarVerCarrinho() {
    cy.get('.woocommerce-message > .button').should('be.visible').click();
  },

  validarItemCarrinho() {
    cy.get('.product-name > a').should('have.text', 'Ingrid Running Jacket - XS, Red').scrollIntoView();
  },

  clicarCheckout() {
    cy.get('.checkout-button').should('be.visible').click();
  },

  inserirDadosCartao(nome, sobrenome, empresa, endereco, cidade, cep, telefone) {
    cy.get('#billing_first_name').should('be.visible').clear().type(nome);
    cy.get('#billing_last_name').should('be.visible').clear().type(sobrenome);
    cy.get('#billing_company').should('be.visible').clear().type(empresa);
    cy.get('#select2-billing_country-container').should('be.visible').click();
    cy.get('.select2-search__field').should('be.visible').type("Brasil{enter}");
    cy.get('#billing_address_1').should('be.visible').clear().type(endereco);
    cy.get('#billing_city').should('be.visible').clear().type(cidade);
    cy.get('#select2-billing_state-container').should('be.visible').click();
    cy.get('.select2-search__field').should('be.visible').type("Sao paulo{enter}");
    cy.get('#billing_postcode').should('be.visible').clear().type(cep);
    cy.get('#billing_phone').should('be.visible').clear().type(telefone);
    cy.get('#order_comments').should('be.visible').clear().type("teste");
    cy.get('#terms').should('be.visible').check();
  },

  realizarCompra() {
    cy.get('#place_order').should('be.visible').click();
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