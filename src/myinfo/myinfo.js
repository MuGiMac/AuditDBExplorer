import React, { useEffect, useState } from 'react';
import Footer from '../Head-Foot/Footer';
import Header from '../Head-Foot/Header';
import axios from 'axios';
import './myinfo.css';

const MyInfo = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const das_id = sessionStorage.getItem('das_id');

            if (das_id) {
                try {
                    const response = await axios.get(`http://localhost:5000/api/users/${das_id}`);
                    setUserInfo(response.data);
                } catch (error) {
                    console.error('Error fetching user info:', error);
                }
            }
        };

        fetchUserInfo();
    }, []);

    if (!userInfo) return <div>Loading...</div>;

    return (
        <div className="my-info-container">
            <Header />
            <div className="panel-top">
                <div className="panel-heading">
                    <h4>My Profile</h4>
                </div>
                <div className="panel-body">
                    <div className="list-group">
                        <div className="list-group-item">
                            <div><small className="list-text">Name :</small> <span className="read-only-field">{userInfo.name}</span></div>
                        </div>
                        <div className="list-group-item">
                            <div><small className="list-text">Das ID :</small> <span className="read-only-field">{userInfo.das_id}</span></div>
                        </div>
                        <div className="list-group-item">
                            <div><small className="list-text">Email :</small> <span className="read-only-field">{userInfo.mail_id}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyInfo;
