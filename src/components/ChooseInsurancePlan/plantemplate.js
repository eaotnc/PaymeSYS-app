import React, { Component } from 'react'

import icon1 from '../image/icons-8-treatment-plan.png'
import icon2 from '../image/icons-8-view-file.png'
import {
  ManagePlan,
  ImageIcon1,
  ImageIcon2,
  EmptyPlan,
  EmptyPlanText,
} from './styled'
import { Image, Checkbox, Segment, Icon, Message } from 'semantic-ui-react'
import ModalPlan from './modal-plan'

class PlanTemplate extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleClick() {
    this.props.onClick()
  }

  RenderTable = (colorPlan, id) => {
    return (
      <p>
        <table>
          <tr>
            <td style={{ width: '55px' }}>
              <Image src={icon1} style={{ width: '25px', height: '30px' }} />
            </td>
            <td style={{ width: '280px' }}>
              <b>{this.props.id}</b><br />
              ราคาต่อหัว : {this.props.price} บาท
            </td>
            {this.RenderColumIsclosetap(colorPlan, id)}
          </tr>
        </table>
      </p>
    )
  }

  RenderColumIsclosetap = (colorPlan, id) => {
    const { handleischoose } = this.props
    if (this.props.closetap) {
      return (
        <td style={{ width: '30px', paddingLeft: '40px' }}>
          <Icon
            name="close"
            size="big"
            style={{ left: '20px', cursor: 'pointer' }}
            onClick={() =>
              this.props.handleDeleteChooseInsurance(
                this.props.index,
                colorPlan,
              )}
          />
        </td>
      )
    } else
      return (
        <td>
          <td style={{ width: '40px' }}>
            <ModalPlan />
          </td>
          <td style={{ width: '30px' }}>
            <Icon name="chevron right" size="big" style={{ left: '20px' }} />
          </td>
        </td>
      )
  }

  render() {
    const { id, price, colorPlan, closetap } = this.props
    if (this.props.closetap) {
      if (this.props.colorPlan == 1) {
        return (
          <div>
            <ManagePlan>
              {this.RenderTable(colorPlan, id)}
            </ManagePlan>
          </div>
        )
      } else if (this.props.colorPlan == 2) {
        return (
          <div>
            <ManagePlan style={{ backgroundColor: '#c0ccda' }}>
              {this.RenderTable(colorPlan, id)}
            </ManagePlan>
          </div>
        )
      }
    } else {
      if (this.props.colorPlan == 1) {
        return (
          <ManagePlan>
            <table>
              <tr>
                <td
                  style={{ width: '55px', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteOurplan(this.props.index)}
                >
                  <Image
                    src={icon1}
                    style={{ width: '25px', height: '30px' }}
                  />
                </td>
                <td
                  style={{ width: '65%', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteOurplan(this.props.index)}
                >
                  <b>{this.props.id}</b><br />
                  ราคาต่อหัว : {this.props.price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    <ModalPlan />
                  </td>
                  <td
                    style={{ width: '30px', cursor: 'pointer' }}
                    onClick={() =>
                      this.props.handleDeleteOurplan(this.props.index)}
                  >
                    <Icon
                      name="chevron right"
                      size="big"
                      style={{ left: '20px' }}
                    />
                  </td>
                </td>
              </tr>
            </table>
          </ManagePlan>
        )
      } else if (this.props.colorPlan == 2) {
        return (
          <ManagePlan style={{ backgroundColor: '#c0ccda' }}>
            <table>
              <tr>
                <td
                  style={{ width: '55px', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteSpacialPlan(this.props.index)}
                >
                  <Image
                    src={icon1}
                    style={{ width: '25px', height: '30px' }}
                  />
                </td>
                <td
                  style={{ width: '65%', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteSpacialPlan(this.props.index)}
                >
                  <b>{this.props.id}</b><br />
                  ราคาต่อหัว : {this.props.price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    <ModalPlan />
                  </td>
                  <td
                    style={{ width: '30px', cursor: 'pointer' }}
                    onClick={() =>
                      this.props.handleDeleteSpacialPlan(this.props.index)}
                  >
                    <Icon
                      name="chevron right"
                      size="big"
                      style={{ left: '20px' }}
                    />
                  </td>
                </td>
              </tr>
            </table>
          </ManagePlan>
        )
      }
    }
  }
}

export default PlanTemplate
