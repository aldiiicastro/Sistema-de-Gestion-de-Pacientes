/*global cy*/
describe('Add Patient', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000');
        cy.get('[placeholder="Email"]').type('a@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('aaaaa');
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

    it('has checkbox nn and textArea for extra data', () => {
        cy.contains('Es NN');
        cy.get('[id= ControlTextAreaNN]');
    })

    it('has ingresar paciente button', () => {
        cy.contains('Ingresar Paciente');
    })

    it('inputs text block when esNn is checked and textArea is not disabled', () => {
        cy.get('[id= checkNN]').click()
        for (let index = 1; index < 10; index++) {
            cy.get(`[id= ControlTextAreaNN${index}]`).should('be.disabled');
        };
        cy.get('[id= ControlTextAreaNN]').type('soy data para una persona NN');
        cy.get('[id= ControlTextAreaNN]').focus().clear()
    })

    it('give turn to NN person', () => {
        cy.get('[id= checkNN]').click()
        cy.get('[id= ControlTextAreaNN]').type('persona femenina, pelo negro de 30 a 40 años desvanecida con fiebre.');
        cy.contains('Ingresar Paciente').click();
        cy.contains('Paciente NN ingresado con exito!')
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
        cy.scrollTo(0, 500)
        cy.get('[id= ingresarButton]').click();
        cy.contains(`Paciente Carlos Saldaña ingresado con Exito!`);
    })
})