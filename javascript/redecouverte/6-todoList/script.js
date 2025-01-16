const main = document.querySelector('#main');
const todoinput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');

let todoCounter = 0;

const createTodoElement = (todo) => {
    todoCounter++
    const todoCheckboxName = 'todoCheckbox' + todoCounter.toString();

    // création et ajout du formulaire de gestion d'un todo
    const todoForm = document.createElement('form');
    todoForm.classList.add('w-25', 'mx-auto', 'd-flex', 'align-items-center');
    main.appendChild(todoForm);

    // création et ajout de la div contenant l'input et le label
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('form-group', 'flex-grow-1', 'me-2');
    todoForm.appendChild(todoDiv);

    // création et ajout de l'input checkbox de validation du todo
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.setAttribute('name', todoCheckboxName);
    todoCheckbox.classList.add('me-2');
    todoDiv.appendChild(todoCheckbox);

    // création et ajout du label pour afficher le todo
    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', todoCheckboxName);
    todoLabel.classList.add('form-check-label');
    todoLabel.textContent = todo.value;
    todoDiv.appendChild(todoLabel);

    // création et ajout du bouton de suppression
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'mb-2');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.textContent = "Supprimer";
    todoForm.appendChild(deleteBtn);


    // gestionnaire d'évènement du bouton de suppression de todo
    deleteBtn.addEventListener('click', () => {
        todoDiv.remove();
        deleteBtn.remove();
    });

    // ---------------------
    // texte du todo barré d'une ligne si todo coché
    todoCheckbox.addEventListener('click', () => {
        todoLabel.classList.toggle('line');
    })
}


// gestionnaire d'évènement du bouton ajouter todo
addBtn.addEventListener('click', () => {

    if (todoinput.value !== "" && todoinput.value !== null) {
        createTodoElement(todoinput);
        todoinput.value = '';
    } else {
        window.alert('Veuillez renseignez le champ de todo')
    }
})