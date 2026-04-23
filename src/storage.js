export function saveTodos(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadTodos() {
  const data = localStorage.getItem("projects");

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Storage parse error", e);
    return [];
  }
}
/*import{
    Project
}
from "./project.js";
// Save todos to localStorage
export function saveTodos(projects) {
  const json = JSON.stringify(projects);
  localStorage.setItem('todos', json);
}
// Load todos from localStorage
export function loadTodos() {
  const json = localStorage.getItem('todos');
  if (!json) return [];  // No data?

  const projects = JSON.parse(json);
  // Re-add methods to objects!
  return projects.map(p =>
    Object.assign(new Project(), p));
} //oroginal code did not work 
 import{
    Project
}
from "./project.js";
// Save todos to Localstorage
export function saveTodos(projects) {
 
  localStorage.setItem('STORAGE_KEY', JSON.stringify(projects));
}
// load todos from localS torage
export function loadTodos() {
  const json = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    if (!data) return [];

  // rebuild class instances
  return data.map(p => {
    const project = new Project(p.name);
//our todos 
    p.todos.forEach(t => {
      const todo = new Todo(
        t.title,
        t.description,
        t.dueDate,
        t.priority
      );
      project.addTodo(todo);
    });

    return project;
  });
} */