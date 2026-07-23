// Shared two-column page shell (sidebar box on the left, content box on
// the right) used by About, Publications, Portfolio, and Misc.
// Each page just provides <div id="page-content">...unique content...</div>;
// this script wraps it in the shell before sidebar-loader.js fills in the
// sidebar boxes. Must run (via <script>) before sidebar-loader.js.
(function () {
  var content = document.getElementById('page-content');
  if (!content) return;

  var wrapper = document.createElement('div');
  wrapper.className = 'content-wrapper';
  wrapper.innerHTML =
    '<div class="main-container w-container">' +
      '<div class="w-row">' +
        '<div class="w-hidden-small w-hidden-tiny w-col w-col-3">' +
          '<div class="sidebar-slot"></div>' +
        '</div>' +
        '<div class="content-column w-col w-col-9">' +
          '<div class="page-content-slot"></div>' +
          '<div class="sidebar-on-mobile">' +
            '<div class="sidebar-slot"></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  content.parentNode.insertBefore(wrapper, content);
  content.parentNode.removeChild(content);
  wrapper.querySelector('.page-content-slot').replaceWith(content);
})();
