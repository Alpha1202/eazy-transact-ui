import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from '@reach/router';
import LandingPage from '../components/LandingPage/Index';
import UserDashboard from '../components/Dashboard/Index';



toast.configure({
    autoClose: 5000,
    draggable: false,
  })

  
const App = () => (
    <div>
        <Router>
        <LandingPage path="/"/>
     <UserDashboard path="/user"/>
        </Router>
       
    </div>
)

export default App;