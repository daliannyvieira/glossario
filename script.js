(function() {
  var cards = document.querySelectorAll('.card');
  console.log(cards)

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
      event.preventDefault();

      var target = event.target.getAttribute('data-target');
      var content = document.getElementById(target);

      content.classList.add('is-active');

      var button = content.querySelector('button');
      button.addEventListener('click', function(event) {
        event.preventDefault();
        content.classList.remove('is-active');
      });
    });
  }
})()
