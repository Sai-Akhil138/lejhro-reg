import React from "react";
import "./registrationform.css";
import { useState } from "react";

import Logo from "../../images/lejhro_logo_blue.png";

const RegistrationForm = () => {
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
      <h2 className="form-title">eNACH Registration Form</h2>
      <form action="#" onSubmit={handleSubmit}>
        <h3>Customer Information</h3>
        <div className="input-box">
          <label htmlFor="">Customer ID</label>
          <input
            type="text"
            name="customerId"
            id=""
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" id="" required />
        </div>
        <div className="input-box">
          <label htmlFor="">Email ID (Optional)</label>
          <input type="email" name="emailId" id="" />
        </div>
        <div className="input-box">
          <label htmlFor="">Mobile Number</label>
          <input type="number" name="mobileNumber" id="" required />
        </div>

        <h3>Mandate Information</h3>
        <div className="input-box">
          <label>Account Type</label>
          <select name="selectedAccType">
            <option value="saving">Saving</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div className="input-box hidden">
          <label>Collection Type</label>
          <select name="selectedCollectionType">
            <option value="fixed">Fixed Amount</option>
          </select>
        </div>
        <div className="input-box hidden">
          <label>Collection Amount</label>
          <select name="selectedCollectionType">
            <option value="one">One</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="">EMI Amount</label>
          <input type="number" name="emiAmount" id="" required />
        </div>
        <div className="input-box">
          <label>Number of EMI</label>
          <input type="number" name="numberOfEMI" id="" />
        </div>
        <div className="input-box hidden">
          <label>Collection Frequency</label>
          <select name="selectedCollectionFreqType">
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="input-box">
          <label>Collection First Date</label>
          <input type="date" name="collectionFirstDate" id="" />
        </div>
        <div className="input-box hidden">
          <label>Collection Last Date</label>
          <input type="date" name="collectionLastDate" id="" />
        </div>
        <a href="/" type="submit" className="form-submit">
          SUBMIT
        </a>
      </form>
    </div>
  );
};

export default RegistrationForm;
