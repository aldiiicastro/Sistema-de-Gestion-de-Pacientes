describe('Attend Patient', () => {
    it('login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('leanperez18@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click()
    })

    it('visit waitting list', () => {
        cy.get('[id=wattingListNav]').click()
    })

    it('press attend button', () => {
        cy.get('.icono:first').click();
    })
})