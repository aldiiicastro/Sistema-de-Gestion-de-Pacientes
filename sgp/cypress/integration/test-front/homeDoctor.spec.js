 /*global cy*/
/*Test dentro de la pagina de Home*/ 
describe('HomeDoctor', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
        cy.get('[placeholder="Email"]').type('a@gmail.com')
        cy.get('[placeholder="Contraseña"]').type('12345')
        cy.get('[id=btnLogIn]').click().should(() => {
            expect(localStorage.getItem('id')).to.eq('614f9117cd2f4a0f81ca23fa')
        })
        cy.wait(1000)
    })
    /*Se puede ver la lista de espera*/
    it('watch wattingList', () => {
        cy.request('GET', 'localhost:3000/api/waitingPatients').then((response) => {
            console.log(response.body.data.length == 0)
            if (response.body.data.length == 0) {
                cy.contains('No hay pacientes')        
            }
            else {
                cy.contains('Pacientes en Lista de Espera')
            }
        })
    })

    it('elementos del navbar', () => {
        cy.contains('Inicio');
        cy.contains('Ver pacientes atendidos');
        cy.contains('Cerrar sesión');
    });
}) 