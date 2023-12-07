// js file
let elForm = document.querySelector('.form');
let elEmailInput = document.querySelector('.email');
let elPassInput = document.querySelector('.password');
let elAlert = document.querySelector('.alert');

let storage = window.localStorage

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault()

    let emailValue = elEmailInput.value
    let passValue = elPassInput.value

    let emailAndPass =`Login: ${emailValue} and Password: ${passValue}`

    if (emailValue == 'kitob' && passValue == '12345') {
        window.location.replace('main.html')
        storage.setItem('LoginAndPass', JSON.stringify(emailAndPass))
    } else if (emailValue !== '1sheraliyev1c@gamil.com' || passValue !== '12345') {
        elAlert.innerHTML = `<strong class="text-danger">Your email or password is wrong!</strong>`
        elAlert.classList.add('alert-danger')
    }
})
