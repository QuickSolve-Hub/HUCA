
const lab = document.getElementById("lab")
const input = document.getElementById("input")
const lab2 = document.getElementById("lab-2")
const input2 = document.getElementById("input-2")
const lab3 = document.getElementById("lab-3")
const input3 = document.getElementById("input-3")

input.onclick = () => {
    lab.classList.toggle('active')
}

input2.onclick = () => {
    lab2.classList.toggle('active-2')
}

input3.onclick = () => {
    lab3.classList.toggle('active-3')
}
