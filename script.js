(function() {
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
      event.preventDefault();

      var target = event.target.getAttribute('data-target');
      var content = document.getElementById(target);

      content.classList.add('is-active');

      var front = content.querySelector('.front');
      var back = content.querySelector('.back');

      setTimeout(function() {
        front.classList.add('front-flipped');
        back.classList.add('back-flipped');
      }, 500)

      var button = content.querySelector('button');
      button.addEventListener('click', function(event) {
        event.preventDefault();

        content.classList.remove('is-active');
        front.classList.remove('front-flipped');
        back.classList.remove('back-flipped');
      });
    });
  }
})()
