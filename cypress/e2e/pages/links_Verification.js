export class LinksVerification{

    // Links variables as class variables

    signUpLink = ':nth-child(1) > .nav-link'
    loginLink = ':nth-child(2) > .nav-link'
    calendarLink = ':nth-child(3) > .nav-link'
    integrationLink = ':nth-child(4) > .nav-link'
    faqLink = ':nth-child(5) > .nav-link'
    

        signUp(){
            cy.get(this.signUpLink).click()

    
        }
        login(){
            cy.get(this.loginLink).click()

            
        }
        calendar(){
            cy.get(this.calendarLink).click()

            
        }
        integration(){
            cy.get(this.integrationLink).click()

            
        }
        faq(){
            cy.get(this.faqLink).click()

        }



}