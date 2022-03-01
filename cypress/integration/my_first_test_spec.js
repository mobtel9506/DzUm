// command: C:\Users\quinn\Desktop\DzUm> npx cypress open

/// <reference types="cypress" />
describe('My First Test', () => {
    it('Öppna ICA hemsida', () => {
        cy.visit('https://www.ica.se/')
        cy.contains('Godkänn cookies').click()
        //cy.get('#onetrust-accept-btn-handler').click()       
    })
  })

describe('My Second Test', () => {
  it('Öppna ICA hemsida', () => {
      cy.visit('https://www.ica.se/')
      cy.contains('Godkänn cookies').click()
      // cy.get('#onetrust-accept-btn-handler').click()       
  })

  it('Logga in på ICA hemsida', () => {
      cy.visit('https://www.ica.se/')
      cy.get('#onetrust-accept-btn-handler').click()   
      //cy.get('.btn').click()    
      cy.contains('Logga in').click()
    //  cy.get('input[]')
      cy.get('.fullscreen-iframe-modal__header-cancel > svg').click()
  })
})