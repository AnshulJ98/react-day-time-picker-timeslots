"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeCalendar = exports.Calendar = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var prev = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(-110%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n"])));
var fakePrev = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(110%);\n  }\n"])));
var next = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(110%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n"])));
var fakeNext = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-110%);\n  }\n"])));
var ANIM_TIME_SEC = 0.4;

var _makeAnimation = function _makeAnimation(type) {
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", " ", "s ease-in-out normal both;\n"])), type, ANIM_TIME_SEC);
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

var Calendar = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  animation: ", ";\n  z-index: 1;\n"])), animation);

exports.Calendar = Calendar;

var FakeCalendar = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  animation: ", ";\n  opacity: ", ";\n  z-index: 0;\n"])), fakeAnimation, function (props) {
  return props.animation ? 1 : 0;
});

exports.FakeCalendar = FakeCalendar;