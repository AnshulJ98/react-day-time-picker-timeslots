"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Success = exports.Failed = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 1em 0;\n"])));

var Success = (0, _styledComponents["default"])(Container)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (props) {
  return props.theme.feedback.success.color;
});
exports.Success = Success;
var Failed = (0, _styledComponents["default"])(Container)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (props) {
  return props.theme.feedback.failed.color;
});
exports.Failed = Failed;