/// <reference types="cypress" />
import { verifyCheckboxCheckedByLabel, verifyCheckboxNotCheckedByLabel } from "../support/helperfunct.js";


///describe('Check Hammer and Screwdriver checkboxes', () => {
describe('Checkbox helper function test', () => {
    it('checks hammer and mightycraft hardeware boxes, asserts Screwdriver is not checked', () => {
      cy.visit('/');
      // Verify that one of the images shown by default - screwdriver - exist when first visitng the site prior to performing the check box action
      cy.get('img[alt="Screwdriver"]').should('not.exist'); 
      // Check boxes besides ONLY hammer and MightyCraft Hardware to search for only hammer tools
      // The function selects the Hammer and MightyCraft Hardware boxes, and Asserts that Claw Hammer is the only tool showing, and screwdriver no longer is shown on screen
      verifyCheckboxCheckedByLabel('Hammer');
      verifyCheckboxCheckedByLabel('MightyCraft Hardware');
      verifyCheckboxNotCheckedByLabel('Screwdriver');
  
      // Re-verifies that Hammer and MightyCraft boxes are checked, and that Screwdriver box is not checked
      cy.get('@checkbox-Hammer').should('be.checked');
      cy.get('@checkbox-MightyCraft Hardware').should('be.checked');
      cy.get('@checkbox-Screwdriver').should('not.be.checked');

      // Assert Claw Hammer image is shown and that Screwdriver is not shown
      cy.get('img[alt="Claw Hammer"]').should('be.visible');
      cy.get('img[alt="Screwdriver"]').should('not.exist');
      cy.log('The expected claw hammer image is displayed - the default screwdriver image is no longer displayed');

     });

  });