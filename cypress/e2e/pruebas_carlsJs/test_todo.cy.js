//pruebas al sitio de carls junior

describe("Pruebas al sitio de carlsJr",()=>{
    beforeEach(()=>{
        cy.visit('https://carlsjr.com.mx/contacto')
        .wait(2000)
    })

    it('pruba click',()=>{
        cy.get(':nth-child(3) > .control > .input').type('¡?=¡?#)=$#=(?¡#Q$(Q#)=$')
        cy.get(':nth-child(4) > .control > .input').type('prueba@gmail.com')
        cy.get(':nth-child(5) > .control > .input').type('7771415042')
        cy.get('[data-target="contact-form.generalInfoContainer"] > .field > .control > .input')
        .type("Este es un mensaje de pruba en cypress xdddd xdx d xd xdd d ddxdd x x d")
        cy.get('.checkbox > input').check()
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
        cy.get('.control > .button').click()
    })

})