import { useState } from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import BuyerDashboard from '../Buyer/BuyerDashboard';
import VendorDashboard from '../Vendor/VendorDashboard';
import OrderWith from '../../../assets/img/OrderWith.gif';
import { user_is_authenticated, user_type } from '../../../lib/auth';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';




const Home = () => {


    


    const matches = useMediaQuery('(min-width:480px)');

    return (
        <div>
            {!user_is_authenticated() ?
                matches ?
                    <div className="welcome-page">
                        <img 
                        src={OrderWith} 
                        alt="Loading..."
                        style={{
                            margin: "3rem",
                            marginTop: "40rem",
                            height: "450px",
                            width: "55%",
                            marginBottom :"15rem",
                        }}
                        />
                        
                      
                        <Typography className='footer' variant="h6" component="h1">
                            Please login or register to continue
                        </Typography>
                    </div>
                    
                    :
                    <div className="welcome-page">
                        <Typography className="welcome-heading" variant="h4" component="h1">
                            Welcome to HungerOut
                        </Typography>
                        <Typography variant="h6" component="h1">
                            Please login or register to continue
                        </Typography>
                    </div>
                :
                <div>
                    {user_type() === 'buyer' ?
                        <BuyerDashboard />
                        :
                        <VendorDashboard />
                    }
                </div>
            }
        </div>
    );


};


export default Home;
