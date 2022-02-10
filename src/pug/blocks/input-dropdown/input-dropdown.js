const $drops = $('.js-input_dropdown');
[...$drops].forEach((drop) => {initDropOption(drop)})

function initDropOption(drop){
  $(drop).on('click', showDrop);
}