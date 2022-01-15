block1.addEventListener("focus", showDropdown);

function showDropdown() {
  dropdown.style.display = 'block';
  block1.classList.add('br');
  }


function handleChangeCount(e) {
    const liElement = $(e.currentTarget).closest('.input-dropdown__item');
    const liIndex = liElement.attr('data-index');
    const countType = $(e.currentTarget).attr('data-action'); // asc | desc
    items[liIndex].count = countType === 'asc' ? items[liIndex].count + 1 : items[liIndex].count - 1;
}