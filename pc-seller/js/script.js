if(window.location.pathname !== "/pc-seller/index.html") {
    document.body.style.overflow="visible";
}
let navigationOptions = document.querySelectorAll(".nav-option");
navigationOptions.forEach(option => {
    option.addEventListener('click', function() {
        const href = option.innerText.trim();
        const url = `${href.toLowerCase().replace(/\s+/g, '-')}.html`;
        window.location.href = url;
    })
})
logoButton = document.getElementById("logo");
logoButton.addEventListener('click', () => {
    window.location.href = `index.html`;
});
