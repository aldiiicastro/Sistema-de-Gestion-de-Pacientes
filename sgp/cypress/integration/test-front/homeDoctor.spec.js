 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('HomeDoctor', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
        cy.wait(1000)
    })
    /*Se puede ir dentro de agregar paciente*/
    it('go to start turn', () => {
        cy.get('[id=startTurn]').should('be.disabled')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to start turn in nav', () => {
        cy.get('[id=startTurnNav]').should('have.class', 'disabled')
    })
    /*Se puede ir dentro de eliminar paciente --PROVISORIO, aun no existe la pagina*/
    it('go to finish turn', () => {
        cy.get('[id=finishTurn]').should('be.disabled')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to finish turn in nav', () => {
        cy.get('[id=finishTurnNav]').should('have.class', 'disabled')
    })
    /*Se puede ir dentro de ver lista de espera --PROVISORIO, aun no existe la pagina*/
    it('go to wattingList', () => {
        cy.get('[id=wattingList]').click()
        cy.contains('Pacientes en Lista de Espera')
    })
    /*Lo mismo pero para la nav bar*/
    it('go to wattingList in nav', () => {
        cy.get('[id=wattingListNav]').click()
        cy.contains('Pacientes en Lista de Espera')
    })
}) 