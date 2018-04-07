import * as React from "react";
import * as ReactDOM from "react-dom";

export interface MProps {
  portalDOM: HTMLElement;
}

export class Modal extends React.Component<MProps, any> {
  el: HTMLDivElement;

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
