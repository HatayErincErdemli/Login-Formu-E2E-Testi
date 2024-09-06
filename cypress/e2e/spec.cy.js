describe('login test', () => {
  beforeEach(() => {
  
  cy.visit('http://localhost:5173/')
})
 
  describe("başarılı form submit edilebiliyor",()=>{
    it('bilgiler doğru girilince ana sayfa açılabiliyor', () => {
    cy.get("[data-cy=email]").type("erdem.guntay@wit.com.tr")
    cy.get("[data-cy=password]").type("9fxIH0GXesEwH_I")
    cy.get("[data-cy=terms]").check()
    cy.get("[data-cy=signin]").click()
    cy.url().should("include", "/main")    
  })})
  describe("Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor", ()=>{
    it("email yanlış girilince verilen errorlar", ()=>{
      cy.get("[data-cy=email]").type("asdfasg.com")
      cy.get("[data-cy=emailerror]").should("be.visible")
      cy.get("[data-cy=emailerror]").should("have.text","Please enter a valid email address")
      cy.get("[data-cy=signin]").should("be.disabled")
    })
    it("email ve password yanlış girilince verilen errorlar", ()=>{
      cy.get("[data-cy=email]").type("asdfasg.com")
      cy.get("[data-cy=emailerror]").should("be.visible")
      cy.get("[data-cy=emailerror]").should("have.text","Please enter a valid email address")
      cy.get("[data-cy=password]").type("123")
      cy.get("[data-cy=passworderror]").should("be.visible")
      cy.get("[data-cy=passworderror]").should("have.text","Password must be at least 4 characters long")
      cy.get("[data-cy=signin]").should("be.disabled")
    })
    it("email ve password doğru ama kurallar kabul edilmemiş", ()=>{
      cy.get("[data-cy=email]").type("erdem.guntay@wit.com.tr")
      cy.get("[data-cy=password]").type("9fxIH0GXesEwH_I")
      cy.get("[data-cy=terms]").uncheck()
      cy.get("[data-cy=signin]").should("be.disabled")
    })
  })
})