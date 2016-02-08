'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NullStorageProvider = function () {
  function NullStorageProvider() {
    _classCallCheck(this, NullStorageProvider);

    this.type = 'null';
  }

  _createClass(NullStorageProvider, [{
    key: 'get',
    value: function get() {
      return;
    }
  }, {
    key: 'set',
    value: function set() {}
  }, {
    key: 'remove',
    value: function remove() {}
  }, {
    key: 'clear',
    value: function clear() {}
  }], [{
    key: 'isSupported',
    value: function isSupported() {
      return true;
    }
  }]);

  return NullStorageProvider;
}();

exports.default = NullStorageProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS1wcm92aWRlcnMvbnVsbC1zdG9yYWdlLXByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTTtBQUNKLFdBREksbUJBQ0osR0FBYzswQkFEVixxQkFDVTs7QUFDWixTQUFLLElBQUwsR0FBWSxNQUFaLENBRFk7R0FBZDs7ZUFESTs7MEJBU0U7QUFDSixhQURJOzs7OzBCQUlBOzs7NkJBSUc7Ozs0QkFJRDs7O2tDQWhCYTtBQUNuQixhQUFPLElBQVAsQ0FEbUI7Ozs7U0FMakI7OztrQkEwQlMiLCJmaWxlIjoibnVsbC1zdG9yYWdlLXByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTnVsbFN0b3JhZ2VQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9ICdudWxsJztcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZXQoKSB7XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcblxuICB9XG5cbiAgY2xlYXIoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsU3RvcmFnZVByb3ZpZGVyO1xuIl19