Feature: Serverest - Gestao de Usuarios e Produtos

  Scenario Outline: Cadastrar usuarios
    Given que acesso a api '<url>' 
    When realizo uma request POST para "<endpoint>"
    Then eu valido a resposta do cadastro realizado
    Examples:
      | url                   | endpoint |
      | https://serverest.dev/| /usuarios|