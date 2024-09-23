import React, { useState } from 'react';
import './App.css';
import Footer from './Head-Foot/Footer';
import Header from './Head-Foot/Header';

const AuditDBExplorer = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [user, setUser] = useState('*');
  const [userIP, setUserIP] = useState('*');
  const [onEntry, setOnEntry] = useState('*');
  const [attributes, setAttributes] = useState('*');
  const [operation, setOperation] = useState('*');
  const [result, setResult] = useState('');
  const [maxRows, setMaxRows] = useState('10');
  const [sources, setSources] = useState({
      ldapAudit: true,
      identityAudit: true,
  });

  const handleSourceChange = (e) => {
      setSources({ ...sources, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
          startTime,
          endTime,
          user,
          userIP,
          onEntry,
          attributes,
          operation,
          result,
          maxRows,
          sources,
      });
  };
  return (
      <div className="content">
        <Header/>
          <form onSubmit={handleSubmit}>
            <div className='content1'>
              <div className="container">
                  <div className="field">
                      <label htmlFor="start-time">Start Date</label>
                      <input
                          type="datetime-local"
                          id="start-time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          required
                      />
                  </div>
                  <div className="field">
                      <label htmlFor="end-time">End Date</label>
                      <input
                          type="datetime-local"
                          id="end-time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                      />
                  </div>
              </div>
              <div className="container-1">
                  {[
                      { id: 'user', label: 'User', value: user, setValue: setUser },
                      { id: 'user_ip', label: 'User IP-Address', value: userIP, setValue: setUserIP },
                      { id: 'on_entry', label: 'On Entry', value: onEntry, setValue: setOnEntry },
                      { id: 'attributes', label: 'Attributes', value: attributes, setValue: setAttributes },
                  ].map(({ id, label, value, setValue }) => (
                      <div className="field1" key={id}>
                          <label className="label-left" htmlFor={id}>{label}</label>
                          <input
                              type="text"
                              id={id}
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              required
                          />
                      </div>
                  ))}
              </div>
              <div className="container">
                  <div className="field">
                      <label htmlFor="operation">Operation</label>
                      <select
                          id="operation"
                          value={operation}
                          onChange={(e) => setOperation(e.target.value)}
                      >
                          {['Add', 'Delete', 'Modify', '*'].map((option) => (
                              <option key={option} value={option}>{option}</option>
                          ))}
                      </select>
                  </div>
                  <div className="field">
                      <label className="label-left" htmlFor="result">Result</label>
                      <select
                          id="result"
                          value={result}
                          onChange={(e) => setResult(e.target.value)}
                      >
                          {[
                              '',
                              '0 (success)',
                              '0 (succes)',
                              '1 (operationsError)',
                              '16 (noSuchAttribute)',
                              '17 (undefinedAttributeType)',
                              '19 (constraintViolation)',
                              '20 (attributeOrValueExists)',
                              '21 (invalidAttributeSyntax)',
                              '32 (noSuchObject)',
                              '34 (invalidDNSyntax)',
                              '50 (insufficientAccessRights)',
                              '52 (unavailable)',
                              '53 (unwillingToPerform)',
                              '65 (objectClassViolation)',
                              '66 (notAllowedOnNonLeaf)',
                              '68 (entryAlreadyExists)',
                              '*'
                          ].map((option) => (
                              <option key={option} value={option}>{option}</option>
                          ))}
                      </select>
                  </div>
                  <div className="field">
                      <label htmlFor="max_rows">Max Rows</label>
                      <select
                          id="max_rows"
                          value={maxRows}
                          onChange={(e) => setMaxRows(e.target.value)}
                      >
                          {[10, 20, 50, 100, 1000, 'All'].map((option) => (
                              <option key={option} value={option}>{option}</option>
                          ))}
                      </select>
                  </div>
              </div>
              <div className="container">
                  <div className="field">
                      <label className="label-left" htmlFor="source">Source</label>
                      <div>
                          <label style={{ paddingRight: '45px' }}>
                              <input
                                  type="checkbox"
                                  name="ldapAudit"
                                  checked={sources.ldapAudit}
                                  onChange={handleSourceChange}
                              />
                              LDAP Audit (from 01.05.2007)
                          </label>
                          <label>
                              <input
                                  type="checkbox"
                                  name="identityAudit"
                                  checked={sources.identityAudit}
                                  onChange={handleSourceChange}
                              />
                              Identity Audit (from 01.09.2008)
                          </label>
                      </div>
                  </div>
              </div>
              <div>
                  <button type="submit" style={{ marginRight: '40px' }}>Submit</button>
                  <button type="button" onClick={() => {}}>Cancel</button>
              </div>
            </div>
          </form>
          <Footer/>
      </div>
  );
};
export default AuditDBExplorer;