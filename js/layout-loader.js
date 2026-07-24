// Shared two-column page shell (sidebar box on the left, content box on
// the right) used by About, Publications, Portfolio, and Misc.
// Each page just provides <div id="page-content">...unique content...</div>;
// this script wraps it in the shell before sidebar-loader.js fills in the
// sidebar boxes. Must run (via <script>) before sidebar-loader.js.
//
// On mobile the left sidebar box is hidden by default (site.css) and only
// reappears if the page opts in via data-mobile-sidebar="before" on
// #page-content, in which case it's shown above the content instead of the
// desktop's side-by-side layout.
(function () {
  var content = document.getElementById('page-content');
  if (!content) return;

  var mobileSidebarMode = content.getAttribute('data-mobile-sidebar');

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
        '</div>' +
      '</div>' +
    '</div>';

  content.parentNode.insertBefore(wrapper, content);
  content.parentNode.removeChild(content);
  var contentColumn = wrapper.querySelector('.content-column');
  contentColumn.querySelector('.page-content-slot').replaceWith(content);

  if (mobileSidebarMode === 'before') {
    var mobileSidebar = document.createElement('div');
    mobileSidebar.className = 'sidebar-on-mobile';
    mobileSidebar.innerHTML = '<div class="sidebar-slot"></div>';
    contentColumn.insertBefore(mobileSidebar, content);
  }
})();
