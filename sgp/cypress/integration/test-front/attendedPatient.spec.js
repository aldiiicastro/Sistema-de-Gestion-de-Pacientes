describe('Attended Patient', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })

    it('Puedo acceder a la pagina pacientes atendidos', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
        cy.get('[id=attendedNav]').click();
    })

    it('Puedo ver datos del ingreso del paciente',() => {
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
        cy.get('[id=attendedNav]').click();
        cy.get('[name= dniT]').first().click();
        for (let index = 1; index < 10; index++) {
            cy.get(`[id= ControlTextAreaNN${index}]`).should('be.disabled');
        }
    })
})