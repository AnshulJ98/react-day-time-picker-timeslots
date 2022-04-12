"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.MonthYear = exports.Grid = exports.DaysOfWeek = exports.DaysOfMonth = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Grid = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n  grid-template-areas:\n    'month-year'\n    'days-of-week'\n    'days-of-month';\n"])));

exports.Grid = Grid;

var MonthYear = _styledComponents["default"].header(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  grid-area: month-year;\n  margin: 1em 0;\n"])));

exports.MonthYear = MonthYear;

var DaysOfWeek = _styledComponents["default"].section(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  grid-area: days-of-week;\n  margin: 1em 0;\n"])));

exports.DaysOfWeek = DaysOfWeek;

var DaysOfMonth = _styledComponents["default"].section(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  grid-area: days-of-month;\n"])));

exports.DaysOfMonth = DaysOfMonth;

var Wrapper = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n"])));

exports.Wrapper = Wrapper;