"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const DayPicker_1 = require("react-day-picker/types/DayPicker");
const moment = require("moment");
const modal_1 = require("./modal");
const FontAwesome = require('react-fontawesome');
class Naoto243DatePickerModal extends React.Component {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    toggleOpen() {
        this.open = !this.open;
        this.setState({ ...this.state });
    }
    render() {
        return (React.createElement(React.Fragment, null,
            this.props.form({
                open: () => this.toggleOpen()
            }),
            this.open && (React.createElement(modal_1.Modal, { portalDOM: this.props.portalDOM },
                React.createElement(ModalStyle, { onClick: e => {
                        this.toggleOpen();
                    } },
                    React.createElement("div", { className: 'day-picker', onClick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                        } },
                        React.createElement(DayPicker_1.default, { ref: ref => {
                                this.ref = ref;
                            }, className: 'day-picker', onDayClick: e => {
                                this.toggleOpen();
                                this.props.onChange(e);
                            }, locale: "ja", selectedDays: this.props.date, navbarElement: ({ month }) => React.createElement(NavStyle, null,
                                React.createElement(DateText, null, moment(month).format('YYYY/MM')),
                                React.createElement(CalendarIconStyle, null,
                                    React.createElement(FontAwesome, { onClick: e => this.ref.showPreviousYear(), name: 'chevron-double-left', size: '1x' }),
                                    React.createElement(FontAwesome, { onClick: e => this.ref.showPreviousMonth(), name: 'chevron-left', size: '1x' }),
                                    React.createElement(FontAwesome, { onClick: e => this.ref.showNextMonth(), name: 'chevron-right', size: '1x' }),
                                    React.createElement(FontAwesome, { onClick: e => this.ref.showNextYear(), name: 'chevron-double-right', size: '1x' }))), captionElement: ({ localeUtils }) => (React.createElement("span", null)) })))))));
    }
}
exports.default = Naoto243DatePickerModal;
const ModalStyle = styled_components_1.default.div `
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  & .day-picker {
    background-color: #fbfbfb;
    height: 330px;
    width: 320px;
    padding-bottom: 16px;
    padding-top: 16px;
  }
`;
const NavStyle = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateText = styled_components_1.default.span `
  font-weight: bold;
  font-size: 1.6em;
  width : 100px;
`;
const CalendarIconStyle = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    padding: 2px;
    font-size: 1.2em;
    font-weight: bold;
    //background-color: #c7c7cf;
    //border-radius: 3px;
    margin-left: 4px;
    //color: white;
  }
`;
