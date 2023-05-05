import { taskStorage } from './newdata.js';
import checkState from './state.js';

const bkList = document.querySelector('.listTodo');

const resetToDoKey = () => {
  for (let i = 0; i < taskStorage.length; i += 1) {
    taskStorage[i].key = i + 1;
  }
  localStorage.setItem('taskList', JSON.stringify(taskStorage));
};

let displayList;
export default displayList = () => {
  console.log(checkState());
  bkList.innerHTML = '';
  for (let i = 0; i < taskStorage.length; i += 1) {
    bkList.innerHTML += `
    <div class='align-row'>
      <div class='label-checkbox'>
        <input type="checkbox" id="check" class="check" name="check" ${taskStorage[i].completed ? 'checked' : 'unchecked'}>
        <input type="text" disabled class="inputEdit ${checkState(taskStorage[i].completed)}" id=${taskStorage[i].keys} value="${taskStorage[i].description}"/>
     </div>
     <div>
        <span class="delete" id=${i}><i class="fa fa-trash" aria-hidden="true"></i></span>
        <span class="edit"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
     </div>
    </div>
    <hr>
  `;
  }

  const deleteToDo = () => {
    const deleteBtn = [...document.getElementsByClassName('delete')];
    deleteBtn.forEach((item, i) => {
      item.addEventListener('click', () => {
        taskStorage.splice(i, 1);
        localStorage.setItem('taskList', JSON.stringify(taskStorage));
        resetToDoKey();
        displayList();
      });
    });
  };
  deleteToDo();

  const editToDo = () => {
    const editBtn = document.querySelectorAll('.edit');
    const lableEdit = document.querySelectorAll('.inputEdit');
    const backEdit = document.querySelectorAll('.align-row');
    const checkEdit = document.querySelectorAll('.check');
    editBtn.forEach((item, i) => {
      item.addEventListener('click', () => {
        lableEdit[i].disabled = false;
        lableEdit[i].focus();
        lableEdit[i].style.backgroundColor = 'cornflowerblue';
        backEdit[i].style.backgroundColor = 'cornflowerblue';
        lableEdit[i].style.color = 'white';
        lableEdit[i].style.fontWeight = 'bold';
      });
    });

    checkEdit.forEach((item, i) => {
      item.addEventListener('change', () => {
        if (checkEdit[i].checked) {
          lableEdit[i].style.textDecoration = 'line-through';
          lableEdit[i].style.color = 'tomato';
          taskStorage[i].completed = true;
          localStorage.setItem('taskList', JSON.stringify(taskStorage));
        } else {
          lableEdit[i].style.textDecoration = 'none';
          lableEdit[i].style.color = 'rgb(97, 94, 94)';
          taskStorage[i].completed = false;
          localStorage.setItem('taskList', JSON.stringify(taskStorage));
        }
      });
    });
  };
  editToDo();

  const saveEditToDo = () => {
    const lableEdit = document.querySelectorAll('.inputEdit');
    lableEdit.forEach((item, i) => {
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          taskStorage[i].description = lableEdit[i].value;
          localStorage.setItem('taskList', JSON.stringify(taskStorage));
          displayList();
        }
      });
    });
  };
  saveEditToDo();
};
