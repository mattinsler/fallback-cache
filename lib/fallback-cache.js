'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localStorageProvider = require('./cache-providers/local-storage-provider');

var _localStorageProvider2 = _interopRequireDefault(_localStorageProvider);

var _sessionStorageProvider = require('./cache-providers/session-storage-provider');

var _sessionStorageProvider2 = _interopRequireDefault(_sessionStorageProvider);

var _memoryStorageProvider = require('./cache-providers/memory-storage-provider');

var _memoryStorageProvider2 = _interopRequireDefault(_memoryStorageProvider);

var _nullStorageProvider = require('./cache-providers/null-storage-provider');

var _nullStorageProvider2 = _interopRequireDefault(_nullStorageProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Common caching mechanism with fallback from localStorage -> sessionStorage -> memory
 *
 * options:
 *   - prefix           (default: --fallback-cache--)
 *   - prefixSeparator  (default: |)
 *   - expiration       (optional)
 *   - providers        (default: [LocalStorage, SessionStorage, Memory])
**/

var FallbackCache = function () {
  function FallbackCache() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, FallbackCache);

    // if (options == null) { options = {}; }
    if (!options.prefix) {
      options.prefix = '--fallback-cache--';
    }
    if (!options.prefixSeparator) {
      options.prefixSeparator = '|';
    }

    var providers = options.providers || [_localStorageProvider2.default, _sessionStorageProvider2.default, _memoryStorageProvider2.default];

    this.options = options;
    this.init(providers);
  }

  // moved out so that decorators will work
  // static SECOND = 1000;
  // static MINUTE = FallbackCache.SECOND * 60;
  // static HOUR = FallbackCache.MINUTE * 60;
  // static DAY = FallbackCache.HOUR * 24;
  // static WEEK = FallbackCache.DAY * 7;

  _createClass(FallbackCache, [{
    key: 'init',
    value: function init(providers) {
      for (var x = 0; x < providers.length; ++x) {
        var provider = providers[x];
        if (provider.isSupported()) {
          /* eslint new-cap:0 */
          this.storage = new provider(this.options);
          return;
        }
      }

      this.storage = new _nullStorageProvider2.default(this.options);
    }
  }, {
    key: 'createKey',
    value: function createKey(key) {
      return this.options.prefix + this.options.prefixSeparator + key;
    }
  }, {
    key: 'get',
    value: function get(key) {
      var actualKey = this.createKey(key);

      var data = this.storage.get(actualKey);
      if (!data) {
        return undefined;
      }

      var match = /^([0-9]+)\|(.+)$/.exec(data);
      if (!match) {
        this.storage.remove(actualKey);
        return undefined;
      }

      if (typeof this.options.expiration === 'number') {
        var ts = parseInt(match[1], 10);
        var now = Date.now();
        if (now - ts > this.options.expiration) {
          this.storage.remove(actualKey);
          return undefined;
        }
      }

      return JSON.parse(match[2]);
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      return this.storage.set(this.createKey(key), Date.now() + '|' + JSON.stringify(value));
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      return this.storage.remove(this.createKey(key));
    }
  }, {
    key: 'clear',
    value: function clear() {
      return this.storage.clear();
    }
  }]);

  return FallbackCache;
}();

FallbackCache.Providers = {
  LocalStorage: _localStorageProvider2.default,
  SessionStorage: _sessionStorageProvider2.default,
  Memory: _memoryStorageProvider2.default
};


FallbackCache.SECOND = 1000;
FallbackCache.MINUTE = FallbackCache.SECOND * 60;
FallbackCache.HOUR = FallbackCache.MINUTE * 60;
FallbackCache.DAY = FallbackCache.HOUR * 24;
FallbackCache.WEEK = FallbackCache.DAY * 7;

