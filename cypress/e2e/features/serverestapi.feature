Feature: Serverest - Gestao de Usuarios e Produtos

  Scenario Outline: Cadastrar usuarios
    Given que acesso a api '<url>' 
    When realizo uma request POST para "<endpoint>"
    Then eu valido a resposta do cadastro realizado
    Examples:
      | url                   | endpoint |
      | https://serverest.dev/| /usuarios|

  Scenario Outline: Cadastrar Produtos
    Given que acesso a api '<url>' 
    When realizo uma request para cadastrar o produto "<endpoint>"
    Then eu valido a resposta do cadastro de produto realizado
    Examples:
      | url                   | endpoint |
      | https://serverest.dev/| /produtos|

  Scenario Outline: Listar produtos
  Given que acesso a api '<url>'
  When realizo uma request para listar os produtos '<endpoint>'
  Then valido a resposta da listagem de produtos

  Examples:
    | url                   | endpoint   |
    | https://serverest.dev/ | /produtos  |
