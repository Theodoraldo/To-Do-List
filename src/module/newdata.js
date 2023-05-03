const taskStorage = JSON.parse(localStorage.getItem('taskList')) || [];

export default class NewTasks {
  constructor(task) {
    this.task = task;
  }

  addTask() {
    if (this.task) {
      let id = 0;
      if (taskStorage.length === 0) {
        id = 1;
      }
      id = taskStorage.length + 1;

      const doList = {
        description: this.task,
        completed: false,
        key: id,
      }
      taskStorage.push(doList);
      localStorage.setItem('taskList', JSON.stringify(taskStorage));
    }
  }
}