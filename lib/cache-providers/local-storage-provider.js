'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _html5StorageProvider = require('./html5-storage-provider');

var _html5StorageProvider2 = _interopRequireDefault(_html5StorageProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalStorageProvider = function (_Html5StorageProvider) {
  _inherits(LocalStorageProvider, _Html5StorageProvider);

  function LocalStorageProvider(options) {
    _classCallCheck(this, LocalStorageProvider);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LocalStorageProvider).call(this, 'localStorage', options));
  }

  _createClass(LocalStorageProvider, null, [{
    key: 'isSupported',
    value: function isSupported() {
      return _html5StorageProvider2.default.isSupported('localStorage');
    }
  }]);

  return LocalStorageProvider;
}(_html5StorageProvider2.default);

exports.default = LocalStorageProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS1wcm92aWRlcnMvbG9jYWwtc3RvcmFnZS1wcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLG9CQUNKLENBQVksT0FBWixFQUFxQjswQkFEakIsc0JBQ2lCOztrRUFEakIsaUNBRUksZ0JBQWdCLFVBREg7R0FBckI7O2VBREk7O2tDQUtpQjtBQUNuQixhQUFPLCtCQUFxQixXQUFyQixDQUFpQyxjQUFqQyxDQUFQLENBRG1COzs7O1NBTGpCOzs7a0JBVVMiLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdG1sNVN0b3JhZ2VQcm92aWRlciBmcm9tICcuL2h0bWw1LXN0b3JhZ2UtcHJvdmlkZXInO1xuXG5jbGFzcyBMb2NhbFN0b3JhZ2VQcm92aWRlciBleHRlbmRzIEh0bWw1U3RvcmFnZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCdsb2NhbFN0b3JhZ2UnLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gSHRtbDVTdG9yYWdlUHJvdmlkZXIuaXNTdXBwb3J0ZWQoJ2xvY2FsU3RvcmFnZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsU3RvcmFnZVByb3ZpZGVyO1xuIl19