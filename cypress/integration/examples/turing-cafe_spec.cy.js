describe("main view",() => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/")
    })
    it("should have a title", () => {
        cy.contains("h1","Turing Cafe Reservations")
    })
    it("should be able to submit a form", () => {
        cy.get('input[name="name"]')
        .type("Masaki")
        cy.get('input[name="date"]')
        .type("12/01")
        cy.get('input[name="time"]')
        .type("4:00")
        cy.get('input[name="number"]')
        .type("14")
        cy.get('button[name="submit"]')
        .click()
        cy.contains("Masaki")
        cy.contains("12/01")
    })
})