# Modificador de XML com Cypress

Este projeto implementa um teste Cypress para modificar um arquivo XML, especificamente alterando os valores dos elementos `<infNFe>`, `<nNF>`, `<dhEmi>`, e `<chNFe>`.

## Como Funciona

O teste Cypress carrega um arquivo XML especificado, utiliza o DOMParser para analisar o XML e seleciona os elementos desejados para modificação. Em seguida, os valores desses elementos são alterados conforme necessário. Finalmente, o XML modificado é convertido de volta para uma string e salvo em um novo arquivo.

## Pré-requisitos

Certifique-se de ter o [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing) instalado globalmente ou como uma dependência de desenvolvimento em seu projeto. Você também precisa ter um arquivo XML de exemplo que deseja modificar.

## Como Usar

1. Clone o repositório e navegue até o diretório do projeto.
2. Coloque o arquivo XML que deseja modificar na pasta `cypress/fixtures/`.
3. Execute o teste Cypress usando o comando `npx cypress open`.
4. Selecione o arquivo de teste `modify_xml.cy.js`.
5. Aguarde até que o teste seja executado. O arquivo XML modificado será salvo em `cypress/fixtures/` com o sufixo `modified`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação pull com melhorias ou correções.

## Recursos Adicionais

- Documentação do [Cypress](https://docs.cypress.io/)
 para ajudar no aprendizado e desenvolvimento do projeto.

