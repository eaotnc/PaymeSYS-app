import React, { Component } from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import {
  Card,
  Text,
  TextIn,
  IconPointer,
  ButtonStatusAppove,
  ButtonStatusCancle,
} from './styled'
import { bidding } from '../../api/bidding'
import { connect } from 'react-redux'
import ModalSelectInsurer from './ModalSelectInsurer'
import moment from 'moment'

class Box extends Component {
  constructor() {
    super()
    this.state = {}
  }
  handlePost = e => {
    e.preventDefault()
    const { passwordToConfirm } = this.state
    this.props.postBox(passwordToConfirm)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  renderList = bids => {
    let $status = 'Join'
    const { end } = this.props
    if (end.end === 'Timeout') {
      if ($status === 'Join') {
        $status = (
          <ModalSelectInsurer
            handlePost={this.handlePost}
            handleChange={this.handleChange}
          />
        )
      } else {
        $status = <ButtonStatusCancle>ไม่เข้าร่วมประมูล</ButtonStatusCancle>
      }
    } else {
      if ($status === 'Join') {
        // document.getElementById('box').className = 'boxs';
        $status = <Text style={{ color: '#2ac294' }}>ร่วมประมูล</Text>
      } else if ($status === 'Cancle') {
        $status = <Text style={{ color: '#f1535d' }}>ไม่ร่วมประมูล</Text>
      } else {
        $status = <Text style={{ color: '#3a7bd5' }}>กำลังพิจารณา</Text>
      }
    }
    return bids.map(bid => //   <div id = 'box' >
    (
      <Card>
        <div className="row">
          <div className="large-3 columns">
            <Text>{bid.insurerName}</Text>
          </div>
          <div className="large-6 columns">
            <div className="row">
              <div className="large-4 columns">
                <Text>{bid.biddingId}</Text>
              </div>
              <div className="large-2 columns">
                <Text>{bid.timeOfBidding}</Text>
              </div>
              <div className="large-2 columns">
                <Text>{moment(bid.updatedAt).format('L')}</Text>
              </div>
              <div className="large-4 columns">
                <Text>{bid.priceOfBidding}</Text>
              </div>
            </div>
          </div>
          <div className="large-1 columns">
            <Text>
              <IconPointer
                name="external"
                size="big"
                onClick={this.props.handleClick}
              />
            </Text>

          </div>
          <div className="large-2 columns">
            <Text>{$status}</Text>
          </div>
        </div>
      </Card>
    ))
  }

  render() {
    return (
      <div className="Box">
        <div className="HeadBidContent">
          <div className="row">
            <div className="large-3 columns">
              <Text>ชื่อบริษัทประกัน</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-4 columns">
                  <TextIn>เลขที่ใบเสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>ครั้งที่เสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>วันที่</TextIn>
                </div>
                <div className="large-4 columns">
                  <TextIn>ราคาประมูล</TextIn>
                </div>
              </div>
            </div>
            <div className="large-1 columns">
              <Text>ดูแผนประกัน</Text>
            </div>
            <div className="large-2 columns">
              <Text>สถานะ</Text>
            </div>
          </div>
        </div>
        {this.renderList(this.props.list)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  end: state.endTimeout,
})

export default connect(mapStateToProps, null)(Box)
