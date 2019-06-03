const serverUrl = Cypress.env('serverUrl');

describe('todo app', () => {
    beforeEach(() => {

        cy.fixture('todos/all_before.json').as('todosJSON');
        cy.fixture('todos/add.json').as('addTodoJSON');
        cy.fixture('todos/all_after.json').as('updatedJSON');

        cy.server();
        cy.route('GET', `${serverUrl}/todos`, '@todosJSON').as('getAllTodos');

        cy.visit('/');
        cy.wait('@getAllTodos');
        cy.get('h1').contains('Todo List');
    });

    it('should display the todo list', () => {
        // network stubs
        cy.server();
        cy.route('GET', `${serverUrl}/todos`, '@updatedJSON').as('getAllTodos');
        cy.route('POST', `${serverUrl}/todos`, '@addTodoJSON').as('addTodo');
    });

    it('should add a new todo to the list', () => {});

    it('should toggle a todo correctly', () => {});
});