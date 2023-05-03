import _ from 'lodash';
import './style.css';

const allList = [
  {
    index: 1,
    description: 'jQuery Library',
    complated: false,
  },
  {
    index: 2,
    description: 'Bootstrap Framework',
    complated: false,
  },
  {
    index: 3,
    description: 'jQuery Library',
    complated: false,
  },
];

const bkList = document.querySelector('.listTodo');

const displayList = () => {
  for (let i = 0; i < allList.length; i += 1) {
    bkList.innerHTML += `
    <div class='align-row'>
      <div>
        <input type="checkbox" id="check" name="check" >
        <label class="label" id="label" for="check">${allList[i].description}</label>
      </div>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
  `;
  }
}

window.onload = displayList();