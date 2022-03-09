/// <reference types="cypress" />

describe('My First Test', () => {
    it('Öppna ICA hemsida', () => {
        cy.visit('https://www.ica.se/')
        cy.contains('Godkänn cookies').click()
        //cy.get('#onetrust-accept-btn-handler').click()       
    })
  })
