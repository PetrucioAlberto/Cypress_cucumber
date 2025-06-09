import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import serverRestServicePage from '../pages/serverRestServicePage';

const service = new serverRestServicePage();

Given(`que acesso a api {string}`, (url) => {
    service.setBaseUrl(url);
    return service.captureToken();
});

When(`realizo uma request POST para {string}`, (endpoint) => {
    service.sendPostRequest(endpoint);
});

Then(`eu valido a resposta do cadastro realizado`, () => {
    service.validateRegistrationResponse();
});

When(`realizo uma request para cadastrar o produto {string}`, (endpoint) => {
    service.sendPostResquestToRegisterProduct(endpoint);
});

Then(`eu valido a resposta do cadastro de produto realizado`, () => {
    service.validateProductCreationResponse();
});

When(`realizo uma request para listar os produtos {string}`, (endpoint) => {
    service.sendGetRequestToListProducts(endpoint);
});

Then(`valido a resposta da listagem de produtos`, () => {
   service.validateListProductsResponse();
});