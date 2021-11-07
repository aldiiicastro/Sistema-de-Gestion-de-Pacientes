describe('', () => {

    it('go to register', () => {
        cy.visit('http://localhost:5000/register')
        cy.get('[placeholder="Nombre completo"]')
        cy.get('[placeholder="Email"]')
        cy.get('[placeholder="Contraseña"]')
        cy.get('[placeholder="Repertir Contraseña"]')
        cy.contains('Enviar')
        cy.contains('Volver')
        cy.contains('Médico')
        cy.contains('Recepcionista')
    })

    it('go to login and come back to register', () => {
        cy.contains('Volver').click();
        cy.contains('Registrarse').click();
    })
})