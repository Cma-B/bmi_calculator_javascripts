describe("user can check the BMI", () => {
  it("user can enter weight and height", () => {
    cy.visit("http://localhost:3001")
    cy.contains("BMI Calculator")
    cy.get("#weight").type('65')
    cy.get("#height").type('165')
    cy.get('button#calculate').contains('Calculate BMI').click()
  })
  
  it("display the BMI value ", () => {
    cy.get("#result").should('contain', 'Your BMI value is: 23.88')
  })

  it("display a message to evalute user BMI", () => {
    cy.get("#result").should("contain", "and you are Healthy")
  })
})