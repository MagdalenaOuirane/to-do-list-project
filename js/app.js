const form = document.getElementById("itemForm");

const submitBtn = document.querySelector(".btn-green");

const input = document.querySelector("#itemInput");

const divItemList = document.querySelector(".item-list");

const clearBtn = document.getElementById("clear-list");

const alertDiv = document.querySelector(".alert");


//edit option
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

    if (newItem !== "" && editFlag === false) {
        const newDivEl = document.createElement("div");
        console.log(newDivEl);
        newDivEl.classList.add("item", "my-3");

        //add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        newDivEl.setAttributeNode(attr);

        newDivEl.innerHTML = `<h5 class="item-name text-capitalize">${newItem}</h5>
    <div class="item-icons">
     <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
     <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
     <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>`;

        const deleteBtn = newDivEl.querySelector("a.delete-item");
        console.log(deleteBtn);

        deleteBtn.addEventListener("click", removeTask);

        const editBtn = newDivEl.querySelector("a.edit-item");
        editBtn.addEventListener("click", editItem);

        const completeBtn = newDivEl.querySelector("a.complete-item");
        completeBtn.addEventListener("click", completedTask);

        //append Child
        divItemList.appendChild(newDivEl);

        //add to localStorage
        addToLocalStorage(id, newItem);
        //set back to Default
        setBackToDefault();

        console.log("newItem added to the list");
    } else if (newItem !== "" && editFlag === true) {
        editEl.innerHTML = newItem;
        //edit local Storage
        editLocalStorage(editId, newItem);
        setBackToDefault();
    } else {
        alertDiv.style.display = "block";
        //remove alert
        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 2000);
    }

    //complete function
    function completedTask(e) {
        console.log("completed task");


        const divs = divItemList.querySelectorAll(".item");
        console.log("Number of divs in te list:", divs);



        divs.forEach((div) => {
            div.querySelector('.complete-item').classList.toggle("visibility");


            div.querySelector("h5").classList.toggle("completed");

        });

        setBackToDefault();
    }

    //edit function
    function editItem(e) {
        console.log("item is edited");
        const element = e.currentTarget.parentElement.parentElement;
        console.log('element', element)
        //set edit
        editEl = e.currentTarget.parentElement.previousElementSibling;
        console.log('edited Element:', editEl)
        //set form value
        input.value = editEl.innerHTML;
        editFlag = true;
        editId = element.dataset.id;
        submitBtn.textContent = "edit";
    }

    //delete function

    function removeTask(e) {
        console.log("task deleted");
        // e.target.parentNode.parentNode.parentNode.remove();
        // console.log(e.target.parentNode.parentNode.parentNode.remove());

        const element = e.currentTarget.parentElement.parentElement;
        const id = element.dataset.id;
        divItemList.removeChild(element);

        setBackToDefault();
        //remove from the local storage
        //removeFromLocalStorage(id);
    }

    //set back to default
    function setBackToDefault() {
        console.log("set back to default");
        input.value = "";
        editFlag = false;
        editId = "";
        submitBtn.textContent = "add item";
    }

    // LOCAL STORAGE
    function addToLocalStorage(id, newItem) {
        console.log("added to local storage");
    }

    function removeFromLocalStorage(id) {}

    function editLocalStorage(id, newItem) {}

};

// EVENT LISTENERS

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", (e) => {
    divItemList.textContent = "";
    //setBackToDefault();
    //localStorage.removeItem('divItem');
});