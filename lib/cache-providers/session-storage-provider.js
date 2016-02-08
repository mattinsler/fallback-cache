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

var SessionStorageProvider = function (_Html5StorageProvider) {
  _inherits(SessionStorageProvider, _Html5StorageProvider);

  function SessionStorageProvider(options) {
    _classCallCheck(this, SessionStorageProvider);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SessionStorageProvider).call(this, 'sessionStorage', options));
  }

  _createClass(SessionStorageProvider, null, [{
    key: 'isSupported',
    value: function isSupported() {
      return _html5StorageProvider2.default.isSupported('sessionStorage');
    }
  }]);

  return SessionStorageProvider;
}(_html5StorageProvider2.default);

exports.default = SessionStorageProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS1wcm92aWRlcnMvc2Vzc2lvbi1zdG9yYWdlLXByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksc0JBQ0osQ0FBWSxPQUFaLEVBQXFCOzBCQURqQix3QkFDaUI7O2tFQURqQixtQ0FFSSxrQkFBa0IsVUFETDtHQUFyQjs7ZUFESTs7a0NBS2lCO0FBQ25CLGFBQU8sK0JBQXFCLFdBQXJCLENBQWlDLGdCQUFqQyxDQUFQLENBRG1COzs7O1NBTGpCOzs7a0JBVVMiLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLXByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0bWw1U3RvcmFnZVByb3ZpZGVyIGZyb20gJy4vaHRtbDUtc3RvcmFnZS1wcm92aWRlcic7XG5cbmNsYXNzIFNlc3Npb25TdG9yYWdlUHJvdmlkZXIgZXh0ZW5kcyBIdG1sNVN0b3JhZ2VQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcignc2Vzc2lvblN0b3JhZ2UnLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gSHRtbDVTdG9yYWdlUHJvdmlkZXIuaXNTdXBwb3J0ZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblN0b3JhZ2VQcm92aWRlcjtcbiJdfQ==