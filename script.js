const themeBtn = document.querySelector('.theme-cont > button');
const addBookBtn = document.querySelector('.add-book-cont > button');
const modal = document.querySelector('.modal');
const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const inputPages = document.querySelector('.input-pages');
const inputRead = document.querySelector('.input-read');
const submitBtn = document.querySelector('form > button');

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

submitBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
});