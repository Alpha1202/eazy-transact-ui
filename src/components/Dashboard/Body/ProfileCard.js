import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
class ProfileCard extends Component {
  
  componentDidMount(){
    this.props.authStore.getAuthUserProfile()
  }

  render() {
    const {
      accountBalance,
      email,
      firstName,
      lastName,
      phoneNumber
    } = this.props.authStore.authUser;

    
    return (
      <div className="col-md-6">
        <div className="user-card">
          <div className="user-img"></div>
          <span className="user-name">
            {firstName && `${firstName} ${lastName}`}
          </span>
          <span className="user-title">
            Phone Number: {phoneNumber ? phoneNumber : "0812345677"}
          </span>
          <span className="user-title">
            Email: {email ? email : "test@test.com"}
          </span>
          <hr />
          <div className="col-md-3">
            <span className="education">Balance</span>
          </div>
          <div className="col-md-9">
            <span className="schools">
              {accountBalance ? accountBalance : "900,000"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
