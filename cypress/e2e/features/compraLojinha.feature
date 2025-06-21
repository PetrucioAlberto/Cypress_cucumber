Feature: Compra de produto com sucesso
  Como um usuário da lojinha
  Quero acessar o site e comprar produtos com sucesso

  Scenario Outline: Realizar uma compra com sucesso
    Given que estou na página inicial
    When faço login com o email "<email>" e a senha "<senha>"
    And escolho um produto
    And adiciono o produto ao carrinho
    And insiro os dados do cartao
    And realizo a compra
    Then recebo a confirmação da compra

  Examples:
    | email                     | senha        |
    | petrucio2000@hotmail.com  | petrucio2000 |

