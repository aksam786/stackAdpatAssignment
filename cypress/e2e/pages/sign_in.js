export class SignIn{

    // Locator variables as class variables

    signInLink = ':nth-child(2) > .nav-link'
    email_inputTextBox = '#login'
    password_inputTextBox = '#password'
    rememberMe_checkbox = '#remember'
    signIn_button = '#submit'

    clickSignIn(){

        cy.get(this.signInLink).click()
    }
    email(email){
        cy.get(this.email_inputTextBox).type(email)
        
    }
    password(password){
        cy.get(this.password_inputTextBox).type(password)
    }
    rememberMe(){
        cy.get(this.rememberMe_checkbox).click()
    }
    signIn2(){
        cy.get(this.signIn_button).click()
        
    }
}