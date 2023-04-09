// console.log($("h1"));
// Modal window start
// let modal = document.getElementById('myModal')

// let btn = document.getElementById('myBtn')

// let span = document.getElementsByClassName('close')[0]

// btn.onclick = function () {
//   modal.style.display = 'block'
// }

// span.onclick = function () {
//   modal.style.display = 'none'
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none'
//   }
// }
// Dark mode start
// const darkModeBtn = document.getElementById('dark-mode-btn')
// darkModeBtn.addEventListener('click', function () {
//   document.body.classList.toggle('dark-mode')
// })
// darkModeBtn.addEventListener('click', function () {
//   if (document.body.classList.contains('dark-mode')) {
//       localStorage.setItem('dark-mode', 'on')

//   } else {
//     localStorage.setItem('dark-mode', 'off')
//   }
// })

// if (localStorage.getItem('dark-mode') === 'on') {
//   document.body.classList.add('dark-mode')
//     darkModeBtn.innerHTML = 'Light Mode';
// }
// Input validator function
// let form = document.querySelector('#formRegister')
// let elEmail = $('#email')
// let elNames = $('#names')
// function checkInput(input) {
//   return input.classList.add('input-valid')
// }
// function inputField(field) {
//   return field.classList.add('input-field')
// }
// elEmail.addEventListener('input', () => {
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
// })
// elNames.addEventListener('input', () => {
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
// })
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
//   if (elEmail.value.length > 0 && elNames.value.length > 0) {
//     localStorage.setItem('validation-email', elEmail.value)
//     localStorage.setItem('validation-name', elNames.value)
//     alert('succsess full add ' + elNames.value)
//     elEmail.value = ''
//     elNames.value = ''
//     elEmail.classList.remove('input-valid')
//     elNames.classList.remove('input-valid')
//     elEmail.classList.remove('input-field')
//     elNames.classList.remove('input-field')
//   }
// })


!(async function () {
    let obj = JSON.parse(localStorage.getItem('user'));
    if (!(obj)) window.location = 'register.html';
})()