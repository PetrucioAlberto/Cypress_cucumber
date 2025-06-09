class ServerElements {
  //register
  btnCadastrar() {return '[data-testid="cadastrar"]'}
  digiteSeuNome(){return '#nome'};
  digiteSeuEmail(){return '#email'};
  digiteSuaSenha(){return '#password'};
  cadastrarComoAdm(){return '#administrador'};
  msgValidacaoCadastro(){return "//a[contains(text(),'Cadastro realizado com sucesso')]"};
  //login
  inputEmail() {return '#email'};
  inputPass() {return '#password'};
  btnEnter() {return 'button[type="submit"]'};
  //homepage
  msgEsteESeuSistema(){return "//p[contains(text(),'Este é seu sistema para administrar seu ecommerce.')]"};
  //cardOne
  cardCadastrarUser(){return "//h5[contains(text(),'Cadastrar Usuários')]"};
  btnCadastrarUser(){return '[data-testid="cadastrarUsuarios"]'};
  //cardTwo
  cardListarUser(){return "//h5[contains(text(),'Listar Usuários')]"};
  btnListarUser(){return '[data-testid="listarUsuarios"]'};
   //cardThree
  cardCadastrarProdutos(){return "//h5[contains(text(),'Cadastrar Produtos')]"};
  btncadastrarProdutos(){return '[data-testid="cadastrarProdutos"]'};
   //cardFour
  cardListarProdutos(){return "//h5[contains(text(),'Listar Produtos')]"};
  btnListarProdutos(){return '[data-testid="listarProdutos"]'};
   //cardFive
  cardRelatorios(){return "//h5[contains(text(),'Relatórios')]"};
  btnVerRelatorios(){return '[data-testid="relatorios"]'};

  //userlisting
  titleListaDosUsuarios(){return "//h1[contains(text(),'Lista dos usuários')]"}
  


}

export default ServerElements;
