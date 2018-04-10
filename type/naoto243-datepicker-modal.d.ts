/// <reference types="react" />
import * as React from "react";
import DayPicker from 'react-day-picker';
export interface Props {
    portalDOM: HTMLElement;
    form: any;
    date: any;
    onChange: any;
}
export default class DatePickerModal extends React.Component<Props, any> {
    open: boolean;
    ref: DayPicker | any;
    toggleOpen(): void;
    render(): JSX.Element;
}
