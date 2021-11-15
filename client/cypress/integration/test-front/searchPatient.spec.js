/*global cy*/
describe('search Patient', () =>
{
    it('add new patient',() =>{
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
      

    })
    it('login to search', () => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('emaDoctor@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('44444');
        cy.get('[id=btnLogIn]').click();
        cy.wait(1000);
        cy.get('[id=search]').type('Front');
        cy.get('[id=click]').click();
        cy.wait(2000);
        cy.contains('Front');
        cy.contains("38694960");
    })

    it('search patient by dni',()=>
    {
        cy.get('[id=search]').clear();
        cy.get('[id=search]').type("38694960");
        cy.get('[id=click]').click();
        
        cy.wait(1000);
        cy.contains("38694960");
        cy.contains('Test');
    })

    it('search nothing', ()=>
    {
        cy.get('[id=search]').type("nothing");
        cy.get('[id=click]').click();
        cy.wait(1000);
        cy.contains("No se encontro el paciente buscado");
    })
    it('Delete new patient of Test', () => {
        cy.request('GET', 'localhost:3000/api/pacientes-esperando-atendiendose').then((response) => {
            let patient = response.body.data.find(p=> p.name == 'Test')
            cy.request('DELETE', 'localhost:3000/api/borrarPaciente/' + patient._id)
                 .then((response) =>{
                     expect(response.body).to.have.property('response', 'Paciente eliminado correctamente!')
                 })
         })
    })
})