/*global cy*/
describe('Add Patient', () => {
    beforeEach(() => {
        cy.visit('https://sistema-gestion-paciente.herokuapp.com');
        cy.get('[placeholder="Email"]').type('aldana@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.contains('Iniciar sesion').click();
        cy.contains('Bienvenidos al Sistema de Gestión de Pacientes');
        cy.contains('Agregar un paciente').click();
    })

    it('exist ControlTextAreaNN', ()=> {
        for (let index = 1; index < 10; index++) {
            cy.get(`[id= ControlTextAreaNN${index}]`);
        };
    })
    
    it('has checkbox Sympthoms and textArea for extra data', () => {
        cy.contains('Fiebre');
        cy.contains('Tos');
        cy.contains('Perdida de Gusto/olfato');
        cy.contains('Dolor de Cabeza');
        cy.contains('Dolor de Garganta');
        cy.contains('Dificultad para respirar o disnea');
        cy.contains('Aclaraciones Extras');
        cy.get('[id= formControlSE]');
    })

    it('has ingresar paciente button', () => {
        cy.contains('Ingresar Paciente');
    })

    it('give a turn to normal person', () => {
        cy.get('[id= ControlTextAreaNN1]').type("Carlos");
        cy.get('[id= ControlTextAreaNN2]').type("Saldaña");
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
        cy.contains(`Paciente Carlos Saldaña ingresado con Exito!`);
    })
    
    it('Delete new patient of Test', () => {
        cy.request('GET', 'https://sistema-gestion-paciente.herokuapp.com/api/pacientes-esperando-atendiendose').then((response) => {
            let patient = response.body.data.find(p=> p.name == 'Carlos')
            cy.request('DELETE', 'https://sistema-gestion-paciente.herokuapp.com/api/borrarPaciente/' + patient._id)
                 .then((response) =>{
                     expect(response.body).to.have.property('response', 'Paciente eliminado correctamente!')
                 })
         })
    })
})