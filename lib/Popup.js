"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupWrapper = exports.PopupHeader = exports.PopupClose = exports.Popup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PopupWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: center;\n  width: 420px;\n  margin: auto;\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"])));

exports.PopupWrapper = PopupWrapper;

var Popup = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n  background-color: ", ";\n  font-size: 1.1em;\n"])), function (props) {
  return props.theme.background;
});

exports.Popup = Popup;

var PopupHeader = _styledComponents["default"].header(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 1em 0;\n"])));

exports.PopupHeader = PopupHeader;

var PopupClose = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 1em;\n  color: ", ";\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.buttons.disabled.color;
});

exports.PopupClose = PopupClose;