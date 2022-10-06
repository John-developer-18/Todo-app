const todo_input = document.getElementById('todo-input');
const todo_add_button = document.getElementById('todo-add');
const todo_container = document.querySelector('.todo-list-container');
const span = document.querySelector('.span');


todo_add_button.addEventListener('click',function(){
    span.classList.remove('span');
    span.classList.add('none');

    let div = document.createElement('div');
    div.classList.add('todo-list-items')
    todo_container.append(div);

    const p =  document.createElement('p');
    const button = document.createElement('button');
    const button2 = document.createElement('button');

    p.classList.add('p');
    button.classList.add('button');
    button2.classList.add('button');

    button.classList.add("fa-solid")
    button.classList.add("fa-trash")

    button2.classList.add("fa-solid")
    button2.classList.add("fa-check")


    div.append(p,button,button2)

    p.textContent +=todo_input.value;

    button.onclick = function(){
        div.remove();
    }

    button2.onclick = function(){
        p.classList.add('line');
    }

    todo_input.value="";
});