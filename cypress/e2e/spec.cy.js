describe('login test', () => {
  beforeEach(() => {
  
  cy.visit('http://localhost:5173/')
})
 
  it('başarılı form submit edilebiliyor', () => {
    cy.get("[data-cy=email]").type("erdem.guntay@wit.com.tr")
    cy.get("[data-cy=password]").type("9fxIH0GXesEwH_I")
    cy.get("[data-cy=terms]").check()
    cy.get("[data-cy=signin]").click()
    cy.url().should("include", "/main")    
  })
})