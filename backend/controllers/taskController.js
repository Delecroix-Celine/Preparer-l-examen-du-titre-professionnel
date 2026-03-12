let tasks = [
  { id: 1, title: "Faire les courses", status: "À faire" },
  { id: 2, title: "Finir le projet", status: "En cours" }
];

// Lire toutes les tâches
exports.getTasks = (req, res) => {
  res.json(tasks);
};

// Ajouter une tâche
exports.createTask = (req, res) => {
  const { title, status } = req.body;
  const newTask = { id: tasks.length + 1, title, status: status || "À faire" };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Modifier une tâche
exports.updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, status } = req.body;
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.title = title || task.title;
    task.status = status || task.status;
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
};

// Supprimer une tâche
exports.deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json({ message: "Tâche supprimée" });
};