'use strict';

module.exports = function (element) {
  function onScroll() {
    var scrollTop = element.scrollTop;

    // If the view is scrolled all the way to the top or bottom, scroll down
    // or up by 1 pixel to prevent the scroll from reaching the body.
    if (scrollTop == 0) {
      element.scrollTop = 1;
    } else if (scrollTop + element.offsetHeight == element.scrollHeight) {
      element.scrollTop = scrollTop - 1;
    }
  }

  onScroll(); // Init.

  element.addEventListener('scroll', onScroll);

  return function () {
    element.removeEventListener('scroll', onScroll);
  };
};
