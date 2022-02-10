const dropdowns = document.querySelectorAll('.input-dropdown');
dropdowns.forEach((dropdown) => initOptions(dropdown));

function initOptions(element) {
  element.querySelector('input').addEventListener('click', showDropdown);  

  function showDropdown(e) {
    e.stopPropagation();
    e.target.closest('.input-dropdown').querySelector('.input-dropdown__options').classList.add('expanded');
    document.addEventListener('click', hideDropdown)
  }

  function hideDropdown(e) {
    if (!element.contains(e.target)){
      element.querySelector('.input-dropdown__options').classList.remove('expanded'); 
    } 
  }
}