const themeBtn = document.querySelector('.theme-cont > button');
const addBookBtn = document.querySelector('.add-book-cont > button');
const modal = document.querySelector('.modal');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const inputPages = document.querySelector('.input-pages');
const inputRead = document.querySelector('.input-read');
const submitBtn = document.querySelector('form > button');
const library = [];
let myBook = {};
let inputTitleValue = inputTitle.value;
let inputAuthorValue = inputAuthor.value;
let inputPagesValue = inputPages.value;
let inputReadValue = inputRead.checked;

themeBtn.addEventListener('click', () => {
  changeColor();
});

function changeColor() {
  const root = document.documentElement;
  const newColor = root.className === 'dark' ? 'bright' : 'dark';
  root.className = newColor;
}

addBookBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

inputTitle.addEventListener('change', () => {
  inputTitleValue = inputTitle.value;
});

inputAuthor.addEventListener('change', () => {
  inputAuthorValue = inputAuthor.value;
});

inputPages.addEventListener('change', () => {
  inputPagesValue = inputPages.value;
});

inputRead.addEventListener('change', () => {
  inputReadValue = inputRead.checked;
});

function Book() {
  this.title = `"${inputTitleValue}"`;
  this.author = `${inputAuthorValue}`;
  this.pages = `${inputPagesValue}`;
  this.read = inputReadValue;
  this.toggleRead = function () {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    }
  }
}

submitBtn.addEventListener('click', () => {
  if(!inputTitleValue || !inputAuthorValue || !inputPagesValue) {
    alert('Title, Author and Pages all required!');
    return;
  }
  modal.style.display = 'none';
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
  myBook = new Book;
  addBookToLibrary(myBook);
  inputTitleValue = inputTitle.value;
  inputAuthorValue = inputAuthor.value;
  inputPagesValue = inputPages.value;
  inputReadValue = false;
  handelLibrary();
});

function addBookToLibrary(book) {
  library.push(book);
}

const cardContainer = document.querySelector('.card-cont');

function unDisplayLibrary() {
  cardContainer.innerHTML = '';
}

function displayLibrary() {
  for (let book in library) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card${book}`);
    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = `${library[book].title}`;
    card.appendChild(title);
    let author = document.createElement('div');
    author.classList.add('author');
    author.innerHTML = `${library[book].author}`;
    card.appendChild(author);
    let pages = document.createElement('div');
    pages.classList.add('pages');
    pages.innerHTML = `${library[book].pages} pages`;
    card.appendChild(pages);
    let cardButtons = document.createElement('div');
    cardButtons.classList.add('card-btns');
    let readButton = document.createElement('button');
    readButton.type = 'button';
    readButton.classList.add('read-btn');
    if (library[book].read) {
      readButton.classList.add('read');
      readButton.innerHTML = 'Read';
    } else {
      readButton.classList.add('unread');
      readButton.innerHTML = 'Unread';
    }
    readButton.classList.add(`read${book}`);
    cardButtons.appendChild(readButton);
    let removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('remove-btn');
    removeButton.classList.add(`remove${book}`);
    removeButton.innerHTML = 'Remove';
    cardButtons.appendChild(removeButton);
    card.appendChild(cardButtons);
    cardContainer.appendChild(card);
  }
}

function createRemoveFunctionality() {
  for (let i = 0; i < library.length; i++) {
    document.querySelector(`.remove${i}`).addEventListener('click', () => {
      library.splice(i, 1);
      handelLibrary();
    });
  }
}

function createReadFunctionality() {
  for (let i = 0; i < library.length; i++) {
    document.querySelector(`.read${i}`).addEventListener('click', () => {
      library[i].toggleRead();
      handelLibrary();
    });
  }
}

function handelLibrary() {
  unDisplayLibrary();
  displayLibrary();
  createReadFunctionality()
  createRemoveFunctionality();
}