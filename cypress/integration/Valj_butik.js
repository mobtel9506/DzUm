/// <reference types="cypress" />

describe('my_first_test_spec', () => {
    it('Valj butik', () => {
     
      cy.visit('https://www.ica.se/')
      cy.contains('Godkänn cookies').click()
      cy.get('.wrap-container > .button').click()
      cy.get('.tabs > .button--secondary').click()
      cy.get('#store-search').type("Lund", {force: true})
      cy.get('.find-store__results > .in-view-observer > .row > .button--40 > .svg-icon').click()
      
    })
    
})
  
  