'use strict';

var test = require('tape');
var sinon = require('sinon');
var preventOverscroll = require('./');

var element = {
  addEventListener: sinon.spy(),
  removeEventListener: sinon.spy(),
  scrollTop: 0,
  offsetHeight: 100,
  scrollHeight: 200
};

test('Prevent Overscroll', function (assert) {
  assert.plan(6);

  var remove = preventOverscroll(element);
  var listener = element.addEventListener.getCall(0).args[1];

  assert.ok(
    element.addEventListener.calledWithExactly('scroll', listener),
    'adds scroll event listener'
  );

  assert.equals(
    element.scrollTop, 1, 'scrolls down 1px on init'
  );

  element.scrollTop = 0;
  listener();

  assert.equals(element.scrollTop, 1, 'scrolls down 1px');

  listener();

  assert.equals(element.scrollTop, 1, 'keeps scroll position');

  element.scrollTop = 100;
  listener();

  assert.equals(element.scrollTop, 99, 'scrolls up 1px');

  remove();

  assert.ok(
    element.removeEventListener.calledWithExactly('scroll', listener),
    'removes scroll event listener'
  );
});
