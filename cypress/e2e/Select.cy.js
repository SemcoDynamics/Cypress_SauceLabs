/// <reference types="cypress" />

describe('Select Single and Multi-Selects', () => {
    it('Select a Single value from the drop down', () => {
      cy.visit('https://kitchen.applitools.com/ingredients/select');
    
      const searchEntry = ['chili-powder', 'garlic', 'ginger', 'paprika'];
      const indexToSelect = 3
      cy.get('#spices-select-single').select(searchEntry[indexToSelect]);
      
      // Verify that the selected value is 'paprika'
      cy.get('#spices-select-single').should('have.value', searchEntry[indexToSelect]);
      
      // Optionally, you can also check if the selected value is one of the values in the searchEntry array
      cy.get('#spices-select-single').invoke('val').should('include', searchEntry[indexToSelect]);
    });

    it.only('Loop through each value', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/select');

        const searchEntry = ['chili-powder', 'garlic', 'ginger', 'paprika'];
        // Loop through each value in the searchEntry array
        searchEntry.forEach((value) => {
            // Select the current value from the drop-down
            cy.get('#spices-select-single').select(value);

            // Verify that the selected value matches the expected value
            cy.get('#spices-select-single').should('have.value', value);

            // Optionally, you can also check if the selected value is one of the values in the searchEntry array
            cy.get('#spices-select-single').invoke('val').should('include', value);
        })
  })
});