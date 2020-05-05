import React,  { useState }  from 'react';
import { Link } from "@reach/router";
import TransferModal from '../../Modal/TransferModal';
import CreditModal from '../../Modal/CreditModal';
import './SideMenu.css';

export const SideMenu = () => {
    const [modalShow, setModalShow] = useState(false)
    const [creditModalShow, setCreditModalShow] = useState(false)

    const logout = () => {
        localStorage.clear();
        window.location.reload(false);
        return 
    }

    return (
        <>
        <section id="sideMenu">
            <nav>
                <Link to="/user" className="active"><i className="fa fa-home" aria-hidden="true"></i>Dashboard</Link>
                <Link to='' onClick={() => setCreditModalShow(true)}><i className="fa fa-get-pocket" aria-hidden="true"></i> Credit</Link>
                <Link to='' onClick={() => setModalShow(true)}><i className="fa fa-share-square" aria-hidden="true"></i> Transfer</Link>
                <Link to="#"><i className="fa fa-pencil" aria-hidden="true"></i> Update Profile</Link>
                <Link to="#"><i className="fa fa-history" aria-hidden="true"></i>Transction Log</Link>
                <Link to="/" onClick={() => logout()} ><i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link>
            </nav>
        </section>
        <TransferModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
        
        <CreditModal
        show={creditModalShow}
        onHide={() => setCreditModalShow(false)} />
        </>
    )
}


