class ServerElements {
  // cadastro
  btnCadastrar() {return '[data-testid="cadastrar"]'}
  digiteSeuNome(){return '#nome'};
  digiteSeuEmail(){return '#email'};
  digiteSuaSenha(){return '#password'};
  cadastrarComoAdm(){return '#administrador'};
  msgValidacaoCadastro(){return "//a[contains(text(),'Cadastro realizado com sucesso')]"};
  // login
  inputEmail() {return '#email'};
  inputPass() {return '#password'};
  btnEnter() {return 'button[type="submit"]'};




}

export default ServerElements;
