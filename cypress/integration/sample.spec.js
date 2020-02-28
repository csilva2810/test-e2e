describe('My First Test', function () {
  it('Does not do much!', function () {
    cy.visit('http://localhost:3000/')

    cy.get('[name=username]').type('Carlos');
    cy.get('[name=password]').type('carlos123');
    cy.get('button').click();

    cy.contains('Welcome Carlos');
  })
})
