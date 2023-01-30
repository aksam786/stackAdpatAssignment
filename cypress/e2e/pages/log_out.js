export class Logout{

    // Locator variables as class variables

    signInLink = ':nth-child(2) > .nav-link'
    email_inputTextBox = '#login'
    password_inputTextBox = '#password'
    rememberMe_checkbox = '#remember'
    signIn_button = '#submit'
    username_dropdown = ':nth-child(2) > #navbarDropdownPages'
    logout_link = 'div:nth-child(2) > a:nth-child(4)'

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

    clickUserName(){
        cy.get(this.username_dropdown).click()
    }

    logout2(){
        
        // cy.get('div:nth-child(2) > a:nth-child(4)').scrollIntoView().click()
        cy.get(this.logout_link).should('be.visible').trigger('mouseover').click({force: true})
        // cy.get('[href="/logout"]').click()
    }

}