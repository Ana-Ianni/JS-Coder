var newToDoItem = function() {
    let item = window.prompt("Ingresa un nuevo elemento a la lista:");
    
    console.log(item);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.innerText = item;

    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkboxContainer"); 
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    let container = document.getElementById("container");

    container.appendChild(checkboxContainer);
}

