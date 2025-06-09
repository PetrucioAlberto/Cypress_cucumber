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
  btnEnter() {return '[data-testid="entrar"]'};
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
  titleListaDosUsuarios(){return "//h1[contains(text(),'Lista dos usuários')]"};

  //register products
  titleCadastroDeProdutos(){return "//h1[contains(text(),'Cadastro de Produtos')]"}
  nomeDoProduto(){return '#nome'};
  preco(){return '#price'};
  descricao(){return '#description'};
  quantidade(){return '#quantity'};
  imagem(){return '#imagem'};
  btnCadastrarProdutoDescrito(){return '[data-testid="cadastarProdutos"]'}
  //products list
  titleListaDeProdutos(){return "//h1[contains(text(),'Lista dos Produtos')]"}
  btnEditarProduto(){return "//tbody/tr[1]/td[6]/div[1]/button[1]"}

  //users list
  btnEditar(){return "//tbody/tr[1]/td[5]/div[1]/button[1]"}
  btnExcluir(){return 'tbody tr:first-child button.btn-danger'}
  //header
  headHome(){return '[data-testid="home"]'}
  
}

export default ServerElements;
