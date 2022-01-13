block1.addEventListener("focus", showDropdown);
// block1.addEventListener("blur", hideDropdown);

function showDropdown(){
  dropdown.classList.add('expanded');
  dropdown.style.display = 'block';
  block1.classList.add('br');
}

function hideDropdown(){
  dropdown.classList.remove('expanded');
  dropdown.style.display = 'none';
}