const express = require("express");
const router = express.Router();

// Liste simulée de tâches
let tasks = [
  { id: 1, title: "Faire les courses", status: "À faire" },
  { id: 2, title: "Finir le projet", status: "En cours" }
];

// GET /tasks → récupérer toutes les tâches
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /tasks → ajouter une tâche
router.post("/", (req, res) => {
  const { title, status } = req.body;
  const newTask = { id: tasks.length + 1, title, status: status || "À faire" };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id → modifier une tâche
router.put("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, status } = req.body;
  const task = tasks.find(t => t.id === taskId);
  if(task) {
    task.title = title || task.title;
    task.status = status || task.status;
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

// DELETE /tasks/:id → supprimer une tâche
router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json({ message: "Tâche supprimée" });
});

module.exports = router;