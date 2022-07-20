describe("main view",() => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/")
    })
    it("should have a title", () => {
        cy.contains("h1","Turing Cafe Reservations")
    })

    it("should have correct reservations", () => {
        cy.contains(".resy-container", "Christie")
        cy.contains(".resy-container", "Leta")
        cy.contains(".resy-container", "Pam")
    })

    it("should have a background img", () => {
        cy.get(".App").should("have.css","background-image")
    })
    it("should be able to fill a form", () => {
        cy.get('input[name="name"]')
        .type("Masaki")
        .should("have.value","Masaki")
        cy.get('input[name="date"]')
        .type("12/01")
        .should("have.value","12/01")
        cy.get('input[name="time"]')
        .type("4:00")
        .should("have.value","4:00")
        cy.get('input[name="number"]')
        .type("14")
        .should("have.value","14")
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