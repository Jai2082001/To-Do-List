// const creatElement = document.createElement("input");
const addTaskBtn = document.querySelector(".add_button");
const listcontainer = document.getElementsByClassName("list-container")[0];
const input = document.querySelector(".input-field");
const form = document.querySelector(".input-form");
let todolist = [];
let reallist = [];
addTaskBtn.addEventListener("click", function() {
    input.classList.toggle("none-display")
});

function inputFunctionHandler() {
    renderlist();
}

function renderlist() {
    console.log("heelo");
    if (input.value != "") {
        listcontainer.innerHTML = "";
        todolist.push(input.value);
        renderElements();
    } else {
        return;
    }
}

function renderElements() {
    listcontainer.innerHTML = "";
    for (i = 0; i < todolist.length; i++) {
        // let a = {
        //     taskname: input.value,
        //     number: todolist.length - 1
        // };
        const li = document.createElement("li");
        const delbutn = document.createElement("input");
        delbutn.type = "button";
        delbutn.value = "⮾";
        delbutn.classList.add("list-btn");
        li.append(todolist[i]);
        li.appendChild(delbutn);
        li.classList.add("list-name");
        listcontainer.append(li);
        delbutn.addEventListener('click', function() {
            console.log(this);
            updateList(this);
            renderElements();
        });
    }
}

function updateList(element) {
    let b = element.parentNode.textContent;
    console.log(todolist);
    let list = todolist.filter(current => {
        return current != b;
    });
    todolist = list;
}