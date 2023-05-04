import './style.css';
import NewTasks from './module/newdata';
import { displayList } from './module/loaddata';

const aNew = document.getElementById('editTask');
aNew.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const addNwTodo = new NewTasks(aNew.value);
    addNwTodo.addTask();
    displayList();
    aNew.value = "";
  }
});

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  displayList();
});

window.onload = displayList();