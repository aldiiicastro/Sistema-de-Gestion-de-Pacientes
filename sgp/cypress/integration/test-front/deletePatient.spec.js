 /*global cy*/
  /*global Cypress*/
describe('Delete Patient', ()=>{
    
    it('click en baja paciente', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('http://localhost:5000/Home');
        cy.contains('Dar de baja un paciente').click();
    });

    it('dar de baja paciente', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('http://localhost:5000/patient-list');
        cy.contains('Leandro Perez');
        cy.contains('Dar de baja').click();
    });
});