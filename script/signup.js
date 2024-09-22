
const lab = document.getElementById("lab")
const input = document.getElementById("input")
const lab2 = document.getElementById("lab-2")
const input2 = document.getElementById("input-2")
const lab3 = document.getElementById("lab-3")
const input3 = document.getElementById("input-3")

input.onclick = () => {
    lab.classList.toggle('active')
    lab2.classList.remove('active-2')
    lab3.classList.remove('active-3')
}

input2.onclick = () => {
    lab2.classList.toggle('active-2')
    lab3.classList.remove('active-3')
    lab.classList.remove('active')
}

input3.onclick = () => {
    lab3.classList.toggle('active-3')
    lab2.classList.remove('active-2')
    lab.classList.remove('active')
}

// creating loading animation function 

const signUpButton = document.querySelector('#sign-up');
const iconLoad = document.querySelector('#icon-load');



signUpButton.onclick = () =>{

iconLoad.classList.add('hidden');



}