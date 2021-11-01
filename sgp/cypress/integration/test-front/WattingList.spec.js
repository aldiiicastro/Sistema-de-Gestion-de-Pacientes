/*global cy*/
describe('WattingPatient', () =>
{
    

    it('add a patient', () => {
        
        cy.visit('http://localhost:5000/add-patient');
        cy.get('[id= ControlTextAreaNN1]').type("Emanuel");
        cy.get('[id= ControlTextAreaNN2]').type("Righi");
        cy.get('[id= ControlTextAreaNN3]').type("11111111");
        cy.get('[id= ingresarButton]').click();
    })

    it('check waitting list',()=>
    {
        cy.visit('http://localhost:5000/watting-list');
        cy.contains("Emanuel");
        cy.contains("Righi");
        cy.contains("11111111");
    })

   


   



})