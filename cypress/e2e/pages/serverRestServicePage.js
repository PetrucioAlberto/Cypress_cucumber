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
}
export default ServerRestPage;
