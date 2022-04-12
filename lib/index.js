"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateFns = _interopRequireDefault(require("date-fns"));

var _styledComponents = require("styled-components");

var _Popup = require("./Popup");

var _Confirm = require("./Confirm");

var _Icons = require("./Icons");

var _Feedback = require("./Feedback");

var _calendar = _interopRequireDefault(require("./calendar"));

var _timeSlots = _interopRequireDefault(require("./time-slots"));

var _validators = require("./validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DayTimePicker(_ref) {
  var timeSlotValidator = _ref.timeSlotValidator,
      timeSlotSizeMinutes = _ref.timeSlotSizeMinutes,
      isLoading = _ref.isLoading,
      isDone = _ref.isDone,
      err = _ref.err,
      onConfirm = _ref.onConfirm,
      confirmText = _ref.confirmText,
      loadingText = _ref.loadingText,
      doneText = _ref.doneText,
      theme = _ref.theme;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      pickedDay = _useState2[0],
      setPickedDay = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      pickedTime = _useState4[0],
      setPickedTime = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showPickTime = _useState6[0],
      setShowPickTime = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showConfirm = _useState8[0],
      setShowConfirm = _useState8[1];

  var handlePickDay = function handlePickDay(day) {
    setPickedDay(day);
    setShowPickTime(true);
  };

  var handlePickTime = function handlePickTime(time) {
    setPickedTime(time);
    setShowPickTime(false);
    setShowConfirm(true);
  };

  var handleClosePickTime = function handleClosePickTime() {
    setShowPickTime(false);
  };

  var handleConfirm = function handleConfirm() {
    onConfirm(pickedTime);
  };

  var handleCloseConfirm = function handleCloseConfirm() {
    setShowConfirm(false);
    setShowPickTime(true);
  };

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_Popup.PopupWrapper, null, /*#__PURE__*/_react["default"].createElement(_calendar["default"], {
    validator: _validators.preventPastDays,
    pickDay: handlePickDay
  }), showPickTime && /*#__PURE__*/_react["default"].createElement(_Popup.Popup, null, /*#__PURE__*/_react["default"].createElement(_Popup.PopupHeader, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Icons.DayIcon, null), " ", _dateFns["default"].format(pickedDay, 'dddd, MMMM Do, YYYY')), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Popup.PopupClose, {
    onClick: handleClosePickTime
  }, "Go Back"))), /*#__PURE__*/_react["default"].createElement(_timeSlots["default"], {
    pickedDay: pickedDay,
    slotSizeMinutes: 120,
    validator: timeSlotValidator,
    pickTime: handlePickTime
  })), showConfirm && /*#__PURE__*/_react["default"].createElement(_Popup.Popup, null, /*#__PURE__*/_react["default"].createElement(_Popup.PopupHeader, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Icons.DayIcon, null), " ", _dateFns["default"].format(pickedTime, 'dddd, MMMM Do, YYYY')), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Icons.ClockIcon, null), " ", _dateFns["default"].format(pickedTime, 'HH:mm'), '-', pickedTime.getHours() + 2 == 24 ? '00' : pickedTime.getHours() + 2, ':00'), !isDone && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Popup.PopupClose, {
    disabled: isLoading,
    onClick: handleCloseConfirm
  }, "Go Back"))), !isDone ? /*#__PURE__*/_react["default"].createElement(_Confirm.ConfirmButton, {
    disabled: isLoading,
    onClick: handleConfirm
  }, isLoading ? loadingText : confirmText) : doneText ? /*#__PURE__*/_react["default"].createElement(_Feedback.Success, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Icons.SuccessIcon, null), " ", doneText)) : null, err && /*#__PURE__*/_react["default"].createElement(_Feedback.Failed, null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_Icons.FailedIcon, null), " ", err)))));
}

DayTimePicker.propTypes = {
  timeSlotValidator: _propTypes["default"].func,
  timeSlotSizeMinutes: _propTypes["default"].number.isRequired,
  isLoading: _propTypes["default"].bool.isRequired,
  isDone: _propTypes["default"].bool.isRequired,
  err: _propTypes["default"].string,
  onConfirm: _propTypes["default"].func.isRequired,
  confirmText: _propTypes["default"].string,
  loadingText: _propTypes["default"].string,
  doneText: _propTypes["default"].string,
  theme: _propTypes["default"].shape({
    primary: _propTypes["default"].string,
    secondary: _propTypes["default"].string,
    background: _propTypes["default"].string,
    buttons: _propTypes["default"].shape({
      disabled: _propTypes["default"].shape({
        color: _propTypes["default"].string,
        background: _propTypes["default"].string
      }),
      confirm: _propTypes["default"].shape({
        color: _propTypes["default"].string,
        background: _propTypes["default"].string,
        hover: _propTypes["default"].shape({
          color: _propTypes["default"].string,
          background: _propTypes["default"].string
        })
      })
    })
  })
};
DayTimePicker.defaultProps = {
  confirmText: 'Schedule',
  loadingText: 'Scheduling..',
  doneText: 'Your event has been scheduled!',
  theme: {
    primary: '#3a9ad9',
    secondary: '#f0f0f0',
    background: '#fff',
    buttons: {
      disabled: {
        color: '#333',
        background: '#dfdfdf'
      },
      confirm: {
        color: '#fff',
        background: '#3a9ad9',
        hover: {
          color: '',
          background: '#3a9ad9d6'
        }
      }
    },
    feedback: {
      success: {
        color: '#29aba4'
      },
      failed: {
        color: '#eb7260'
      }
    }
  }
};
var _default = DayTimePicker;
exports["default"] = _default;