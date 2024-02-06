/// <reference types="cypress" />

describe('template spec', () => {
  it('Login as a Standard User', () => {
    cy.visit('https://www.google.co.za')

    let searchEntry = 'Apples'
    cy.get('[title="Search"]').type(searchEntry)
    cy.get('[role="presentation"] ul li[data-entityname="Applesauce"]').first().click()
  })
})