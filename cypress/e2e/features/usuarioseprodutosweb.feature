Feature: Serverest - Gestao de Usuarios e Produtos

  Scenario Outline: Login e validacao na lista de usuarios
    Given que acesso a homePage
    And realizo o cadastro inicial de adm '<name>' '<email>' '<password>'
    When devo ser redirecionado para o dashboard
    And acessar a página de listagem de usuarios
    Then devo validar que o usuario esta presente na lista

    Examples:
      | name  | email              | password |
      | teste | teste123@gmail.com | 123456   |

  Scenario Outline: Cadastro e consulta de produtos
    Given que acesso a homePage
    When eu faço login com email e senha '<email>' '<password>'
    And acesso a página de cadastro de produtos
    And cadastro um produto com nome preco e descricao
    Then devo validar que o produto está presente na lista

    Examples:
    |email               | password |
    | teste123@gmail.com | 123456   |

  Scenario Outline: Edicao e exclusao do usuario e produto
    Given que acesso a homePage
    When eu faço login com email e senha '<email>' '<password>'
    Then devo realizar o processo de edicao e exclusao de usuario
    And acesso a lista de produto
    Then devo realizar o processo de edicao e exclusao de produto

    Examples:
      | name  | email            | password |
      | teste |teste123@gmail.com| 123456   |
