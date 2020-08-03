describe("user can check the BMI", () => {
  it("user can enter weight and height", () => {
    cy.visit("http://localhost:3001")
    cy.contains("BMI Calculator")
    cy.get("#weight").type('65')
    cy.get("#height").type('165')
  })
})