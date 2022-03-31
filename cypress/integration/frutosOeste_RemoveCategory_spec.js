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

    it('Remove Category', () => {
        cy.get('table>tbody')
        .should('have.length', 7)
        .eq(1)
        .should('contain','Bio')
        .find('>td').eq(2)
        .then(elem => {
            elem[0].children[0].firstChild.click()
        })
        cy.get('tbody')
        .should('have.length', 6)
    })
})