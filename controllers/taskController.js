const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.session.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addTask = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      completed: false,
      userId: req.session.userId
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

const toggleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    task.completed = !task.completed;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

module.exports = { getTasks, addTask, toggleTask, deleteTask };