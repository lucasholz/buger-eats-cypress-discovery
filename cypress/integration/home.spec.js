describe('home page', () => {
  it('app deve estar online', () => {
    cy.viewport(1440, 900) // define o tamanho da janela
    cy.visit('/') //define qual url deve acessar
    cy.get('#page-home main h1').should(
      'have.text',
      'Seja um parceiro entregador pela Buger Eats'
    )
  })
})
