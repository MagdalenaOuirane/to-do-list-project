const form = document.getElementById('itemForm');

const input = document.querySelector('#itemInput');

const divItem = document.querySelector('.item-list');

const clearBtn = document.getElementById('clear-list');





const addItem = (e) => {
e.preventDefault();
console.log(e);

const newItem = input.value;
console.log(newItem);

if (newItem === "") return;

const newDivEl = document.createElement('div');
console.log(newDivEl);
newDivEl.classList.add("item","my-3");

newDivEl.appendChild(document.createTextNode(newItem));

const h5 = document.createElement('h5');
h5.classList.add("item-name","text-capitalize");
newDivEl.appendChild(h5);


const iconDiv = document.createElement('div');
iconDiv.className = "item-icons";
newDivEl.appendChild(iconDiv);

const link = document.createElement('a');
link.setAttribute('href', "#");
link.classList.add('complete-item', "mx2", "item-icon");
iconDiv.appendChild(link);

const circleCheck = document.createElement('i');
circleCheck.classList.add("far","fa-check-circle");
link.appendChild(circleCheck);



link2 =document.createElement('a');
link2.setAttribute('href', "#");
link2.classList.add('edit-item', "mx2", "item-icon");
iconDiv.appendChild(link2);

const faEdit = document.createElement('i');
faEdit.classList.add("far", "fa-edit");
link2.appendChild(faEdit);


link3 =document.createElement('a');
link3.setAttribute('href', "#");
link3.classList.add('delete-item', "item-icon");
iconDiv.appendChild(link3);

const circleTime = document.createElement('i');
circleTime.classList.add("far", "fa-times-circle");
link3.appendChild(circleTime);


divItem.appendChild(newDivEl);

input.value="";
}

















form.addEventListener('click',addItem);

















