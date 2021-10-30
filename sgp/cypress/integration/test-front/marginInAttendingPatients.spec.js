describe('Navegation Doctor', ()=>{
    
    it('login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('http://localhost:5000/');
        cy.get('[placeholder="Email"]').type('doctor@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.get('[id=btnLogIn]').click();
    });

    it('tiene el margin', () => {
        //click en boton Ver pacientes atendidos
        cy.get('[id=attendedNav]').click();
        //should have marginCards class
        cy.get('.marginCards');
    });
});