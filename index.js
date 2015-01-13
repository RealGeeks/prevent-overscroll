'use strict';

module.exports = function (element) {
  function onTouchstart() {
    var scrollTop = element.scrollTop;

    // If the view is scrolled all the way to the top or bottom, scroll down
    // or up by 1 pixel to prevent the scroll from reaching the body.
    if (scrollTop == 0) {
      element.scrollTop = 1;
    } else if (scrollTop + element.offsetHeight == element.scrollHeight) {
      element.scrollTop = scrollTop - 1;
    }
  }

  element.addEventListener('touchstart', onTouchstart);

  return function () {
    element.removeEventListener('touchstart', onTouchstart);
  };
};
