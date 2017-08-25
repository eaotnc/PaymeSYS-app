import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBox from './HeaderBox';
import IconUser from '../../../../assets/employee/icon_user@3x.png';

class PersonalDetail extends Component {
  static propTypes = {
    handleClickEdit: PropTypes.func.isRequired,
    key: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      handleClickEdit,
      key,
      value,
    } = this.props;
    return (
      <div className="profile-pd-box">
        <HeaderBox
          icon={IconUser}
          title="ข้อมูลส่วนตัว"
          handleClickEdit={handleClickEdit}
          key={key}
          value={value}
        />
        <div className="profile-pd-body-box">
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>เพศ:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>หญิง</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>วันเกิด:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>12 เมษายน 2540</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>สัญชาติ:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>ไทย</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>กลุ่มสิทธิฯ:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>A</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>แผนสิทธิฯ:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>สิทธิประโยชน์แบบที่ 1</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>ตำแหน่ง:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>ผู้จัดการฝ่ายตลาด</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>แผนก:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>การตลาด</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>ประเภท:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>พนักงานประจำ</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>อีเมล:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>laksamon@moneytable.com</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>เลขบัญชี:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>12344894</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>ธนาคาร:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>กสิกรไทย</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>วันเริ่มงาน:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>18 กันยายน 2553</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>สิ้นสุดวันทำงาน:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>ยังทำงานอยู่</span>
            </div>
          </div>
        </div>
        <div className="profile-pd-body-box">
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>ที่อยู่:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10311</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>อีเมลส่วนตัว:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>laksamon@gmail.com</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>สถานภาพ:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>โสด</span>
            </div>
          </div>
          <div className="profile-body-text-row row">
            <div className="profile-body-text-box-l">
              <span>เบอร์โทรศัพท์:</span>
            </div>
            <div className="profile-body-text-box-r">
              <span>083-646-6579</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetail;
