<<<<<<< HEAD
let dropdown_toggles = document.querySelectorAll('.input-dropdown-group__input');

for (let i = 0; i < dropdown_toggles.length; i++) {

    dropdown_toggles[i].addEventListener('focus', (e) => {
        e.preventDefault(); 
        event.target.parentElement.nextElementSibling.classList.toggle('expanded')}
    );
}

// const options = document.getElementsByClass('input-dropdown-group__options__controls');
const buttons = document.getElementsByTagName('button');
// // buttons.forEach( (button) => {button.style.background ='red'})   

[...buttons].forEach((button) => addEventListener('click', handler));



function handler() {
  action = event.target.getAttribute('data-action')
  switch (action) {
    case 'delGuest':
      event.target.nextElementSibling.innerHTML = parseInt(event.target.nextElementSibling.innerHTML) - 1;
      if (parseInt(event.target.nextElementSibling.innerHTML) <= 0) {
        event.target.setAttribute('disabled', 'disabled');
        event.target.nextElementSibling('button').removeAttribute('disabled');
      } 
    break;
    case 'addGuest':
      event.target.previousElementSibling.innerHTML = parseInt(event.target.previousElementSibling.innerHTML) + 1;
      if (parseInt(event.target.previousElementSibling.innerHTML) >= 5) {
        event.target.setAttribute('disabled', 'disabled');
        event.target.previousElementSibling('button').removeAttribute('disabled');
      } 
    break;
    case 'clear':
      let arr = document.getElementsByClassName('input-dropdown-group__options__itemcount');
      for (let item of arr) {
        item.innerHTML = 0;
      }
    break;
    case 'submit':
      let arr_list = document.getElementsByClassName('input-dropdown-group__options__itemcount');
      let numberGuests = 0;
      for (let item of arr_list) {
        numberGuests += Number(item.innerText);          
        }
      
      block1.value = numberGuests + " гостей";    
      hideDropdown();
    break;
  }
=======
drop1.addEventListener("focus", showDrop);
// drop1.addEventListener("blur", hideDrop);

// drop1.css.background = 'yellow';
// function snowDropdown() {
//   alert('go');
// }

function showDrop() {
  document.getElementById('dropdown').classList.add("expanded");
>>>>>>> main
}