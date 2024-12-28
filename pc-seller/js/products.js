let pc_products = document.querySelectorAll(".pc-item");
let laptop_products = document.querySelectorAll(".laptop-item");
let accessory_products = document.querySelectorAll(".accessories-item");
let tabs = document.querySelectorAll(".tab")
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tab.classList.add('selected');
        const tabName = tab.textContent;
        tabs.forEach(tab_2 => {
            if(tab_2.textContent !== tabName) tab_2.classList.remove('selected');
        })
        pc_products.forEach(product => {
            if(index === 0) {
                product.classList.remove("hide-product");
            }
            else {
                product.classList.add("hide-product");
            }
        })
        laptop_products.forEach(product => {
            if(index === 1) {
                product.classList.remove("hide-product");
            }
            else {
                product.classList.add("hide-product");
            }
        })
        accessory_products.forEach(product => {
            if(index === 2) {
                product.classList.remove("hide-product");
            }
            else {
                product.classList.add("hide-product");
            }
        })
    })
})
