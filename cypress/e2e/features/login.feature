Feature: Login

Scenario: Login com sucesso
Given que acesso a homePage
When eu inserir login e senha '<login>' '<senha>'
Then tenho meu acesso realizado
Examples:
|login|senha|
|teste|1234|

