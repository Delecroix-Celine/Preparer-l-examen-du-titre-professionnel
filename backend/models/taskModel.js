class Task {
  constructor(id, title, description, status, userId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status || "À faire";
    this.userId = userId; // Permet de lier la tâche à un utilisateur
    this.createdAt = new Date();
  }
}

module.exports = Task;