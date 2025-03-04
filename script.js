var getUl = document.getElementById('ul');
var clearButton = document.getElementById('clearbtn');

function addItems() {
    var getInp = document.getElementById('inp');
    if (getInp.value == '') {
        alert('Enter any value');
    } else {
        getUl.innerHTML += `<li class="li"><span>${getInp.value}</span><div class="libtns"><button onclick="delItem(this)" class="libtn"><i class="fa-regular fa-trash-can"></i></button><button onclick="updateItem(this)" class="libtn"><i class="fa-regular fa-pen-to-square"></button></div></li>`;
        getInp.value = "";
        clearButton.style.display = "block";
    }
}

function updateItem(e) {
    var listItem = e.parentNode.parentNode;
    var currentText = listItem.firstChild.textContent.trim();
    var newText = prompt("Enter updated value", currentText);

    if (newText) {
        listItem.firstChild.textContent = newText;
    }
}

function delItem(e) {
    var listItem = e.parentNode.parentNode;
    listItem.remove();
    if (getUl.children.length === 0) {
        clearButton.style.display = "none";
    }
}

function delItems() {
    getUl.innerHTML = "";
    clearButton.style.display = "none";
}