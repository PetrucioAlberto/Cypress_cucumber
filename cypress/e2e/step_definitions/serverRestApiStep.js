import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import serverRestServicePage from '../pages/serverRestServicePage';

const service = new serverRestServicePage();

Given(`que acesso a api {string}`, (url) => {
    service.setBaseUrl(url);
});

When(`realizo uma request POST para {string}`, (endpoint) => {
    service.sendPostRequest(endpoint);
});

Then(`eu valido a resposta do cadastro realizado`, () => {
    service.validateRegistrationResponse();
});