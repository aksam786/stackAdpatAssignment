import { AddDeleteUserTask } from "./pages/add_delete_tasks"
const addDeleteTasks = new AddDeleteUserTask()

it('Add or Delete User Tasks', () => {
    cy.visit('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/')
    addDeleteTasks.clickSignIn()
    addDeleteTasks.email('muaaz.naeem1@gmail.com')
    addDeleteTasks.password('Nike-12345')
    addDeleteTasks.rememberMe()
    addDeleteTasks.signIn2()
    cy.get('thead > tr > :nth-child(1)')
        .should('contain', 'My Tasks')

    // Adding task 1

    addDeleteTasks.click_tasks_menu()
    addDeleteTasks.click_addTask_link()
    addDeleteTasks.type_in_taskBox('Task 2')
    addDeleteTasks.clickSaveTask_button()

    // Adding task 2

    addDeleteTasks.click_tasks_menu()
    addDeleteTasks.click_addTask_link()
    addDeleteTasks.type_in_taskBox('Task 3')
    addDeleteTasks.clickSaveTask_button()

    // Deleting tasks

    addDeleteTasks.deleteSecondTask()
    addDeleteTasks.deleteThirdTask()

 
})