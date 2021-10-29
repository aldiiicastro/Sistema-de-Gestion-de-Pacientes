 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('HomeRecepcionist', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('aldana@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('6168c80e4dec28bfe4ff6df0')
        })
        cy.wait(1000)
    })
    /*Se puede ir dentro de agregar paciente*/
    it('go to addPatient', () => {
        cy.get('[id=addPatient]').click()
        cy.contains('Ingrese los datos:')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to addPatient in nav', () => {
        cy.get('[id=addPatientNav]').click()
        cy.contains('Ingrese los datos:')
    })
    /*Se puede ir dentro de eliminar paciente --PROVISORIO, aun no existe la pagina*/
    it('go to deletePatient', () => {
        cy.get('[id=deletePatient]').click()
        cy.contains('No hay pacientes')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to deletePatient in nav', () => {
        cy.get('[id=deletePatientNav]').click()
        cy.contains('No hay pacientes')
    })
    /*Se puede ir dentro de ver las estadisticas --PROVISORIO, aun no existe la pagina*/
    it('go to statistics', () => {
        cy.get('[id=statistics]').click()
    })
    /*Lo mismo pero para la nav bar*/
    it('go to statistics in nav', () => {
        cy.get('[id=statisticsNav]').should('have.class', 'disabled')
    })
}) 