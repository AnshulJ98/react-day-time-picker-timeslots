"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateFns = _interopRequireDefault(require("date-fns"));

var _Icons = require("../Icons");

var _Layout = require("./Layout");

var _WeekDays = require("./WeekDays");

var _MonthDays = require("./MonthDays");

var _MonthPicker = require("./MonthPicker");

var _Calendar = require("./Calendar");

var _generateDays5 = _interopRequireDefault(require("./generate-days"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Root(_ref) {
  var validator = _ref.validator,
      pickDay = _ref.pickDay;

  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = (0, _react.useState)(month),
      _useState4 = _slicedToArray(_useState3, 2),
      fakeMonth = _useState4[0],
      setFakeMonth = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      animation = _useState6[0],
      setAnimation = _useState6[1];

  var _generateDays = (0, _generateDays5["default"])(month),
      _generateDays2 = _slicedToArray(_generateDays, 2),
      startDay = _generateDays2[0],
      days = _generateDays2[1];

  var _generateDays3 = (0, _generateDays5["default"])(fakeMonth),
      _generateDays4 = _slicedToArray(_generateDays3, 2),
      fakeStartDay = _generateDays4[0],
      fakeDays = _generateDays4[1];

  var isAnimating = !!animation; // Handlers

  var handleNextMonth = function handleNextMonth() {
    if (isAnimating) {
      return;
    }

    var next = _dateFns["default"].addMonths(month, 1);

    setMonth(next);
    setAnimation('next');
  };

  var handlePrevMonth = function handlePrevMonth() {
    if (isAnimating) {
      return;
    }

    var prev = _dateFns["default"].subMonths(month, 1);

    setMonth(prev);
    setAnimation('prev');
  };

  var handleAnimationEnd = function handleAnimationEnd() {
    var newFakeMonth = animation === 'prev' ? _dateFns["default"].subMonths(fakeMonth, 1) : _dateFns["default"].addMonths(fakeMonth, 1);
    setFakeMonth(newFakeMonth);
    setAnimation('');
  };

  var handlePickDay = function handlePickDay(day) {
    if (isAnimating) {
      return;
    }

    pickDay(day);
  };

  return /*#__PURE__*/_react["default"].createElement(_Layout.Grid, null, /*#__PURE__*/_react["default"].createElement(_Layout.MonthYear, null, /*#__PURE__*/_react["default"].createElement(_MonthPicker.MonthPicker, null, /*#__PURE__*/_react["default"].createElement(_MonthPicker.PrevMonth, {
    disabled: isAnimating,
    onClick: handlePrevMonth
  }, /*#__PURE__*/_react["default"].createElement(_Icons.PrevIcon, null)), /*#__PURE__*/_react["default"].createElement(_Layout.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_MonthPicker.CurrentMonth, {
    animation: animation
  }, _dateFns["default"].format(month, 'MMMM YYYY')), /*#__PURE__*/_react["default"].createElement(_MonthPicker.FakeCurrentMonth, {
    animation: animation
  }, _dateFns["default"].format(fakeMonth, 'MMMM YYYY'))), /*#__PURE__*/_react["default"].createElement(_MonthPicker.NextMonth, {
    disabled: isAnimating,
    onClick: handleNextMonth
  }, /*#__PURE__*/_react["default"].createElement(_Icons.NextIcon, null)))), /*#__PURE__*/_react["default"].createElement(_Layout.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, {
    animation: animation,
    onAnimationEnd: handleAnimationEnd
  }, /*#__PURE__*/_react["default"].createElement(_Layout.DaysOfWeek, null, /*#__PURE__*/_react["default"].createElement(_WeekDays.WeekDays, null, _WeekDays.WEEK_DAYS.map(function (weekDay) {
    return /*#__PURE__*/_react["default"].createElement(_WeekDays.WeekDay, {
      key: weekDay
    }, weekDay);
  }))), /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDays, null, days.map(function (day) {
    var isSameMonth = _dateFns["default"].isSameMonth(day, startDay);

    if (!isSameMonth) {
      return /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDay, {
        key: day
      });
    }

    var formatted = _dateFns["default"].format(day, 'D');

    var isToday = _dateFns["default"].isToday(day);

    var isValid = validator ? validator(day) : true;
    return /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDay, {
      key: day,
      isValid: isValid,
      isToday: isToday,
      onClick: function onClick() {
        return isValid && handlePickDay(day);
      }
    }, formatted);
  }))), /*#__PURE__*/_react["default"].createElement(_Calendar.FakeCalendar, {
    animation: animation
  }, /*#__PURE__*/_react["default"].createElement(_Layout.DaysOfWeek, null, /*#__PURE__*/_react["default"].createElement(_WeekDays.WeekDays, null, _WeekDays.WEEK_DAYS.map(function (weekDay) {
    return /*#__PURE__*/_react["default"].createElement(_WeekDays.WeekDay, {
      key: weekDay
    }, weekDay);
  }))), /*#__PURE__*/_react["default"].createElement(_Layout.DaysOfMonth, null, /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDays, null, fakeDays.map(function (fakeDay) {
    var isSameMonth = _dateFns["default"].isSameMonth(fakeDay, fakeStartDay);

    if (!isSameMonth) {
      return /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDay, {
        key: fakeDay
      });
    }

    var formatted = _dateFns["default"].format(fakeDay, 'D');

    var isToday = _dateFns["default"].isToday(fakeDay);

    var isValid = validator ? validator(fakeDay) : true;
    return /*#__PURE__*/_react["default"].createElement(_MonthDays.MonthDay, {
      key: fakeDay,
      disabled: !isSameMonth,
      isValid: isValid,
      isToday: isToday
    }, formatted);
  }))))));
}

Root.propTypes = {
  validator: _propTypes["default"].func,
  pickDay: _propTypes["default"].func.isRequired
};
var _default = Root;
exports["default"] = _default;