/// <reference types="react" />
import * as React from "react";
export interface MProps {
    portalDOM: HTMLElement;
}
export declare class Modal extends React.Component<MProps, any> {
    el: HTMLDivElement;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
