document.addEventListener('DOMContentLoaded', function () {
  // Toggle the mobile navbar menu.
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      var menu = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      if (menu) menu.classList.toggle('is-active');
    });
  });
});
