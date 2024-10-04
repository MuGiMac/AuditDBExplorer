//import React, { useEffect, useState } from 'react';
import Footer from '../Head-Foot/Footer';
import Header from '../Head-Foot/Header';
//import axios from 'axios';
import './results.css';

const Results = () => {
   // const [userInfo, setUserInfo] = useState(null);


    return (
        <div className="my-info-container1">
            <Header />
            <div className="panel-top1">
                <div className="panel-heading1">
                    <h4>Entries Displayed</h4>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Results;
