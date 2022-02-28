/// <reference types="cypress" />
describe('Testing samething on Google', () => {
    // komment
    it ('I can serch samething', () => {
        cy.visit('https://google.com');
        // cy.get('input [input id="zipcode"]').type('23235').type('{enter}')
    });
});
