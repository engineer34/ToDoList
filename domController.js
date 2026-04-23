//startup imports similar to last homework
import{
    Project
}
//import project.js
//has our constructors for addtodo
//amd remove todo
from "./project.js";
import{
    Todo
}
from "./todoApp.js";
//connecting our todoApp as well
import{
    saveTodos, loadTodos
}
//importing our storage file
//so it can get our localStorage as well
from "./storage.js";
//initialize projects into an array
let projects = [];//function loads app
export function loadApp() {
  const storedProjects = loadTodos();
//if statement if we have stored projects more than 0 we store them in localStorage
  if (storedProjects.length > 0) {
    projects = storedProjects.map(p => {
      const project = new Project(p.name);

      if (p.todos && Array.isArray(p.todos)) {
        p.todos.forEach(t => {
          const todo = new Todo(
            t.title,
            t.description,
            t.dueDate,
            t.priority
          );
          //when we add project we add todo button for it
          project.addTodo(todo);
        });
      }
//after the call we return project
      return project;
    });
  } else {
    const defaultProject = new Project("My Todos");
//our sample proj
    const sampleTodo = new Todo(
      "Finish Project",
      "Computer Science Project",
      "2026-02-26",
      "high"
    );

    defaultProject.addTodo(sampleTodo);
    projects = [defaultProject];
    saveTodos(projects);
  }
//caslling our render function
  render();
}
function render() {
  const content = document.getElementById("content");
    content.innerHTML = "";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add Project";

  addProjectBtn.addEventListener("click", () => {
    const name = prompt("Project name?");
    if (!name) return;

    const newProject = new Project(name);
    projects.push(newProject);
    saveTodos(projects);//save our Projectss
    render();
  });

  content.appendChild(addProjectBtn);

  projects.forEach((project, projectIndex) => {
    const title = document.createElement("h2");
    title.textContent = project.name;
    content.appendChild(title);
 //had to restructure because of errors
 //we are creating a button to delete projects we add   
const deleteProjectBtn = document.createElement("button");
//display text delet project
deleteProjectBtn.textContent = "Delete Project";
//adding our Eventlistenerfor when we click deleteproject button
deleteProjectBtn.addEventListener("click", () => {
  projects.splice(projectIndex, 1);
  saveTodos(projects);
  render();
});

content.appendChild(deleteProjectBtn);
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";
//our eventlistener for addtodo button
//displays questions prompt title, description, and duedate
    addTodoBtn.addEventListener("click", () => {
      const title = prompt("Todo title?");
      const desc = prompt("Description?");
      const date = prompt("Due date?");
      if (!title) return;

      const newTodo = new Todo(title, desc, date, "low");
      project.addTodo(newTodo);
      saveTodos(projects);
      render();
    });

    content.appendChild(addTodoBtn);

    project.todos.forEach((todo, index) => {
      const div = document.createElement("div");

      const text = document.createElement("span");
      //this will display it in the order below with a -title-des-and date
      text.textContent = `${todo.title} — ${todo.description} — ${todo.dueDate}`;
//our delte element
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
//remove todo Buttom
      deleteBtn.addEventListener("click", () => {
        project.removeTodo(index);
        saveTodos(projects);
        render();
      });

      div.appendChild(text);
      div.appendChild(deleteBtn);
      content.appendChild(div);
    });
  });
}
/*    project.todos.forEach(todo => { original code wasnt working
const div = document.createElement("div");
div.textContent = `${todo.title} — ${todo.description} - ${todo.dueDate}`;
content.appendChild(div);
    });
  });*/
