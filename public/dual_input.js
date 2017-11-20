(function() {
  ['text', 'drawing'].forEach(function(mode) {
    var button = document.getElementsByClassName('js-' + mode + '-button')[0];
    button.addEventListener('click', function(e) {
      e.preventDefault();
      var otherButton = e.target.nextElementSibling || e.target.previousElementSibling;
      var otherMode = mode === 'text' ? 'drawing' : 'text';
      var input = e.target.parentNode.parentNode.getElementsByClassName('js-' + mode + '-input')[0];
      var otherInput = e.target.parentNode.parentNode.getElementsByClassName('js-' + otherMode + '-input')[0];

      input.classList.remove('dn');
      otherInput.classList.add('dn');

      e.target.classList.add('secondary-background--overlay', 'active-tab');
      e.target.classList.remove('secondary-background--solid');

      otherButton.classList.add('secondary-background--solid');
      otherButton.classList.remove('secondary-background--overlay', 'active-tab');
    });
  });

})();