exports.default = FallbackCache;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mYWxsYmFjay1jYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWNNO0FBQ0osV0FESSxhQUNKLEdBQTBCO1FBQWQsZ0VBQVUsa0JBQUk7OzBCQUR0QixlQUNzQjs7O0FBRXhCLFFBQUksQ0FBQyxRQUFRLE1BQVIsRUFBZ0I7QUFBRSxjQUFRLE1BQVIsR0FBaUIsb0JBQWpCLENBQUY7S0FBckI7QUFDQSxRQUFJLENBQUMsUUFBUSxlQUFSLEVBQXlCO0FBQUUsY0FBUSxlQUFSLEdBQTBCLEdBQTFCLENBQUY7S0FBOUI7O0FBRUEsUUFBTSxZQUFZLFFBQVEsU0FBUixJQUFxQixtR0FBckIsQ0FMTTs7QUFXeEIsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVh3QjtBQVl4QixTQUFLLElBQUwsQ0FBVSxTQUFWLEVBWndCO0dBQTFCOzs7Ozs7Ozs7ZUFESTs7eUJBNkJDLFdBQVc7QUFDZCxXQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxVQUFVLE1BQVYsRUFBa0IsRUFBRSxDQUFGLEVBQUs7QUFDekMsWUFBTSxXQUFXLFVBQVUsQ0FBVixDQUFYLENBRG1DO0FBRXpDLFlBQUksU0FBUyxXQUFULEVBQUosRUFBNEI7O0FBRTFCLGVBQUssT0FBTCxHQUFlLElBQUksUUFBSixDQUFhLEtBQUssT0FBTCxDQUE1QixDQUYwQjtBQUcxQixpQkFIMEI7U0FBNUI7T0FGRjs7QUFTQSxXQUFLLE9BQUwsR0FBZSxrQ0FBd0IsS0FBSyxPQUFMLENBQXZDLENBVmM7Ozs7OEJBYU4sS0FBSztBQUNiLGFBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixLQUFLLE9BQUwsQ0FBYSxlQUFiLEdBQStCLEdBQXJELENBRE07Ozs7d0JBSVgsS0FBSztBQUNQLFVBQU0sWUFBWSxLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQVosQ0FEQzs7QUFHUCxVQUFNLE9BQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixTQUFqQixDQUFQLENBSEM7QUFJUCxVQUFJLENBQUMsSUFBRCxFQUFPO0FBQUUsZUFBTyxTQUFQLENBQUY7T0FBWDs7QUFFQSxVQUFNLFFBQVEsbUJBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQVIsQ0FOQztBQU9QLFVBQUksQ0FBQyxLQUFELEVBQVE7QUFDVixhQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFNBQXBCLEVBRFU7QUFFVixlQUFPLFNBQVAsQ0FGVTtPQUFaOztBQUtBLFVBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxVQUFiLEtBQTZCLFFBQXBDLEVBQThDO0FBQ2hELFlBQU0sS0FBSyxTQUFTLE1BQU0sQ0FBTixDQUFULEVBQW1CLEVBQW5CLENBQUwsQ0FEMEM7QUFFaEQsWUFBTSxNQUFNLEtBQUssR0FBTCxFQUFOLENBRjBDO0FBR2hELFlBQUksR0FBQyxHQUFNLEVBQU4sR0FBWSxLQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQXlCO0FBQ3hDLGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEIsRUFEd0M7QUFFeEMsaUJBQU8sU0FBUCxDQUZ3QztTQUExQztPQUhGOztBQVNBLGFBQU8sS0FBSyxLQUFMLENBQVcsTUFBTSxDQUFOLENBQVgsQ0FBUCxDQXJCTzs7Ozt3QkF3QkwsS0FBSyxPQUFPO0FBQ2QsYUFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBakIsRUFBeUMsS0FBSyxHQUFMLFdBQWMsS0FBSyxTQUFMLENBQWUsS0FBZixDQUF2RCxDQUFQLENBRGM7Ozs7MkJBSVQsS0FBSztBQUNWLGFBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQXBCLENBQVAsQ0FEVTs7Ozs0QkFJSjtBQUNOLGFBQU8sS0FBSyxPQUFMLENBQWEsS0FBYixFQUFQLENBRE07Ozs7U0E5RUo7OztjQXVCRyxZQUFZO0FBQ2pCLDhDQURpQjtBQUVqQixrREFGaUI7QUFHakIseUNBSGlCOzs7O0FBNERyQixjQUFjLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxjQUFjLE1BQWQsR0FBdUIsY0FBYyxNQUFkLEdBQXVCLEVBQXZCO0FBQ3ZCLGNBQWMsSUFBZCxHQUFxQixjQUFjLE1BQWQsR0FBdUIsRUFBdkI7QUFDckIsY0FBYyxHQUFkLEdBQW9CLGNBQWMsSUFBZCxHQUFxQixFQUFyQjtBQUNwQixjQUFjLElBQWQsR0FBcUIsY0FBYyxHQUFkLEdBQW9CLENBQXBCOztrQkFFTiIsImZpbGUiOiJmYWxsYmFjay1jYWNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbFN0b3JhZ2VQcm92aWRlciBmcm9tICcuL2NhY2hlLXByb3ZpZGVycy9sb2NhbC1zdG9yYWdlLXByb3ZpZGVyJztcbmltcG9ydCBTZXNzaW9uU3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vY2FjaGUtcHJvdmlkZXJzL3Nlc3Npb24tc3RvcmFnZS1wcm92aWRlcic7XG5pbXBvcnQgTWVtb3J5U3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vY2FjaGUtcHJvdmlkZXJzL21lbW9yeS1zdG9yYWdlLXByb3ZpZGVyJztcbmltcG9ydCBOdWxsU3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vY2FjaGUtcHJvdmlkZXJzL251bGwtc3RvcmFnZS1wcm92aWRlcic7XG5cbi8qKlxuICogQ29tbW9uIGNhY2hpbmcgbWVjaGFuaXNtIHdpdGggZmFsbGJhY2sgZnJvbSBsb2NhbFN0b3JhZ2UgLT4gc2Vzc2lvblN0b3JhZ2UgLT4gbWVtb3J5XG4gKlxuICogb3B0aW9uczpcbiAqICAgLSBwcmVmaXggICAgICAgICAgIChkZWZhdWx0OiAtLWZhbGxiYWNrLWNhY2hlLS0pXG4gKiAgIC0gcHJlZml4U2VwYXJhdG9yICAoZGVmYXVsdDogfClcbiAqICAgLSBleHBpcmF0aW9uICAgICAgIChvcHRpb25hbClcbiAqICAgLSBwcm92aWRlcnMgICAgICAgIChkZWZhdWx0OiBbTG9jYWxTdG9yYWdlLCBTZXNzaW9uU3RvcmFnZSwgTWVtb3J5XSlcbioqL1xuY2xhc3MgRmFsbGJhY2tDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIGlmIChvcHRpb25zID09IG51bGwpIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCFvcHRpb25zLnByZWZpeCkgeyBvcHRpb25zLnByZWZpeCA9ICctLWZhbGxiYWNrLWNhY2hlLS0nOyB9XG4gICAgaWYgKCFvcHRpb25zLnByZWZpeFNlcGFyYXRvcikgeyBvcHRpb25zLnByZWZpeFNlcGFyYXRvciA9ICd8JzsgfVxuXG4gICAgY29uc3QgcHJvdmlkZXJzID0gb3B0aW9ucy5wcm92aWRlcnMgfHwgW1xuICAgICAgTG9jYWxTdG9yYWdlUHJvdmlkZXIsXG4gICAgICBTZXNzaW9uU3RvcmFnZVByb3ZpZGVyLFxuICAgICAgTWVtb3J5U3RvcmFnZVByb3ZpZGVyXG4gICAgXTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5pbml0KHByb3ZpZGVycyk7XG4gIH1cblxuICAvLyBtb3ZlZCBvdXQgc28gdGhhdCBkZWNvcmF0b3JzIHdpbGwgd29ya1xuICAvLyBzdGF0aWMgU0VDT05EID0gMTAwMDtcbiAgLy8gc3RhdGljIE1JTlVURSA9IEZhbGxiYWNrQ2FjaGUuU0VDT05EICogNjA7XG4gIC8vIHN0YXRpYyBIT1VSID0gRmFsbGJhY2tDYWNoZS5NSU5VVEUgKiA2MDtcbiAgLy8gc3RhdGljIERBWSA9IEZhbGxiYWNrQ2FjaGUuSE9VUiAqIDI0O1xuICAvLyBzdGF0aWMgV0VFSyA9IEZhbGxiYWNrQ2FjaGUuREFZICogNztcblxuICBzdGF0aWMgUHJvdmlkZXJzID0ge1xuICAgIExvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlUHJvdmlkZXIsXG4gICAgU2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlUHJvdmlkZXIsXG4gICAgTWVtb3J5OiBNZW1vcnlTdG9yYWdlUHJvdmlkZXJcbiAgfTtcblxuICBpbml0KHByb3ZpZGVycykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgcHJvdmlkZXJzLmxlbmd0aDsgKyt4KSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IHByb3ZpZGVyc1t4XTtcbiAgICAgIGlmIChwcm92aWRlci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIC8qIGVzbGludCBuZXctY2FwOjAgKi9cbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IHByb3ZpZGVyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTnVsbFN0b3JhZ2VQcm92aWRlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlS2V5KGtleSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucHJlZml4ICsgdGhpcy5vcHRpb25zLnByZWZpeFNlcGFyYXRvciArIGtleTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBjb25zdCBhY3R1YWxLZXkgPSB0aGlzLmNyZWF0ZUtleShrZXkpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXQoYWN0dWFsS2V5KTtcbiAgICBpZiAoIWRhdGEpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSAvXihbMC05XSspXFx8KC4rKSQvLmV4ZWMoZGF0YSk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShhY3R1YWxLZXkpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mKHRoaXMub3B0aW9ucy5leHBpcmF0aW9uKSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHRzID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICBpZiAoKG5vdyAtIHRzKSA+IHRoaXMub3B0aW9ucy5leHBpcmF0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoYWN0dWFsS2V5KTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShtYXRjaFsyXSk7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuY3JlYXRlS2V5KGtleSksIGAke0RhdGUubm93KCl9fCR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UucmVtb3ZlKHRoaXMuY3JlYXRlS2V5KGtleSkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xuICB9XG59XG5cbkZhbGxiYWNrQ2FjaGUuU0VDT05EID0gMTAwMDtcbkZhbGxiYWNrQ2FjaGUuTUlOVVRFID0gRmFsbGJhY2tDYWNoZS5TRUNPTkQgKiA2MDtcbkZhbGxiYWNrQ2FjaGUuSE9VUiA9IEZhbGxiYWNrQ2FjaGUuTUlOVVRFICogNjA7XG5GYWxsYmFja0NhY2hlLkRBWSA9IEZhbGxiYWNrQ2FjaGUuSE9VUiAqIDI0O1xuRmFsbGJhY2tDYWNoZS5XRUVLID0gRmFsbGJhY2tDYWNoZS5EQVkgKiA3O1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsYmFja0NhY2hlO1xuIl19