const btn = document.getElementById('btn-color');
const btn2 = document.getElementById('btn-color2');
const title = document.getElementById('title');
const defaultColor = document.getElementById('btn-default');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f77';
    title.style.backgroundColor = '#f77';
});
btn2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#7f7';
    title.style.backgroundColor = '#7f7';
});
defaultColor.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
    title.style.backgroundColor = '#000';
});