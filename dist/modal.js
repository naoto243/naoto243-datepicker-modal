"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }
    componentDidMount() {
        this.props.portalDOM.appendChild(this.el);
    }
    componentWillUnmount() {
        this.props.portalDOM.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
exports.Modal = Modal;
