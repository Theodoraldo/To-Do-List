import { taskStorage } from './newdata.js';

const bkList = document.querySelector('.listTodo');

function resetToDoKey() {
  for (let i = 0; i < taskStorage.length; i += 1) {
    taskStorage[i].key = i + 1;
  }
  localStorage.setItem('taskList', JSON.stringify(taskStorage));
}

let displayList;
export default displayList = () => {
  bkList.innerHTML = '';
  for (let i = 0; i < taskStorage.length; i += 1) {
    bkList.innerHTML += `
    <div class='align-row'>
      <div class='label-checkbox'>
        <input type="checkbox" id="check" name="check" >
        <input type="text" disabled class="inputEdit" id=${taskStorage[i].keys} value="${taskStorage[i].description}"/>
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
