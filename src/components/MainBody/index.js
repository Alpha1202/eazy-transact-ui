import React, { useState } from "react";
import UserModal from "../Modal/Modal";

import "./index.css";

const Index = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div className="home-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="home-text">
              <h2>Eazy Transact lTD</h2>
              <p className="hidden-xs">
                Lorem maiores tempora at nisi consequatur. Fuga placeat
                laboriosam nisi quia!
              </p>
              <button
              onClick={() => setModalShow(true)}>{modalShow ? 'loading...' : 'Get Started'}</button>
            </div>
          </div>
        </div>
        <UserModal 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
    </div>
  );
};

export default Index;
