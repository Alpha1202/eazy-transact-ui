import React from 'react';
import { SideMenu } from './SideMenu/SideMenu';
import  Header  from './Header/Index';
import { Redirect } from '@reach/router';
import Body from './Body/Index';
import './index.css';




class Index extends React.Component {
    render() {
    const checkToken = localStorage.getItem('token');
    console.log(checkToken, 'token')
    return (
        checkToken ? (
            <>
            <SideMenu />
            <Header />
            <Body />
            </>
        ) 
    : 
<Redirect to='/' />       
    )
}
}

export default Index;
