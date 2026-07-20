// Loads sidebar.html into both sidebar slots on every page.
// Image paths in sidebar.html use ./assets/... which works from root.
// For pages in subdirectories this would need adjustment, but all pages
// are currently at root level so this is fine.
(function () {
  var slots = document.querySelectorAll('.sidebar-slot');
  if (!slots.length) return;
  fetch('./sidebar.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      slots.forEach(function (slot) { slot.innerHTML = html; });
    });
})();
