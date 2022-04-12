"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevMonth = exports.NextMonth = exports.MonthPicker = exports.FakeCurrentMonth = exports.CurrentMonth = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var prev = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    transform: translateX(-25px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"])));
var fakePrev = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(25px);\n  }\n"])));
var next = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    transform: translateX(25px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"])));
var fakeNext = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-25px);\n  }\n"])));
var ANIM_TIME_SEC = 0.2;
var ANIM_DELAY_TIME_SEC = 0.1;

var _makeAnimation = function _makeAnimation(type) {
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", " ", "s ease-out ", "s normal both;\n"])), type, ANIM_TIME_SEC, ANIM_DELAY_TIME_SEC);
};

var animation = function animation(props) {
  var animation = props.animation;

  if (animation === 'prev') {
    return _makeAnimation(prev);
  }

  if (animation === 'next') {
    return _makeAnimation(next);
  }
};

var fakeAnimation = function fakeAnimation(props) {
  var animation = props.animation;

  if (animation === 'prev') {
    return _makeAnimation(fakePrev);
  }

  if (animation === 'next') {
    return _makeAnimation(fakeNext);
  }
};

var MonthPicker = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-rows: 1fr;\n  grid-gap: 0;\n  align-items: center;\n  padding: 0 0.5em;\n  font-size: 1.2em;\n"])));

exports.MonthPicker = MonthPicker;

var Button = _styledComponents["default"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  border: 0;\n  color: inherit;\n  background-color: ", ";\n  box-sizing: border-box;\n  outline: 0;\n  transition: all 0.25s ease;\n  padding: 0;\n  font-size: 1em;\n  height: 60px;\n  width: 60px;\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.primary;
});

var PrevMonth = (0, _styledComponents["default"])(Button)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
exports.PrevMonth = PrevMonth;
var NextMonth = (0, _styledComponents["default"])(Button)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
exports.NextMonth = NextMonth;

var CurrentMonth = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-weight: 500;\n  animation: ", ";\n"])), animation);

exports.CurrentMonth = CurrentMonth;

var FakeCurrentMonth = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  animation: ", ";\n  visibility: ", ";\n"])), fakeAnimation, function (props) {
  return props.animation ? 'visible' : 'hidden';
});

exports.FakeCurrentMonth = FakeCurrentMonth;