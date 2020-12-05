describe('My first test', function (){
  it("Does not much", function(){
    expect(true).to.equal(true)
  })
})

describe("second test, visiting a page and interactign with it", function(){
  it("Visits the kitchen sink", function (){
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
    .type('1@email.com')
    .should('have.value', '1@email.com')
  })
})
