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

  generateUniqueSuffix() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `${timestamp}${random}`;
  }

  addFakeSuffix(value) {
    if (!value) return value;
    const suffix = this.generateUniqueSuffix();
    if (value.includes('@')) {
      const [localPart, domain] = value.split('@');
      return `${localPart}${suffix}@${domain}`;
    }
    return `${value}${suffix}`;
  }

  registerUser(name, email, password) {
    const fakeName = this.addFakeSuffix(name);
    const fakeEmail = this.addFakeSuffix(email);
    const fakePassword = this.addFakeSuffix(password);
    this.storageData.user = {
      name: fakeName,
      email: fakeEmail,
      password: fakePassword,
    };
    cy.log('Register user');
    cy.get(serverElements.btnCadastrar()).should('be.visible').click();
    cy.get(serverElements.digiteSeuNome()).should('be.visible').clear().type(fakeName);
    cy.get(serverElements.digiteSeuEmail()).should('be.visible').clear().type(fakeEmail);
    cy.get(serverElements.digiteSuaSenha()).should('be.visible').clear().type(fakePassword);
    cy.get(serverElements.cadastrarComoAdm()).should('be.visible').click();
    cy.get(serverElements.btnCadastrar()).should('be.visible').click();
    cy.xpath(serverElements.msgValidacaoCadastro()).should('be.visible').then($msg=>{
      const text = $msg.text();
      expect(text).to.contain('Cadastro realizado com sucesso');
    });
  }

  realizeLoginWithEmailAndPassword(email, password){
    cy.log('realizar login');
    cy.get(serverElements.digiteSeuEmail()).should('be.visible').type(email);
    cy.get(serverElements.digiteSuaSenha).should('be.visible').type(password);
    cy.xpath(serverElements.btnEnter()).should('be.visible').click();
  }

}

export default ServerRestPage;
