var showForm = document.getElementById('show-form');
var hotelsForm = document.querySelector('.hotel-search-form');

showForm.addEventListener('click', function () {
  hotelsForm.classList.toggle('hide-form')
});


var mathButtons = document.querySelectorAll('button[name="plus"], button[name="minus"]');
var children = document.getElementById('children');
var adults = document.getElementById('adults');

var mathFunction = function (button) {
  button.addEventListener('click', function () {
    if (button.previousElementSibling === children || button.previousElementSibling === adults) {
    if (button.previousElementSibling === children) {
      children.value++;
    }
    if (button.previousElementSibling === adults) {
      adults.value++;
    }
  }
  if (button.nextElementSibling === children || button.nextElementSibling === adults) {
  if (button.nextElementSibling === children) {
    if (children.value > 0) {
    children.value--;
  }
  }
  if (button.nextElementSibling === adults) {
    if (adults.value > 1) {
    adults.value--;
  }
  }
}
  })
}

for (var i = 0; i < mathButtons.length; i++) {
  mathFunction(mathButtons[i]);
}
