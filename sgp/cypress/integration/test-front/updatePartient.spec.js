

describe('EditPatient', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })

    it('Paciente Page', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    })
})