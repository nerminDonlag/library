document.querySelector('.theme-cont > button').addEventListener('click', () => {
  changeColor();
});

function changeColor() {
  const root = document.documentElement;
  const newColor = root.className === 'dark' ? 'bright' : 'dark';
  root.className = newColor;
}

document.querySelector('.add-book-cont > button').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});