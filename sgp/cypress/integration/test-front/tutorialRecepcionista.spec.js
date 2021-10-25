describe('Tutorial Doctor', () => {
    it('register', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('http://localhost:5000/register')
        cy.get('[placeholder="Nombre completo"]').type('sergio')
        cy.get('[placeholder="Email"]').type('s@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[placeholder="Repertir Contraseña"]').type('12345')
        cy.get('[placeholder="receptionist"]').click();
        cy.get('[id=btnLogIn]').click();
    })

    it('login', () => {
        cy.get('[name="email"]').type('s@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    })

    it('open tutorial', () => {
        cy.contains('Como recepcionista vas a poder:');
        cy.contains('Omitir');
        cy.contains('Siguiente').click();
        cy.contains('Agregar paciente');
        cy.contains('Omitir');
        cy.contains('Siguiente').click();
        cy.contains('Dar de baja un paciente');
        cy.contains('Omitir');
        cy.contains('Siguiente').click();
        cy.contains('Ver estadisticas');
        cy.contains('Terminar').click();
    })
})