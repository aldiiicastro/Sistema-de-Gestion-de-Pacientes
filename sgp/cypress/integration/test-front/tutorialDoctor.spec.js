describe('Tutorial Doctor', () => {
    it('register', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('http://localhost:5000/register')
        cy.get('[placeholder="Nombre completo"]').type('lio')
        cy.get('[placeholder="Email"]').type('l@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[placeholder="Repertir Contraseña"]').type('12345')
        cy.get('[placeholder="Doctor"]').click();
        cy.get('[id=btnLogIn]').click();
    })

    it('login', () => {
        cy.get('[name="email"]').type('l@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    })

    it('open tutorial', () => {
        cy.contains('Como Doctor vas a poder:');
        cy.contains('Omitir');
        cy.wait(1000)
        cy.contains('Siguiente').click();
        cy.contains('Ver lista de Pacientes');
        cy.contains('Omitir');
        cy.wait(1000)
        cy.contains('Siguiente').click();
        cy.contains('Comenzar Turno');
        cy.contains('Omitir');
        cy.wait(1000)
        cy.contains('Siguiente').click();
        cy.contains('Finalizar Turno');
        cy.wait(1000)
        cy.contains('Terminar').click();
    })

    it('delete b person too next test', () => {
        cy.request('DELETE', 'localhost:3000/api/delete/byEmail/l@gmail.com').then((response) =>{expect(response.body).to.have.property('response', 'Usuario eliminado correctamente!')})
    })
})