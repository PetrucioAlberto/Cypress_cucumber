/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class ServerPayload {

  constructor() {
    this.storageData = {};
  }
  registerUser() {
    const fakeName = faker.person.fullName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();

    this.storageData.user = {
      name: fakeName,
      email: fakeEmail,
      password: fakePassword,
    };
    return {
      nome: fakeName,
      email: fakeEmail,
      password: fakePassword,
      administrador: "true",
    };
  }

 registerProduct() {
  const nome = faker.commerce.productName();
  const preco = faker.number.int({ min: 10, max: 1000 });
  const descricao = faker.commerce.productDescription();
  const quantidade = faker.number.int({ min: 1, max: 100 });

  const payload = {
    nome,
    preco,
    descricao,
    quantidade
  };
  this.storageData = this.storageData || {};
  this.storageData.product = payload;
  return payload;
}

}

export default ServerPayload;
