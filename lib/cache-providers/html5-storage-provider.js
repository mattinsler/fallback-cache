'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Html5StorageProvider = function () {
  function Html5StorageProvider(type) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Html5StorageProvider);

    if (!options.prefix) {
      throw new Error('Html5StorageProvider requires prefix option.');
    }
    if (!options.prefixSeparator) {
      throw new Error('Html5StorageProvider requires prefixSeparator option.');
    }

    this.storage = window[type];
    this.type = type;
    this.options = options;
  }

  _createClass(Html5StorageProvider, [{
    key: 'get',
    value: function get(key) {
      return this.storage.getItem(key);
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this.storage.setItem(key, value);
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      this.storage.removeItem(key);
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this = this;

      var keys = Object.keys(this.storage);
      var prefix = this.options.prefix + this.options.prefixSeparator;

      keys.forEach(function (key) {
        if (prefix === key.slice(0, prefix.length)) {
          _this.remove(key);
        }
      });
    }
  }], [{
    key: 'isSupported',
    value: function isSupported(type) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
      try {
        var storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (err) {
        return false;
      }
    }
  }]);

  return Html5StorageProvider;
}();

exports.default = Html5StorageProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS1wcm92aWRlcnMvaHRtbDUtc3RvcmFnZS1wcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDSixXQURJLG9CQUNKLENBQVksSUFBWixFQUFnQztRQUFkLGdFQUFVLGtCQUFJOzswQkFENUIsc0JBQzRCOztBQUM5QixRQUFJLENBQUMsUUFBUSxNQUFSLEVBQWdCO0FBQ25CLFlBQU0sSUFBSSxLQUFKLENBQVUsOENBQVYsQ0FBTixDQURtQjtLQUFyQjtBQUdBLFFBQUksQ0FBQyxRQUFRLGVBQVIsRUFBeUI7QUFDNUIsWUFBTSxJQUFJLEtBQUosQ0FBVSx1REFBVixDQUFOLENBRDRCO0tBQTlCOztBQUlBLFNBQUssT0FBTCxHQUFlLE9BQU8sSUFBUCxDQUFmLENBUjhCO0FBUzlCLFNBQUssSUFBTCxHQUFZLElBQVosQ0FUOEI7QUFVOUIsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVY4QjtHQUFoQzs7ZUFESTs7d0JBMkJBLEtBQUs7QUFDUCxhQUFPLEtBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsR0FBckIsQ0FBUCxDQURPOzs7O3dCQUlMLEtBQUssT0FBTztBQUNkLFdBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUIsRUFEYzs7OzsyQkFJVCxLQUFLO0FBQ1YsV0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixHQUF4QixFQURVOzs7OzRCQUlKOzs7QUFDTixVQUFNLE9BQU8sT0FBTyxJQUFQLENBQVksS0FBSyxPQUFMLENBQW5CLENBREE7QUFFTixVQUFNLFNBQVMsS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixLQUFLLE9BQUwsQ0FBYSxlQUFiLENBRi9COztBQUlOLFdBQUssT0FBTCxDQUFhLFVBQUMsR0FBRCxFQUFTO0FBQ3BCLFlBQUksV0FBVyxJQUFJLEtBQUosQ0FBVSxDQUFWLEVBQWEsT0FBTyxNQUFQLENBQXhCLEVBQXdDO0FBQzFDLGdCQUFLLE1BQUwsQ0FBWSxHQUFaLEVBRDBDO1NBQTVDO09BRFcsQ0FBYixDQUpNOzs7O2dDQXpCVyxNQUFNOztBQUV2QixVQUFJO0FBQ0YsWUFBTSxVQUFVLE9BQU8sSUFBUCxDQUFWLENBREo7QUFFRixZQUFNLElBQUksa0JBQUosQ0FGSjtBQUdGLGdCQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFIRTtBQUlGLGdCQUFRLFVBQVIsQ0FBbUIsQ0FBbkIsRUFKRTtBQUtGLGVBQU8sSUFBUCxDQUxFO09BQUosQ0FNRSxPQUFPLEdBQVAsRUFBWTtBQUNaLGVBQU8sS0FBUCxDQURZO09BQVo7Ozs7U0F0QkE7OztrQkFtRFMiLCJmaWxlIjoiaHRtbDUtc3RvcmFnZS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEh0bWw1U3RvcmFnZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFvcHRpb25zLnByZWZpeCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIdG1sNVN0b3JhZ2VQcm92aWRlciByZXF1aXJlcyBwcmVmaXggb3B0aW9uLicpO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMucHJlZml4U2VwYXJhdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0h0bWw1U3RvcmFnZVByb3ZpZGVyIHJlcXVpcmVzIHByZWZpeFNlcGFyYXRvciBvcHRpb24uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCh0eXBlKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYl9TdG9yYWdlX0FQSS9Vc2luZ190aGVfV2ViX1N0b3JhZ2VfQVBJXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3RvcmFnZSk7XG4gICAgY29uc3QgcHJlZml4ID0gdGhpcy5vcHRpb25zLnByZWZpeCArIHRoaXMub3B0aW9ucy5wcmVmaXhTZXBhcmF0b3I7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHByZWZpeCA9PT0ga2V5LnNsaWNlKDAsIHByZWZpeC5sZW5ndGgpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHRtbDVTdG9yYWdlUHJvdmlkZXI7XG4iXX0=