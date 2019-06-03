describe('todo app', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('h1').contains('Todo List');
    });

    it('should display the todo list', () => {});

    it('should add a new todo to the list', () => {});

    it('should toggle a todo correctly', () => {});
});