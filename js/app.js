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

newDivEl.innerHTML = `<h5 class="item-name text-capitalize">laundry</h5>
<div class="item-icons">
 <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
 <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
 <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
</div>`;

// const h5 = document.createElement('h5');
// h5.classList.add("item-name","text-capitalize");
// newDivEl.appendChild(h5);


// const iconDiv = document.createElement('div');
// iconDiv.className = "item-icons";
// newDivEl.appendChild(iconDiv);

// const link = document.createElement('a');
// link.setAttribute('href', "#");
// link.classList.add('complete-item', "mx2", "item-icon");
// iconDiv.appendChild(link);

// const circleCheck = document.createElement('i');
// circleCheck.classList.add("far","fa-check-circle");
// link.appendChild(circleCheck);



// link2 =document.createElement('a');
// link2.setAttribute('href', "#");
// link2.classList.add('edit-item', "mx2", "item-icon");
// iconDiv.appendChild(link2);

// const faEdit = document.createElement('i');
// faEdit.classList.add("far", "fa-edit");
// link2.appendChild(faEdit);


// link3 =document.createElement('a');
// link3.setAttribute('href', "#");
// link3.classList.add('delete-item', "item-icon");
// iconDiv.appendChild(link3);

// const circleTime = document.createElement('i');
// circleTime.classList.add("far", "fa-times-circle");
// link3.appendChild(circleTime);


divItem.appendChild(newDivEl);

input.value="";


newDivEl.querySelector('a.delete-item').addEventListener('click',removeTask);

// newDivEl.querySelector('a.complete-item').addEventListener('click', toggleClass);
}

form.addEventListener('click',addItem);


const removeTask = (e) => {

    e.target.parentNode.parentNode.parentNode.remove();
    console.log(e.target.parentNode.parentNode.parentNode.remove());
}

const toggleClass = (e) => {
    console.log(e),
    console.log('Its working');
  
// const h5 = document.querySelector('h5');
// const completeItems = document.querySelector('a.complete-item');


// h5.classList.toggle('completed');

// completeItems.classList.toggle('visibility');


// if (h5.classList.toggle('completed') && document.querySelector('a.complete-item').classList.toggle('visibility') ) {
// h5.style.textDecoration = "line-through";
// }
    // e.target.parentNode.parentNode.style.textDecoration = "line-through";
    // console.log(  e.target.parentNode.parentNode.parentNode);
}





clearBtn.addEventListener('click', (e) => {
     divItem.textContent = "";
})












