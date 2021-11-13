

describe('EditPatient', () => {

    beforeEach(() => {
        cy.visit('https://sistema-gestion-paciente.herokuapp.com')
    })

    it('Paciente Page', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    })
})