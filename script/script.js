// list of vauable

const menuIcon = document.getElementById("menu-btn");
const list = document.getElementById("list");

menuIcon.onclick = () => {
    list.classList.toggle('active');
}
window.onscroll = () => {
    list.classList.remove('active');
}

