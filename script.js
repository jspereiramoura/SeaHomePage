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

window.onload = () => {
    // document.getElementById('video').src = 'https://www.youtube-nocookie.com/embed/K1QICrgxTjA?controls=0&amp;showinfo=0&amp;autohide=1&autoplay=1';
    // 2. This code loads the IFrame Player API code asynchronously.

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            videoId: 'K1QICrgxTjA',
            autoplay: 1,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }
}