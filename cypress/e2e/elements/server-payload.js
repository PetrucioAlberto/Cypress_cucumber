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
}

export default ServerPayload;
