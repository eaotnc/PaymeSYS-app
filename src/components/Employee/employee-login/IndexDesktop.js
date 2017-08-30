import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import Logo from '../../../../assets/employee/logo@3x.png';
import IconGift from '../../../../assets/employee/icon_gift@3x.png';
import emailIcon from '../../image/icons-8-message.png';
import keyIcon from '../../image/icons-8-key-copy.png';

class EmployeeLoginDesktop extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <div className="test">
        <img className="login-d-logo" alt="" src={Logo} />
        <div className="login-d-box">
          <div className="login-d-box-l">
            <img alt="" src={IconGift} className="login-d-icon-gift" />
          </div>
          <div className="login-d-box-r">
            <span className="login-d-header">เข้าสู่ระบบ</span>
            <span className="login-d-description">เข้าสู่ระบบด้วยอีเมลของคุณ</span>
            <hr className="login-d-line" />
            <Input className="login-d-input-box" iconPosition="left" placeholder="อีเมล">
              <img className="login-d-icon-input" src={emailIcon} alt="at" />
              <input type="email" onChange={handleChange} />
            </Input>
            <Input className="login-d-input-box" iconPosition="left" placeholder="รหัสผ่าน">
              <img className="login-d-icon-input" src={keyIcon} alt="at" />
              <input type="password" onChange={handleChange} />
            </Input>
            {
              data.error ?
                <p className="login-d-error-msg">
                  {data.message}
                </p>
              : <div />
            }
            <a className="login-d-forget">ลืมรหัสผ่าน?</a>
            <button className="login-d-btn-login" onClick={handleSubmit}>
              ลงชื่อเข้าใช้
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeLoginDesktop;
