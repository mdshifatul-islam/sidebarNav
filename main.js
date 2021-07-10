const navBtn = document.querySelector("#bar_icon");
const menuBox = document.querySelector("#menuBoxDiv");

navBtn.addEventListener('click', () => {
    menuBox.classList.toggle("open_menu_box")
})