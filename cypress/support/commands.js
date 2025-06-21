

Cypress.Commands.add('inserirDadosCartao', () => { 
  
  cy.get('#billing_first_name').should('be.visible').clear().type("petrucio");
  cy.get('#billing_last_name').should('be.visible').clear().type("lima");
  cy.get('#billing_company').should('be.visible').clear().type("Lojinha_ebac");
  cy.get('#select2-billing_country-container').should('be.visible').click();
  cy.get('.select2-search__field').should('be.visible').type("Brasil{enter}");
  cy.get('#billing_address_1').should('be.visible').clear().type("rua teste");
  cy.get('#billing_city').should('be.visible').clear().type("osasco");
  cy.get('#select2-billing_state-container').should('be.visible').click();
  cy.get('.select2-search__field').should('be.visible').type("Sao paulo{enter}");
  cy.get('#billing_postcode').should('be.visible').clear().type("06246090");
  cy.get('#billing_phone').should('be.visible').clear().type("11967343635");
  cy.get('#order_comments').should('be.visible').clear().type("teste");
  cy.get('#terms').should('be.visible').check();
 })


