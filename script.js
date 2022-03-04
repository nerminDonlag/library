function changeColor() {
  const root = document.documentElement;
  const newColor = root.className === 'dark' ? 'bright' : 'dark';
  root.className = newColor;
}

document.querySelector('.theme-cont > button').addEventListener('click', () => {
  changeColor();
});