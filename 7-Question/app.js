//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {

        // 다른 질문이 열려있으면 다른 질문 답변 닫음
        questions.forEach(item => {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});





// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });