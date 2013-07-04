/**
 * Module dependencies
 */

var winlistener = Window.prototype.addEventListener;
var nodelistener = Node.prototype.addEventListener;

/**
 * Export `Spy`
 */

module.exports = Spy;

/**
 * Initialize `Spy`
 *
 * @param {String} type
 * @param {Function} fn
 */

function Spy(type, fn) {
  if (1 == arguments.length) {
    fn = type;
    type = /./;
  }

  type = ('string' == typeof type) ? new RegExp(type) : type;

  Window.prototype.addEventListener = function(t, eventfn) {
    winlistener.call(this, t, function(e) {
      if (!type.test(t)) return eventfn.apply(this, arguments);
      fn.call(this, e, eventfn);
    });
  };

  Node.prototype.addEventListener = function(t, eventfn) {
    nodelistener.call(this, t, function(e) {
      if (!type.test(t)) return eventfn.apply(this, arguments);
      fn.call(this, e, eventfn);
    });
  };

  return {
    destroy: function() {
      Window.prototype.addEventListener = winlistener;
      Node.prototype.addEventListener = nodelistener;
    }
  };
}
