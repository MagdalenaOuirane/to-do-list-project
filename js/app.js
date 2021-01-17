const form = document.getElementById('itemForm');

const input = document.querySelector('#itemInput');

const divItem = document.querySelector('.item-list');

const clearBtn = document.getElementById('clear-list');

const alertDiv = document.querySelector('.alert');


let editEl;
let editFlag = false;
let editId = "";





const addItem = (e) => {


e.preventDefault();
console.log(e);

const newItem = input.value;
console.log(newItem);

const id = new Date().getTime().toString();
console.log(id);


if ( newItem !== "" && editFlag === false) {

    const newDivEl = document.createElement('div');
    console.log(newDivEl);
    newDivEl.classList.add("item","my-3");

    //add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    newDivEl.setAttributeNode(attr);

    newDivEl.innerHTML = `<h5 class="item-name text-capitalize">${newItem}</h5>
    <div class="item-icons">
     <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
     <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
     <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>`;

    //append Child
      divItem.appendChild(newDivEl);

    //add to localStorage
    addToLocalStorage(id, newItem);
    //set back to Default
    setBackToDefault()





    console.log("newItem added to the list")
} else if (newItem !== "" && editFlag === true) {
    console.log("editing");
} else {
   alertDiv.style.display = "block";
  
   setTimeout(function(){
    alertDiv.style.display = "none"; 
   },2000)
}

//set back to default
function setBackToDefault() {
    console.log('set back to default');
}

// LOCAL STORAGE
function addToLocalStorage(id, newItem) {
    console.log('added to local storage');
}





input.value="";


// newDivEl.querySelector('a.delete-item').addEventListener('click',removeTask);

// newDivEl.querySelector('a.complete-item').addEventListener('click', toggleClass);
}

form.addEventListener('submit',addItem);


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












