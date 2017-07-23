var form = document.forms[0],
    user = form.elements.username,
    pass = form.elements.password;
var regExpU = /^[a-z0-9]{2,15}$/;
var regExpP = /^[a-z0-9$#]{6,15}$/;


form.addEventListener('submit', function (event) {
    event.preventDefault();
})

function onClickSave() {
    if (regExpU.test(user.value) && regExpP.test(pass.value) && typeof localStorage !== 'underfined') {
        localStorage.setItem(user.value.toString(), pass.value);
    } else if (regExpU.test(user.value) && regExpP.test(pass.value) && typeof localStorage === 'underfined') {
        document.cookie = user.value + '=' + pass.value;
    } else {
        console.log('wrong username or password');
    }
}
 form__button.addEventListener("click",onClickSave);