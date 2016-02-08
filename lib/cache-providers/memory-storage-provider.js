'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MemoryStorageProvider = function () {
  function MemoryStorageProvider() {
    _classCallCheck(this, MemoryStorageProvider);

    this.type = 'memory';
    this.cache = {};
  }

  _createClass(MemoryStorageProvider, [{
    key: 'get',
    value: function get(key) {
      return this.cache[key];
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this.cache[key] = value;
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      delete this.cache[key];
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.cache = {};
    }
  }], [{
    key: 'isSupported',
    value: function isSupported() {
      return true;
    }
  }]);

  return MemoryStorageProvider;
}();

exports.default = MemoryStorageProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS1wcm92aWRlcnMvbWVtb3J5LXN0b3JhZ2UtcHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNO0FBQ0osV0FESSxxQkFDSixHQUFjOzBCQURWLHVCQUNVOztBQUNaLFNBQUssSUFBTCxHQUFZLFFBQVosQ0FEWTtBQUVaLFNBQUssS0FBTCxHQUFhLEVBQWIsQ0FGWTtHQUFkOztlQURJOzt3QkFVQSxLQUFLO0FBQ1AsYUFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQVAsQ0FETzs7Ozt3QkFJTCxLQUFLLE9BQU87QUFDZCxXQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEtBQWxCLENBRGM7Ozs7MkJBSVQsS0FBSztBQUNWLGFBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFQLENBRFU7Ozs7NEJBSUo7QUFDTixXQUFLLEtBQUwsR0FBYSxFQUFiLENBRE07Ozs7a0NBaEJhO0FBQ25CLGFBQU8sSUFBUCxDQURtQjs7OztTQU5qQjs7O2tCQTJCUyIsImZpbGUiOiJtZW1vcnktc3RvcmFnZS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lbW9yeVN0b3JhZ2VQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHlwZSA9ICdtZW1vcnknO1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5jYWNoZVtrZXldO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbW9yeVN0b3JhZ2VQcm92aWRlcjtcbiJdfQ==