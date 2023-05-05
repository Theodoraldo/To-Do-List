import './style.css';
import NewTasks from './module/newdata.js';
import displayList from './module/loaddata.js';

const aNew = document.getElementById('editTask');
aNew.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const addNwTodo = new NewTasks(aNew.value);
    addNwTodo.addTask();
    aNew.value = '';
    displayList();
  }
});

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  displayList();
});

window.onload = displayList();
