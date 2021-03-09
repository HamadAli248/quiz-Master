/* eslint-disable no-undef */
export {};
it("Navigation", () => {
  it("can navigate around the website", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="home"]').click();
    cy.get('main:contains(" Welcome to Quiz Manager Application ")');

    cy.get('[data-cy="viewcorrectanswers"]').click();
    cy.get('main:contains(" Welcome to view correct answers page")');

    cy.get('[data-cy="admin"]').click();
    cy.get('main:contains("admin")');
  });
});
