describe('Sistema Gestion', () => {
    describe('Register',()=> {
        it('register page can be open', () => {
            cy.visit('http://localhost:5000/register')
            cy.contains('Nombre completo')
            cy.contains('Correo Electrónico')
            cy.contains('Contraseña')
            cy.contains('Repetir contraseña')
            cy.get('[placeholder="Nombre completo"]')
            cy.get('[placeholder="Email"]')
            cy.get('[placeholder="Contraseña"]')
            cy.get('[placeholder="Repertir Contraseña"]')
            cy.contains('Enviar')
        })
        it('register page can send form', () => {
            cy.get('[placeholder="Nombre completo"]').type('B person')
            cy.get('[placeholder="Email"]').type('b@gmail.com')
            cy.get('[placeholder="Contraseña"]').type('bbbbb')
            cy.get('[placeholder="Repertir Contraseña"]').type('bbbbb')
            cy.contains('Enviar').click()
            cy.contains('Usuario ya creado para este email')
        })
        it('register page cant send form with name space', () => {
            cy.get('[placeholder="Nombre completo"]').type(' ')
            cy.contains('El nombre solo puede contener letras y espacios.')
        })
        it('register page cant send form with email space', () => {
            cy.get('[placeholder="Email"]').type(' ')
            cy.contains('El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.')
        })
        it('register page cant send form with password space', () => {
            cy.get('[placeholder="Contraseña"]').type(' ')
            cy.contains('La contraseña tiene que ser de 5 a 12 dígitos.')
        })
        it('register page cant send form with password whit less than 5 digits', () => {
            cy.get('[placeholder="Contraseña"]').type('aa')
            cy.contains('La contraseña tiene que ser de 5 a 12 dígitos.')
        })
        it('register page cant send form with differents passwords', () => {
            cy.get('[placeholder="Contraseña"]').type('aaaaa')
            cy.get('[placeholder="Repertir Contraseña"]').type(' ')
            cy.contains('Ambas contraseñas deben ser iguales.')
        })
    })
    describe('Login',()=> {
        beforeEach(() => {
            cy.visit('http://localhost:5000')
        })
        /*Test dentro de la pagina de login*/
        /*Se puede abrir y contiene lo necesario*/
        it('login page can be open', () => {
            cy.contains('SGP')
            cy.get('[placeholder="Email"]')
            cy.get('[placeholder="Contraseña"]')
            cy.contains('Iniciar sesion')
            cy.contains('¿Olvidaste tu contraseña?')
        })
        /*Se puede clickear el recuperar contrseña*/
        it('login page recover password click', () => {
            cy.contains('¿Olvidaste tu contraseña?').click()
        })

        /*No se puede loguear */
        it('login page cant log in', () => {
            cy.get('[placeholder="Email"]').type('aldana@gmail.com')
            cy.get('[placeholder="Contraseña"]').type('aaaaa')
            cy.contains('Iniciar sesion').click()
            cy.contains('usuario no encontrado')
        })
        /*Se puede loguear*/
        it('login page can log in', () => {
            cy.get('[placeholder="Email"]').type('a@gmail.com')
            cy.get('[placeholder="Contraseña"]').type('aaaaa')
            cy.contains('Iniciar sesion').click()
            cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            cy.contains('Agregar un paciente')
            cy.contains('Dar de baja un paciente')
            cy.contains('Ver lista de espera')
            cy.contains('Ver estadisticas')
        })


    /*Test dentro de la pagina de Home*/ 
        describe('when logged in', () => {
            beforeEach(() => {
                cy.get('[placeholder="Email"]').type('a@gmail.com')
                cy.get('[placeholder="Contraseña"]').type('aaaaa')
                cy.contains('Iniciar sesion').click()
            })
            /*Se puede ir dentro de agregar paciente*/
            it('go to addPatient', () => {
                cy.get('[id=addPatient]').click()
                cy.contains('Ingrese los datos:')
            })
            /*Lo mismo pero para la nav bar*/
            it('go to addPatient in nav', () => {
                cy.get('[id=addPatientNav]').click()
                cy.contains('Ingrese los datos:')
            })
            /*Se puede ir dentro de eliminar paciente --PROVISORIO, aun no existe la pagina*/
            it('go to deletePatient', () => {
                cy.get('[id=deletePatient]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
            /*Lo mismo pero para la nav bar*/
            it('go to deletePatient in nav', () => {
                cy.get('[id=deletePatientNav]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
            /*Se puede ir dentro de ver lista de espera --PROVISORIO, aun no existe la pagina*/
            it('go to wattingList', () => {
                cy.get('[id=wattingList]').click()
            })
            /*Lo mismo pero para la nav bar*/
            it('go to wattingList in nav', () => {
                cy.get('[id=wattingListNav]').click()
            })
            /*Se puede ir dentro de ver las estadisticas --PROVISORIO, aun no existe la pagina*/
            it('go to statistics', () => {
                cy.get('[id=statistics]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
            /*Lo mismo pero para la nav bar*/
            it('go to statistics in nav', () => {
                cy.get('[id=statisticsNav]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
            /*Nav logo e inicio */
            it('go to home in nav', () => {
                cy.get('[id=homeNav]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
            it('go to home in nav', () => {
                cy.get('[id=brand]').click()
                cy.contains('Bienvenidos al Sistema de Gestión de Pacientes')
            })
        }) 
    })
})    