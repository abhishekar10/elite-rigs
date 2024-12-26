let index = 0;
const carousel = () => {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].classList.add("active");
    setTimeout(carousel, 5000); // Call carousel every 5 seconds
};
carousel();