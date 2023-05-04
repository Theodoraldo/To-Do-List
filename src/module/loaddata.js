import { taskStorage } from "./newdata";

const bkList = document.querySelector('.listTodo');

let displayList;
export default displayList = () => {
  bkList.innerHTML = '';
  for (let i = 0; i < taskStorage.length; i += 1) {
    bkList.innerHTML += `
    <div class='align-row'>
      <div class='label-checkbox'>
        <input type="checkbox" id="check" name="check" >
        <label class="label" id=${taskStorage[i].keys} for="check">${taskStorage[i].description}</label>
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
    const remoVingBtnsEl = [...document.getElementsByClassName('delete')];
    remoVingBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        taskStorage.splice(e.target.id, 1);
        localStorage.setItem('taskList', JSON.stringify(taskStorage));
        displayList();
      });
    });
  };
  deleteToDo();
};
