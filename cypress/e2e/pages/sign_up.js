export class SignUp{

    // Locator variables as class variables

    signUpLink = ':nth-child(1) > .nav-link'
    name_textInputBox = '#name'
    email_textInputBox = '#email'
    password_textInputBox = '#password'
    agree_button = '#agree'
    submit_button = '#submit'

    // variable instanciation

    signUp2(name, email, password){
        cy.get(this.signUpLink).click()
        cy.get(this.name_textInputBox).type(name)
        cy.get(this.email_textInputBox).type(email)
        cy.get(this.password_textInputBox).type(password)
        cy.get(this.agree_button).click()
        cy.get(this.submit_button).click()

    }
}