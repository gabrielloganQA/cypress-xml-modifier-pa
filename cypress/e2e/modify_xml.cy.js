describe('Modificar arquivo XML', () => {
  it('Altera os valores dos elementos <infNFe>, <nNF> e <dhEmi>, <chNFe>', () => {
    const filePath = 'cypress/fixtures/PO-BR13-000004334.xml';
    const modifiedFilePath = 'cypress/fixtures/PO-BR13-000004334_modified.xml';

    cy.readFile(filePath, 'utf-8').then((xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

      // Modificar <infNFe>
      const infNFe = xmlDoc.getElementsByTagName('infNFe')[0];
      infNFe.setAttribute('Id', 'NFe35150300822602000124550010009923461099234800');  // Substitua pelo valor desejado

      // Modificar <nNF>
      const nNF = xmlDoc.getElementsByTagName('nNF')[0];
      nNF.textContent = '18077';  // Substitua pelo valor desejado

      // Modificar <dhEmi>
      const dhEmi = xmlDoc.getElementsByTagName('dhEmi')[0];
      dhEmi.textContent = '2024-08-08T09:40:00-03:00';  // Substitua pelo valor desejado

      //Modificar <chNFe>
      const chNFe = xmlDoc.getElementsByTagName('chNFe')[0]
      chNFe.textContent = '10050300822600000714550010009333333923461099200897' // Substitua pelo valor desejado


      // Converter o XML de volta para string
      const serializer = new XMLSerializer();
      const newXmlString = serializer.serializeToString(xmlDoc);

      cy.writeFile(modifiedFilePath, newXmlString);
    });
  });
});