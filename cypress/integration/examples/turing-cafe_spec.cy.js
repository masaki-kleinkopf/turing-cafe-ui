describe("main view",() => {
    beforeEach(()=> {
        cy.visit("http://localhost:3000/")
    })
    it("should have a title", () => {
        cy.contains("h1","Turing Cafe Reservations")
    })

    it("should have reservations grid",() => {
        cy.get(".resy-container")
        .contains("Christie")
        cy.get(".resy-container")
        .contains("Travis")
    })

    it("should have correct reservation", () => {
        cy.get(".resy").first().contains("Christie")
        cy.get(".resy").first().contains("12/29")
        cy.get(".resy").first().contains("7:00")
        cy.get(".resy").first().contains("12")
       
    })

    it("should have another correct reservation", () => {
        cy.get(".resy").last().contains("Brittany")
        cy.get(".resy").last().contains("9/9")
        cy.get(".resy").last().contains("7:30")
        cy.get(".resy").last().contains("3")
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