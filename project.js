export class Project{
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    removeTodo(index) {
    this.todos.splice(index, 1);
  }
}

// Default project on app start
//const defaultProject = new Project("My Todos");

