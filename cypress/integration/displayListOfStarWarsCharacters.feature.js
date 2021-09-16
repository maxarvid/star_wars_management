describe("Display a list of characters", () => {
  beforeEach(() => {
    cy.intercept("https://swapi.dev/api/**", {
      fixture: "swapi_response.json",
    });
  });

  it("is expected to display a header", () => {
    cy.visit("/");
    cy.get("#header").should("contain", "Character List");
  });

  it("is expected to display a list of six charachters", () => {
    cy.get("#character-list").should("have.length", 6);
  });
});
