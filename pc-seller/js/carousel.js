let index = 0;
let sliderTexts = ['Customize your <div>Powerhouses</div>','Hand pick your <div>choice of components</div>','Laptops that meet <div>all choices</div>'];
let sliderText = document.querySelector('.slider-text');
console.log(sliderText.textContent);
console.log(sliderText.innerText);
const carousel = () => {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");

    }
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].classList.add("active");
    sliderText.innerHTML = sliderTexts[index-1];
    sliderText.classList.remove('fade-in');
    void sliderText.offsetWidth;
    sliderText.classList.add('fade-in');
    setTimeout(carousel, 5000);
};
carousel();