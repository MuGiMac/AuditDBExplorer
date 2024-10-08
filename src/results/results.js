import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Head-Foot/Footer';
import Header from '../Head-Foot/Header';
import './results.css';

const Results = () => {
    const location = useLocation();
    const { data } = location.state || { data: [] }; // Fallback to empty array

    return (
        <div className="my-info-container1">
            <Header />
            <div className="panel-top1">
                <div className="panel-heading1">
                    <h4>Entries Displayed</h4>
                </div>
                <div className="panel-body1">
                    <div className="table-container">
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Start Time</th>
                                    <th>User</th>
                                    <th>User IP</th>
                                    <th>Operation</th>
                                    <th>Entry</th>
                                    <th>Result</th>
                                    <th>Attributes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.source}</td>
                                        <td>{item.start_time}</td>
                                        <td>{item.user_dn}</td>
                                        <td>{item.user_ip}</td>
                                        <td>{item.op_name}</td>
                                        <td>{item.entry_dn}</td>
                                        <td>{item.result}</td>
                                        <td>{item.aud_attributes}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="8">No results found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Results;
