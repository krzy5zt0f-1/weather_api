describe('Weather app', function (){
  it("Loads up with a defualt city of London", function(){
    cy.visit('http://localhost:3000/');
    cy.get('#display').should('contain', 'Current temperature in London')
  });

  it("Upon inputing correct city, it displays temperature in a given location", function(){
    cy.visit('http://localhost:3000/');
    cy.get('#form')
    .find('[type="text"]').type('Leicester');
    cy.get('#form').submit()
    .next().should('contain', 'Current temperature in Leicester');
  });

  it("Upon inputing incorrect city, it displays error message", function(){
    cy.visit('http://localhost:3000/');
    cy.get('#form')
    .find('[type="text"]').type('Non-Existent-City');
    cy.get('#form').submit()
    .next().should('contain', 'Error: could not find Non-Existent-City');
  });

  it("Saves previously selected city", function(){
    cy.visit('http://localhost:3000/');
    cy.get('#form')
    .find('[type="text"]').type('Warsaw');
    cy.get('#form').submit();
    cy.visit('http://localhost:3000/');
    cy.get('#display').should('contain', 'Current temperature in Warsaw')
  });

  it("After inputing incorrect city, you can input correct city and get the locations temperature", function(){
    cy.visit('http://localhost:3000/');
    cy.get('#form')
    .find('[type="text"]').type('Non-Existent-City');
    cy.get('#form').submit();
    cy.get('#form')
    .find('[type="text"]').clear().type('Peterborough');
    cy.get('#form').submit()
    .next().should('contain', 'Current temperature in Peterborough');


  });



})
