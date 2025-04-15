/// <reference types="cypress" />

///describe('Dispaly Drill using Search box', () => {
describe('Seach box helper function test', () => {
    it('Search for drills, verify only drill images shown and not others', () => {
      cy.visit('/');
      // Verify that one of the images shown by default - bolt cutters - exist when first visitng the site prior to performing the search
      cy.get('img[alt="Bolt Cutters"]').should('be.visible');
      // Enter drill in the search box and click submit to search for only drill tools
      cy.get('[data-test="search-query"]').clear();
      cy.get('[data-test="search-query"]').type('drill');
      cy.get('[data-test="search-submit"]').click();

      // Assert that only drill images are visible after the search
      cy.get('img[alt="Cordless Drill 20V"]').should('be.visible');
      cy.get('img[alt="Cordless Drill 24V"]').should('be.visible');
      cy.get('img[alt="Cordless Drill 18V"]').should('be.visible');
      cy.get('img[alt="Cordless Drill 12V"]').should('be.visible');
      //Verify that the image that is shown on the default screen - bolt cutters - no longer is displayed after searching for drills
      cy.get('img[alt="Bolt Cutters"]').should('not.exist');
      cy.log('The expected four drill images are displayed - the default bolt cutter image is no longer displayed');
    });

  });