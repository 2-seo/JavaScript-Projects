// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const classList = e.currentTarget.classList;
        if(classList.contains('decrease')) {
            count--;
        } else if (classList.contains('increase')) {
            count++;
        } else if (classList.contains('reset')) {
            count = 0;
        }

        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});