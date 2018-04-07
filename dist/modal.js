"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.el = document.createElement("div");
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        this.props.portalDOM.appendChild(this.el);
    };
    Modal.prototype.componentWillUnmount = function () {
        this.props.portalDOM.removeChild(this.el);
    };
    Modal.prototype.render = function () {
        return ReactDOM.createPortal(this.props.children, this.el);
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
