const colors = [
    'green', 'red', 'yellow', '#F1f5f8'
];

const btn = document.getElementById('myBtn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});