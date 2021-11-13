 /*global cy*/
describe('waitingGraph', () => {

    it('login', () => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('emrighi.jba@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('44444')
        cy.get('[id=btnLogIn]').click();
        
    })
    
    it('screenshot of waitingGraph', () => {
        cy.get('[id=statistics]').click()
        cy.wait(500)
        cy.get('[id=waittingGraph]').click()
        cy.contains('Graficos de Pacientes en lista de espera');
        cy.screenshot();
        
    })

}) 