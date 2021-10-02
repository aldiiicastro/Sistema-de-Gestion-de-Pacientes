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