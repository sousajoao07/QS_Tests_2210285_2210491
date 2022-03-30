/// <reference types="Cypress" />

describe('Testes', () => {
    it('Login', () => {
        cy.visit('http://frutos.test/admin')
        cy.get('.login-form .div')
            .first()
            .type('admin@email.pt')
            .next()
            .type('123456\r')            
    })

    it('Add Category', () => {
        cy.get('.navbar-nav .nav-item')
            .first()
            .next()
            .next()
            .next()
            .click()       
        
        cy.get('.list-group-item')
            .last()
            .click()
    })
})