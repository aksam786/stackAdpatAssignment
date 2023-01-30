export class AddDeleteUserTask{

        // Locator variables as class variables

        signInLink = ':nth-child(2) > .nav-link'
        email_inputTextBox = '#login'
        password_inputTextBox = '#password'
        rememberMe_checkbox = '#remember'
        signIn_button = '#submit'
        tasks_dropdown = 'ul li:nth-child(1) #navbarDropdownPages'
        addTask_link = '[href="/tasks/add_task"]'
        typeIn_taskBox = '#task'
        saveTask_button = '#submit'

        // Delete task

        delete_second_task = ':nth-child(2) > :nth-child(2) > .btn-group > .btn-outline-danger'
        delete_third_task = ':nth-child(2) > :nth-child(2) > .btn-group > .btn-outline-danger'

    
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

        // Adding tasks

        click_tasks_menu(){
            cy.get(this.tasks_dropdown).click()
            cy.wait(2000)
        }

        click_addTask_link(){
            cy.get(this.addTask_link).click()
        }
        type_in_taskBox(taskname){
            cy.get(this.typeIn_taskBox).type(taskname)
        }

        clickSaveTask_button(){
            cy.get(this.saveTask_button).click()
        }

        // Deleteing tasks

        deleteSecondTask(){
            cy.get(this.delete_second_task).click()

        }
        deleteThirdTask(){
            cy.get(this.delete_third_task).click()

        }

}