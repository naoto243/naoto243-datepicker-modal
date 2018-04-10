import * as React from "react";
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
const moment = require('moment');
import {Modal} from './modal';
const FontAwesome = require('react-fontawesome');

export interface Props {
  portalDOM: HTMLElement;
  form : any
  date : any
  onChange : any
}

export default class DatePickerModal extends React.Component<Props, any> {

  open: boolean = false;
  ref: DayPicker | any;

  toggleOpen() {
    this.open = !this.open;
    this.setState({ ...this.state });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.form({
          open: () => this.toggleOpen()
        })}
        {this.open && (
          <Modal
            portalDOM={this.props.portalDOM}
          >
            <ModalStyle
              onClick={e => {
                this.toggleOpen();
              }}
            >
              <div
                className={'day-picker'}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <DayPicker
                  ref={ref => {
                    this.ref = ref;
                  }}
                  className={'day-picker'}
                  onDayClick={e => {
                    this.toggleOpen();
                    this.props.onChange(e);
                  }}
                  locale={"ja"}
                  selectedDays={this.props.date}
                  navbarElement={({month})=>
                    <NavStyle>
                      <DateText>{moment(month).format('YYYY/MM') }</DateText>
                      <CalendarIconStyle>
                        <FontAwesome
                          onClick={e => this.ref.showPreviousYear()}
                          name='backward'
                          size='1x'
                        />
                        <FontAwesome
                          onClick={e => this.ref.showPreviousMonth()}
                          name='chevron-left'
                          size='1x'
                        />
                        <FontAwesome
                          onClick={e => this.ref.showNextMonth()}
                          name='chevron-right'
                          size='1x'
                        />
                        <FontAwesome
                          onClick={e => this.ref.showNextYear()}
                          name='forward'
                          size='1x'
                        />
                      </CalendarIconStyle>
                    </NavStyle>
                  }
                  captionElement={({ localeUtils }) => (
                    <span>
                    </span>
                  )}
                />
              </div>
            </ModalStyle>
          </Modal>
        )}
      </React.Fragment>
    );

  }
}

const ModalStyle = styled.div`
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

const NavStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DateText = styled.span`
  font-weight: bold;
  font-size: 1.6em;
  width : 100px;
`;

const CalendarIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    padding: 2px;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    //background-color: #c7c7cf;
    //border-radius: 3px;
    margin-left: 12px;
    //color: white;
  }
`
