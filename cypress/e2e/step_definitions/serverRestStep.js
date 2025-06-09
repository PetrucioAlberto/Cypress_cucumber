import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ServerRestPage from '../pages/serverRestPage';

const serverest = new ServerRestPage();

Given(`que acesso a homePage`, () => {
  serverest.accessHomePage();
});

Given(`realizo o cadastro inicial de adm {string} {string} {string}`, (name, email, password) => {
  serverest.registerUser(name, email, password);
});

When(`eu faço login com email e senha {string} {string}`, (email, password) => {
  serverest.realizeLoginWithEmailAndPassword(email, password);
});
