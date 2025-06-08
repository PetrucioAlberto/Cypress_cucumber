import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

Given("que acesso a homePage", function () {
    loginPage.accessHomePage();
});


When('eu inserir login e senha {string} {string}', (email, senha) => {
  loginPage.inputUserData(email, senha);
});

Then('tenho meu acesso realizado', () => {
  loginPage.btnLoginSubmit();
});
