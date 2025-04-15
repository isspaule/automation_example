export function verifyCheckboxCheckedByLabel(labelText) {
    cy.contains('label', labelText).find('input[type="checkbox"]').as(`checkbox-${labelText}`).check({ force: true }).should('be.checked');
  }
  
export function verifyCheckboxNotCheckedByLabel(labelText) {
    cy.contains('label', labelText).find('input[type="checkbox"]').as(`checkbox-${labelText}`).should('not.be.checked');
  }
