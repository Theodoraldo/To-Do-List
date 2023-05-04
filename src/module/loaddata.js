let listStore = JSON.parse(localStorage.getItem('taskList')) || [];

const bkList = document.querySelector('.listTodo');

function updateData() {
  listStore = JSON.parse(localStorage.getItem('taskList'));
}

export const displayList = () => {
  bkList.innerHTML = ``;
  updateData();
  for (let i = 0; i < listStore.length; i += 1) {
    bkList.innerHTML += `
    <div class='align-row'>
      <div class='label-checkbox'>
        <input type="checkbox" id="check" name="check" >
        <label class="label" id=${listStore[i].keys} for="check">${listStore[i].description}</label>
      </div>
     <div>
        <span class="delete" id=${i}><i class="fa fa-trash" aria-hidden="true"></i></span>
        <span class="edit"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
     </div>
    </div>
    <hr>
  `;
  }

  const deleteBook = () => {
    const remoVingBtnsEl = [...document.getElementsByClassName('delete')];
    console.log(remoVingBtnsEl);
    remoVingBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        listStore.splice(e.target.id, 1);
        localStorage.setItem('taskList', JSON.stringify(listStore));
        displayList();
      });
    });
  };
  deleteBook();
};