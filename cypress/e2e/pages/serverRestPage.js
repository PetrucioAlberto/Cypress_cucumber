/// <reference types="cypress" />
import ServerElements from "../elements/server-elements";
import { faker } from '@faker-js/faker';

const serverElements = new ServerElements();
const url = Cypress.config('baseUrl')

class ServerRestPage {

  storageData = {};

  accessHomePage() {
    cy.log('access home page');
    cy.visit(url); 
  }

  registerUser(name, email, password) {
    const fakeName = faker.person.fullName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();
    this.storageData.user = {
      name: fakeName,
      email: fakeEmail,
      password: fakePassword,
    };
    cy.log('Register user');
    cy.get(serverElements.btnCadastrar(), {timeout:6000}).should('be.visible').click();
    cy.get(serverElements.digiteSeuNome()).should('be.visible').clear().type(fakeName);
    cy.get(serverElements.digiteSeuEmail()).should('be.visible').clear().type(fakeEmail);
    cy.get(serverElements.digiteSuaSenha()).should('be.visible').clear().type(fakePassword);
    cy.get(serverElements.cadastrarComoAdm()).should('be.visible').click();
    cy.get(serverElements.btnCadastrar(), {timeout:6000}).should('be.visible').click();
    cy.xpath(serverElements.msgValidacaoCadastro()).should('be.visible').then($msg=>{
      const text = $msg.text();
      expect(text).to.contain('Cadastro realizado com sucesso');
    });
  }

  validateDashboard(){
    cy.log('Dashboard');
    cy.xpath(serverElements.msgEsteESeuSistema(),{timeout:7000}).should('be.visible').then(()=>{
      cy.xpath(serverElements.cardCadastrarUser()).should('be.visible');
      cy.get(serverElements.btnCadastrarUser()).should('be.visible');

      cy.xpath(serverElements.cardListarUser()).should('be.visible');
      cy.get(serverElements.btnListarUser()).should('be.visible');

      cy.xpath(serverElements.cardCadastrarProdutos()).should('be.visible');
      cy.get(serverElements.btncadastrarProdutos()).should('be.visible');

      cy.xpath(serverElements.cardListarProdutos()).should('be.visible');
      cy.get(serverElements.btnListarProdutos()).should('be.visible');

      cy.xpath(serverElements.cardRelatorios()).should('be.visible');
      cy.get(serverElements.btnVerRelatorios()).should('be.visible');
    });
  }
  accessUserListingPage(){
    cy.log('access user listing page');
    cy.xpath(serverElements.cardListarUser(), {timeout:6000}).should('be.visible');
    cy.get(serverElements.btnListarUser()).should('be.visible').click();
  }

  validateUserListingPage() {
    cy.log('Validate User Listing Page');
    const expectedEmail = this.storageData.user.email;
    cy.xpath(serverElements.titleListaDosUsuarios(), { timeout: 6000 }).should('be.visible');
    let emailFound = false;
    cy.get('tbody tr').each(($row) => {
      const email = Cypress.$($row).find('td').eq(1).text().trim();
      if (email === expectedEmail) {
        emailFound = true;
      }
    }).then(() => {
      expect(emailFound, `Email ${expectedEmail} should be listed`).to.be.true;
    });
  }

  loginWithEmailAndPassword(email, password){
    cy.log('login');
    cy.get(serverElements.digiteSeuEmail()).should('be.visible').type(email);
    cy.get(serverElements.digiteSuaSenha()).should('be.visible').type(password);
    cy.get(serverElements.btnEnter(), {timeout:6000}).should('be.visible').click();
  }

  accessProductRegistrationPage(){
    cy.log('access product registration');
    cy.xpath(serverElements.cardCadastrarProdutos(), {timeout:6000}).should('be.visible');
    cy.get(serverElements.btncadastrarProdutos(), {timeout:6000}).should('be.visible').click();
  }

  productRegistration(){
    cy.log('product registration');
    const product = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 10, max: 1000 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 }),
    };
    this.storageData.product = { ...product };
    cy.xpath(serverElements.titleCadastroDeProdutos(), {timeout:6000})
    .should('be.visible').then(()=>{
      cy.get(serverElements.nomeDoProduto()).should('be.visible').type(product.nome);
      cy.get(serverElements.preco()).should('be.visible').type(product.preco);
      cy.get(serverElements.descricao()).should('be.visible').type(product.descricao);
      cy.get(serverElements.quantidade()).should('be.visible').type(product.quantidade);
      cy.get(serverElements.imagem()).should('be.visible').attachFile('image-test.jpeg');
      cy.get(serverElements.btnCadastrarProdutoDescrito(), {timeout:6000}).click({force:true});
    });
  }

  validateProductList() {
    cy.log('validate product list');
    const expectedProduct = this.storageData.product;
    const nomeEsperado = expectedProduct.nome.toLowerCase();

    cy.xpath(serverElements.titleListaDeProdutos(), { timeout: 6000 }).should('be.visible');
    cy.get('tbody tr', { timeout: 6000 }).then(($rows) => {
      const matchedRows = $rows.filter((index, row) => {
        const nome = Cypress.$(row).find('td').eq(0).text().trim().toLowerCase();
        cy.log(`logLinha: nome="${nome}"`);
        return nome.includes(nomeEsperado);
      });
      if (matchedRows.length > 0) {
        cy.log(`Product "${expectedProduct.nome}" found`);
      } else {
        cy.log(`Product "${expectedProduct.nome}" not found`);
      }
    });
  }
  userEditingAndDeletionProcess(){
    cy.log('user editing an deletion');
    cy.xpath(serverElements.cardListarUser()).should('be.visible');
    cy.get(serverElements.btnListarUser(), {timeout:6000}).should('be.visible').click();
    cy.xpath(serverElements.btnEditar()).should('be.visible');
    cy.get(serverElements.btnExcluir(), {timeout:6000}).should('be.visible').click();
  }
  accessHome(){
    cy.log('home');
    cy.get(serverElements.headHome(), {timeout:6000}).should('be.visible').click();
  }

  accessListingProductsPage(){
    cy.log('access listing page products');
    cy.xpath(serverElements.cardListarProdutos(), {timeout:6000}).should('be.visible');
    cy.get(serverElements.btnListarProdutos()).should('be.visible').click({force:true});
  }

  productEditingAndDeletionProcess(){
    cy.log('product editing an deletion');
    cy.xpath(serverElements.btnEditarProduto()).should('be.visible');
    cy.get(serverElements.btnExcluir(), {timeout:6000}).should('be.visible').click();
  }
}


export default ServerRestPage;
