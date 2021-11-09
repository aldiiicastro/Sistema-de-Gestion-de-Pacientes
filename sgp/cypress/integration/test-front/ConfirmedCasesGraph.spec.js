 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('ConfirmedCasesGraph', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('aldana@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('6168c80e4dec28bfe4ff6df0')
        })
        cy.wait(1000)
    })
    /*Se puede ir dentro de ver las estadisticas*/
    it('go to statistics', () => {
        cy.get('[id=stadistics]').click()
        cy.contains('Graficos pacientes')
        cy.get('[id=confirmedGraph]').click()
        cy.contains('Cantidad de pacientes contagiados')
    })

}) 