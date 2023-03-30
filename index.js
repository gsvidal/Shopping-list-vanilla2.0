const button = document.querySelector('button');
const list = document.querySelector('.list');
const input = document.querySelector('#item');
const listItems = document.querySelectorAll('.item');

const isInputValid = () => {
  return input.value.length > 0;
};

const createAndAppendItemToList = () => {
  let newItem = document.createElement('li');
  if (!newItem.classList.contains('item')) {
    newItem.classList.add('item');
  }
  newItem.textContent = input.value;
  list.append(newItem);
  input.value = '';

  const newDelBtn = createAndAppendDeleteButton(newItem);
  // Add functionality to new delete buttons
  newDelBtn.addEventListener('click', deleteListItem);
};

const addItemToCart = () => {
  console.log();
  if (isInputValid()) {
    createAndAppendItemToList();
  }
};

const addItemToCartWithEnterKey = (event) => {
  if (isInputValid() && event.keyCode === 13) {
    createAndAppendItemToList();
  }
};

button.addEventListener('click', addItemToCart);
input.addEventListener('keyup', addItemToCartWithEnterKey);

const createAndAppendDeleteButton = (appendedTo) => {
  let deleteButton = document.createElement('button');
  deleteButton.className = 'delBtn';
  let buttonText = document.createTextNode('DELETE');
  deleteButton.appendChild(buttonText);
  appendedTo.appendChild(deleteButton);
  return deleteButton;
};

// Create initial delete buttons
listItems.forEach((item) => createAndAppendDeleteButton(item));

// Create function to delete an list item
const deleteListItem = (event) => {
  console.log(event.target);
  let itemElement = event.target.parentNode;
  itemElement.remove();
};

// Give functionality to initial deleteButtons
const deleteButtons = document.querySelectorAll('.delBtn');
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteListItem);
});

const toggleDone = (event) => {
  console.log(event.target);
  event.target.classList.toggle('done');
};

list.addEventListener('click', toggleDone);