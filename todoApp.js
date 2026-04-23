//this one is for our OOP requirement
// Use factory function or class from notes
export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;  // 'low', 'medium', 'high'
    this.notes = '';
    this.checklist = [];
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

