/// <reference types="cypress" />
import LoginElements from "../elements/loginElements";

const loginElements = new LoginElements();

class LoginPage {
  accessHomePage() {
    cy.visit('https://www.site.com.br');
  }

  inputUserData(email, senha) {
    cy.get(loginElements.inputEmail()).type(email);
    cy.get(loginElements.inputPass()).type(senha);
  }

  btnLoginSubmit() {
    cy.get(loginElements.btnEnter()).click();
  }
}

export default LoginPage;
