# prevent-overscroll
JavaScript library to prevent scrollable elements from scrolling the entire body on iOS.

## Usage

```js
var preventOverscroll = require('prevent-overscroll');

// Prevent someDOMNode from scrolling the body
var cleanup = preventOverscroll(someDOMNode);

// Call cleanup if you remove someDOMNode or want to re-enable overscrolling.
cleanup();
```
