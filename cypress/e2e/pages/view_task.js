export class ViewTask{


    // Locator variables as class variables

    signInLink = ':nth-child(2) > .nav-link'
    email_inputTextBox = '#login'
    password_inputTextBox = '#password'
    rememberMe_checkbox = '#remember'
    signIn_button = '#submit'
    viewTask_button = ':nth-child(1) > :nth-child(2) > .btn-group > .btn-outline-primary'


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

    viewTask(){
        cy.get(this.viewTask_button).click()
    }

}