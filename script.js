const btn = document.getElementById("light_mode");
const container_menu = document.getElementById("container-menu");

btn.addEventListener("click", (el) => {
    change(el.target.textContent);
});

function change(text) {
    if (text == "light_mode") {
        const brand = document.getElementById('brand');
        brand.classList.remove('brand-light');
        brand.classList.add('brand-dark');

        const mask = document.getElementById("mask");
        mask.style.filter = "invert()";

        const menu = document.getElementById("menu");
        menu.style.color = "white";

        container_menu.style.color = "black";
        container_menu.style.backgroundColor = "lightblue";

        btn.style.color = "white";
        btn.textContent = "dark_mode";
    } else {
        const brand = document.getElementById('brand');
        brand.classList.remove('brand-dark');
        brand.classList.add('brand-light');

        const mask = document.getElementById("mask");
        mask.style.filter = "none";

        const menu = document.getElementById("menu");
        menu.style.color = "black";

        container_menu.style.color = "white";
        container_menu.style.backgroundColor = "darkslategrey";

        btn.style.color = "black";
        btn.textContent = "light_mode";
    }
}



document.getElementById("menu").addEventListener("click", () => {
    container_menu.style.left = 0;
});
document.getElementById("close").addEventListener("click", () => {
    container_menu.style.left = "-100vw";
});

function keydownCheck(event) {
    if (event.keyCode == 116 || event.keyCode == 82) {
        event.preventDefault();
        event.keyCode = 0;
        window.location.reload();
    }
}
document.addEventListener("keydown", keydownCheck);