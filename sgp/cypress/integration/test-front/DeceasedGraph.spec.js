describe('DeceasedGraph', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })

    it('add test patient', () => {
        cy.get('[placeholder="Email"]').type('aldana@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.contains('Iniciar sesion').click();
        cy.contains('Agregar un paciente').click();
        cy.get('[id= ControlTextAreaNN1]').type("Deceased");
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
        cy.contains(`Paciente Deceased Front ingresado con Exito!`);
    })

    it('Add new person to Deceased', () => {
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
        cy.wait(1000)
        cy.request('GET', 'localhost:3000/api/pacientes-esperando-atendiendose').then((response) => {
            cy.get(`[id=Attending${response.body.data.length - 1}]`).click()
            cy.get('[id=deceaseButton]').click();
            cy.contains(`Paciente Deceased Front declarado como fallecido!`)
        })
        cy.wait(500)
    })

    it("See patient in deceased Graph", ()=> {
        cy.get('[placeholder="Email"]').type('recepcionista@gmail.com');
        cy.get('[placeholder="Contraseña"]').type('12345');
        cy.contains('Iniciar sesion').click();
        cy.get('[id=statistics]').click();
        cy.contains('Graficos pacientes');
        cy.get('[id=dieGraph]').click();
        cy.contains('Graficos de Pacientes fallecidos')
    })

    it('Delete new patient of Test', () => {
        cy.request('GET', 'localhost:3000/api/todosLosPacientes').then((response) => {
            console.log(response)
            let patients = response.body.data.filter(p => p.name == 'Deceased')

            patients.forEach(e => {
                cy.request('DELETE', 'localhost:3000/api/borrarPaciente/' + e._id)
                    .then((response) => {
                        expect(response.body).to.have.property('response', 'Paciente eliminado correctamente!')
                    })
            })
        })
    })
})