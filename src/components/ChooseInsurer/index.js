import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);
import 'react-datepicker/dist/react-datepicker.css';
import {
  Detail,
  Head,
  Side,
  SideIn,
  Card,
  HeadIn,
  Submit,
  SubmitInsure,
  Next,
} from './styled'
import CardInsure from './CardInsure'
class InsurerSelect extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      step: 4,
      num: 0,
    };
    this.handleChange = this.handleChange.bind(this);
}
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
   onChange(value) {
    console.log(value && value.format(format));
    }
  render() {
    return (
      <div className="ChooseInsurer">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <div className="row">
              <Side className="large-10 columns">
                <Head>เลือกบริษัทประกันภัยที่ต้องการ</Head>
              </Side>
            </div>
            <div className="row">
              <SideIn>
                <HeadIn className="row">
                  <span>เลือกบริษัทประกันภัยที่ต้องการ {this.state.num}/5</span>
                  <SubmitInsure>บันทึก</SubmitInsure>
                </HeadIn>
                <div className="row">
                  <CardInsure />
                  <CardInsure />
                  <CardInsure />
                </div>
              </SideIn>
              <SideIn>
                <p>ตั้งระยะเวลาการเสนอราคาของประกัน</p>
                <p className="insure">
                  บริษัทประกันสามารถเสนอราคาได้ภายในวันที่ &nbsp;
                </p>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={moment()}
                />
                <span>&nbsp;เวลา&nbsp;</span>
                  <TimePicker defaultValue={moment()} showSecond={false} />
                <br />
                <Submit>บันทึก</Submit>

              </SideIn>
            </div>
          </Detail>
          <Next>ต่อไป</Next>
        </div>
      </div>
    )
  }
}
export default InsurerSelect

{
  /*<p>ตั้งระยะเวลาการเสนอราคาของประกัน</p>
                                <p className='insure'>บริษัทประกันสามารถเสนอราคาได้ภายในวันที่ &nbsp;</p>
                                <input className='date' type="date" name="bday"/>
                                <span>&nbsp;เวลา&nbsp;</span>
                                {/*<div className="ui calendar" id="example3">
                                    <div className="ui input left icon">
                                    <i className="time icon"></i>
                                    <input type="text" placeholder="Time"/>
                                </div> 
                                </div>*/
}
//  <Submit>บันทึก</Submit>*/}
