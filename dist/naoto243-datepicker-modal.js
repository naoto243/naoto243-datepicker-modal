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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import styled from 'styled-components';
import DayPicker from 'react-day-picker/types/DayPicker';
import { Modal } from './modal';
var FontAwesome = require('react-fontawesome');
var Naoto243DatePickerModal = /** @class */ (function (_super) {
    __extends(Naoto243DatePickerModal, _super);
    function Naoto243DatePickerModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = false;
        return _this;
    }
    Naoto243DatePickerModal.prototype.toggleOpen = function () {
        this.open = !this.open;
        this.setState(__assign({}, this.state));
    };
    Naoto243DatePickerModal.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            this.props.form({
                open: function () { return _this.toggleOpen(); }
            }),
            this.open && (React.createElement(Modal, { portalDOM: this.props.portalDOM },
                React.createElement(ModalStyle, { onClick: function (e) {
                        _this.toggleOpen();
                    } },
                    React.createElement("div", { className: 'day-picker', onClick: function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                        } },
                        React.createElement(DayPicker, { ref: function (ref) {
                                _this.ref = ref;
                            }, className: 'day-picker', onDayClick: function (e) {
                                _this.toggleOpen();
                                _this.props.onChange(e);
                            }, locale: "ja", selectedDays: this.props.date, navbarElement: function (_a) {
                                var month = _a.month;
                                return React.createElement(NavStyle, null,
                                    React.createElement(DateText, null, moment(month).format('YYYY/MM')),
                                    React.createElement(CalendarIconStyle, null,
                                        React.createElement(FontAwesome, { onClick: function (e) { return _this.ref.showPreviousYear(); }, name: 'chevron-double-left', size: '1x' }),
                                        React.createElement(FontAwesome, { onClick: function (e) { return _this.ref.showPreviousMonth(); }, name: 'chevron-left', size: '1x' }),
                                        React.createElement(FontAwesome, { onClick: function (e) { return _this.ref.showNextMonth(); }, name: 'chevron-right', size: '1x' }),
                                        React.createElement(FontAwesome, { onClick: function (e) { return _this.ref.showNextYear(); }, name: 'chevron-double-right', size: '1x' })));
                            }, captionElement: function (_a) {
                                var localeUtils = _a.localeUtils;
                                return (React.createElement("span", null));
                            } })))))));
    };
    return Naoto243DatePickerModal;
}(React.Component));
export default Naoto243DatePickerModal;
var ModalStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & .day-picker {\n    background-color: #fbfbfb;\n    height: 330px;\n    width: 320px;\n    padding-bottom: 16px;\n    padding-top: 16px;\n  }\n"], ["\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & .day-picker {\n    background-color: #fbfbfb;\n    height: 330px;\n    width: 320px;\n    padding-bottom: 16px;\n    padding-top: 16px;\n  }\n"])));
var NavStyle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var DateText = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 1.6em;\n  width : 100px;\n"], ["\n  font-weight: bold;\n  font-size: 1.6em;\n  width : 100px;\n"])));
var CalendarIconStyle = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  & > * {\n    padding: 2px;\n    font-size: 1.2em;\n    font-weight: bold;\n    //background-color: #c7c7cf;\n    //border-radius: 3px;\n    margin-left: 4px;\n    //color: white;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  & > * {\n    padding: 2px;\n    font-size: 1.2em;\n    font-weight: bold;\n    //background-color: #c7c7cf;\n    //border-radius: 3px;\n    margin-left: 4px;\n    //color: white;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
