/// <reference types="cypress" />
import ServerPayload from "../elements/server-payload";
import { faker } from "@faker-js/faker";

const payload = new ServerPayload();

class ServerRestPage {
  constructor() {
    this.storageData = {};
    this.baseUrl = "";
  }

  setBaseUrl(url) {
    cy.log("Setting base URL");
    this.baseUrl = url;
  }

  sendPostRequest(endpoint) {
    cy.log(`POST to ${endpoint}`);
    return cy
      .request({
        method: "POST",
        url: `${this.baseUrl}${endpoint}`,
        headers: {
          "content-type": "application/json",
        },
        body: payload.registerUser(),
      })
      .then((response) => {
        this.storageData.response = response;
        cy.log(`Status: ${response.status}`);
      });
  }

  validateRegistrationResponse() {
    cy.log("validate response");
    const response = this.storageData.response;
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property(
      "message",
      "Cadastro realizado com sucesso"
    );
  }

  captureToken() {
    cy.log("Register new user, and catch token");
    const user = payload.registerUser();
    return cy
      .request({
        method: "POST",
        url: `${this.baseUrl}/usuarios`,
        body: user,
      })
      .then((resCadastro) => {
        expect(resCadastro.status).to.eq(201);
        cy.log("user create success");
        return cy
          .request({
            method: "POST",
            url: `${this.baseUrl}/login`,
            body: {
              email: user.email,
              password: user.password,
            },
          })
          .then((resLogin) => {
            expect(resLogin.status).to.eq(200);
            expect(resLogin.body).to.have.property("authorization");
            this.token = resLogin.body.authorization;
            this.storageData.user = user;
            this.storageData.token = this.token;
            cy.log(`Token catch: ${this.token}`);
          });
      });
  }

  sendPostResquestToRegisterProduct(endpoint) {
    cy.log("Send POST request to register product");
    const product = payload.registerProduct();
    cy.request({
      method: "POST",
      url: `${this.baseUrl}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: this.token,
      },
      body: product,
    }).then((response) => {
      this.storageData.response = response;
      this.storageData.product = product;
      cy.log(`Status: ${response.status}`);
    });
  }
  validateProductCreationResponse() {
    cy.log('validate product response');
    const response = this.storageData.response;
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    expect(response.body).to.have.property('_id').and.to.be.a('string').and.not.be.empty;
    this.storageData.productId = response.body._id;
}

}
export default ServerRestPage;
