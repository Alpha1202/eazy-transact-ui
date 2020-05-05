import React from "react";
import { inject, observer } from "mobx-react";
import TransactionHistory from './TransactionHistory';
import TransactionCard from './TransactionCard';
import ProfileCard from './ProfileCard';
import "./Index.css";

@inject("authStore")
@observer
class Body extends React.Component {
  render() {
    const { firstName } = this.props.authStore.authUser;
    return (
      <section id="content-area">

        <div className="heading">
          <h1>Dashboard</h1>
          <p>{ firstName && `${firstName} ,`} Welcome to your Dashboard</p>
        </div>

        <div className="user-cards">
          <div className="row">

            <ProfileCard />
            <TransactionCard />
            
          </div>
        </div>

       <TransactionHistory />
      </section>
    );
  }
}

export default Body;
