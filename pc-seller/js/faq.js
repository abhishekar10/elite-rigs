let questions = document.querySelectorAll(".question");
questions.forEach((question, index) => {
    setTimeout(() => {
        question.classList.add("fade-in");
        question.style.display="flex";
    }, index * 100);
});
questions.forEach(question => {
    question.addEventListener('click',() => {
        let answer = question.nextElementSibling;
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
        }
        else {
            answer.style.display = 'flex';            
        }
    });
});