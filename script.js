(function () {
  var printButton = document.getElementById('print-cv');

  if (!printButton) {
    return;
  }

  printButton.addEventListener('click', function () {
    window.print();
  });
})();
