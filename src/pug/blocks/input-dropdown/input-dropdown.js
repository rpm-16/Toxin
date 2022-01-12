export showDropdown();

alert('hi');
// document.getElementByClassName('input-dropdown__input').background='red';
function myFunction(obj) {
    var dropdown= document.getElementById("dropdown");
    dropdown.click(); 
  }

  function showDropdown(e) {
    if (!$(e.currentTarget).hasClass('select-counter--expanded')) {
      $(e.currentTarget).addClass('select-counter--expanded');
      $(document).on('click', hideDropdown);
      addChangeEvents($(e.currentTarget))
    }
  }