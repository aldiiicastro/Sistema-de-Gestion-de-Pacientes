 /*global cy*/
  /*global Cypress*/
describe('Delete Patient', ()=>{
    it('add new patient', () => {
        cy.visit('http://localhost:5000');
        cy.get('[placeholder="Email"]').type('aldana@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.contains('Iniciar sesion').click();
        cy.contains('Agregar un paciente').click();
        cy.get('[id= ControlTextAreaNN1]').type("Test");
        cy.get('[id= ControlTextAreaNN2]').type("Front");
        cy.get('[id= ControlTextAreaNN3]').type("38694960");
        cy.get('[id= ControlTextAreaNN4]').type("Buenos Aires");
        cy.get('[id= ControlTextAreaNN5]').type("Florencio Varela");
        cy.get('[id= ControlTextAreaNN6]').type("fake street");
        cy.get('[id= ControlTextAreaNN7]').type("575");
        cy.get('[id= ControlTextAreaNN8]').type("1");
        cy.get('[id= ControlTextAreaNN9]').type("1888");
        cy.get('input[name= Fiebre]').check();
        cy.get('input[name= Tos]').check();
        cy.get('[id= ingresarButton]').click();
        cy.contains(`Paciente Test Front ingresado con Exito!`);
        
    });
    
    it('delete a patient', () => {
        cy.get('[id=deletePatientNav]').click();
        cy.contains('Test Front');
        cy.get('[id=deleteOnePatient0]').click();
    });
});