/*global cy*/
describe('WattingPatient', () =>{
    it('add a patient', () => {
        cy.visit('http://localhost:5000/add-patient');
        cy.get('[id= ControlTextAreaNN1]').type("Emanuel");
        cy.get('[id= ControlTextAreaNN2]').type("Righi");
        cy.get('[id= ControlTextAreaNN3]').type("11111111");
        cy.get('[id= ingresarButton]').click();
    })

    it('check waitting list and attend',()=>{
        cy.visit('http://localhost:5000');
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
        cy.wait(1000)
        cy.contains("Emanuel");
        cy.contains("Righi");
        cy.contains("11111111");
        cy.wait(1000)
        cy.request('GET', 'localhost:3000/api/pacientes-esperando-atendiendose').then((response) => {
            cy.get(`[id=Attending${response.body.data.length - 1}]`).click()
            cy.wait(1000);
            cy.get('[id=backButton]').click();
        })
    })

    it('check waitting list',()=>{
        cy.visit('http://localhost:5000/watting-list');
        cy.contains("Emanuel");
        cy.contains("Righi");
        cy.contains("11111111");
    })

    it('Delete new patient of Test', () => {
        cy.request('GET', 'localhost:3000/api/pacientes-esperando-atendiendose').then((response) => {
            let patient = response.body.data.find(p=> p.name == 'Emanuel')
            cy.request('DELETE', 'localhost:3000/api/borrarPaciente/' + patient._id)
                 .then((response) =>{
                     expect(response.body).to.have.property('response', 'Paciente eliminado correctamente!')
                 })
         })
    })
})