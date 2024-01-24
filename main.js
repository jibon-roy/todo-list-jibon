const from = document.getElementById('input-field');
const addField = document.getElementById('task');
from.addEventListener('submit',getValue);

function getValue(event){
    event.preventDefault();
    const value= event.target.children[0].value;
    const tasks = document.createElement('div');
    const add = document.createElement('p');
    const deleteBtn = document.createElement('div');
    
    let num = task.childElementCount+1;
    add.innerText = num+'. '+value;

    addField.appendChild(tasks);
    tasks.classList.add('tasks');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = 'Delete';
    tasks.appendChild(add);
    tasks.appendChild(deleteBtn);

    deleteBtn.addEventListener('click',function(){
        addField.removeChild(tasks);
    });

    const inputValue = document.getElementById('input');
    inputValue.value = '';
}

