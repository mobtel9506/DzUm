/// <reference types="cypress" />

describe('my_first_test_spec', () => {
    it('search-icon', () => {
     
      cy.visit('https://www.ica.se/')
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('.search-icon').click()
      cy.get('#ica-search-input').type("rabatt", {force: true}).wait(10000).click()  
            
    })
    
})
  
  
  