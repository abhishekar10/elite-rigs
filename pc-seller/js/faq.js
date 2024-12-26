let questions = document.querySelectorAll(".question");
questions.forEach(question => {
    question.addEventListener('click',() => {
        console.log("Clicked");
        let answer = question.nextElementSibling;
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
        }
        else {
            answer.style.display = 'flex';            
        }
    });
});