import { ViewTask } from "./pages/view_task"

const viewTask = new ViewTask()

it('View Tasks', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    viewTask.clickSignIn()
    viewTask.email('muaaz.naeem1@gmail.com')
    viewTask.password('Nike-12345')
    viewTask.rememberMe()
    viewTask.signIn2()
    cy.get('thead > tr > :nth-child(1)')
        .should('contain', 'My Tasks')

    viewTask.viewTask()
    cy.get('.card-text')
        .should('contain' , 'Task')

 
})