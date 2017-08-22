import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal } from 'semantic-ui-react';
import '../../../styles/employee-style/insurance-health-general.scss';
import Info from '../../../../assets/employee/info.png';
import Health from '../../../../assets/employee/Flexy_Plan_health.png';

class HealthDetail extends Component {
  static propTypes = {
    handleClickBack: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ modal: true });
  }

  handleCloseModal = () => {
    this.setState({ modal: false });
  }

  render() {
    const { plan } = this.props;
    return (
      <div>
        <span className="xten-header">สิทธิประโยชน์ด้านสุขภาพ</span>
        {
          (plan + 1) ?
            <span className="insurance-plan">( แผนที่ {plan + 1} )</span>
            : <span />
        }
        <div className="xten-box">
          <div className="xten-box-header">
            <img
              className="xten-info"
              src={Info}
              alt=""
              onClick={this.handleOpenModal}
              role="button"
              aria-hidden
            />
            <img className="xten-box-header-img" src={Health} alt="" />
            <span className="xten-box-header-text">HEALTH</span>
          </div>
          <div className="xten-box-title">
            <span className="xten-box-title-text">วงเงินทั้งหมด 1,200 บาท/ปี</span>
          </div>
          <div className="xten-box-description">
            <ul className="xten-box-description-text">
              <li>รายละเอียด</li>
              <li>ซื้อสินค้า 400 บาท</li>
              <li>บริการด้านสุขภาพ 800 บาท</li>
            </ul>
          </div>
        </div>
        <span
          className="xten-back-btn"
          onClick={this.props.handleClickBack}
          aria-hidden
        >
          &lt; ย้อนกลับ
        </span>

        <Modal
          trigger={<div />}
          open={this.state.modal}
          onClose={this.handleCloseModal}
        >
          <div className="insurance-box-modal">
            <span
              className="insurance-modal-cancel-box"
              onClick={this.handleCloseModal}
              role="button"
              aria-hidden
            >
              <Icon className="insurance-modal-cancel" name="plus" />
            </span>
            <span className="insurance-modal-text-header">
              User Tips!
            </span>
            <p className="insurance-modal-text">
              สิทธิประโยชน์ด้านค่าใช้จ่ายทั่วไปที่คุณจะได้รับในแต่ละปี
               โดยขอบเขตและเงื่อนไขในการเคลมนั้นเป็นไปตามที่ HR ระบุไว้
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default HealthDetail;
