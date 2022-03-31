/// <reference types="Cypress" />

describe('FRUTOS OESTE TESTING', () => {
    const filepath = 'images/biologicos.jpg'
    beforeEach(() => {
        cy.visit('http://frutos.test/admin')
        cy.get('.login-form .div')
            .first()
            .type('admin@email.pt')
            .next()
            .type('123456\r')
            
        cy.get('.navbar-nav .nav-item')
            .eq(3)
            .click()       
        
        cy.get('.list-group-item')
            .last()
            .click()

    })

    it('Add Category', () => {
        cy.get('.card-header .btn')
            .click()

        cy.get('.form-control')
            .eq(0)
            .type('Bio')

        cy.get('.form-control')
            .get('input[type="file"]').attachFile(filepath)
            .get('.form-group .btn')
            .first()
            .click()

        cy.get('tbody')
            .should('have.length', 7)
    })
})