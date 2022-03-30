/// <reference types="Cypress" />

describe('FRUTOS OESTE TESTING', () => {
    const filepath = 'images/biologicos.jpg'
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
        
        cy.get('.card-header .btn')
            .click()

        cy.get('.form-control')
            
            .type('Bio')
            .get('input[type="file"]').attachFile(filepath)
            .get('.form-group .btn')
            .first()
            .click()

        cy.get('tbody')
            .should('have.length', 7)
    })

    it('Remove Category', () => {
        cy.get('table')
        .contains('tbody td','Bio')
        .next()
        .next()
        .then(elem => {
            console.log(elem)
            elem[0].children[0].firstChild.click()
        })
        cy.get('tbody')
        .should('have.length', 6)
        
    })
})