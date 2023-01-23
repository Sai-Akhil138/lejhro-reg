import React from "react";
import "./registrationform.css";
import { useState } from "react";

const RegistrationForm = () => {
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log(customerId);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">eNACH Registration Form</h2>
      <form action="#" onSubmit={handleSubmit}>
        <h3>Customer Information</h3>
        <div className="input-box">
          <label htmlFor="">Customer ID(Loan Reference No.)</label>
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
          <input type="text" name="emailId" id="" />
        </div>
        <div className="input-box">
          <label htmlFor="">Mobile Number</label>
          <input type="text" name="mobileNumber" id="" required />
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
          <input type="text" name="emiAmount" id="" required />
        </div>
        <div className="input-box">
          <label>Number of EMI</label>
          <select name="selectedEMINoType">
            <option value="selectfrequency">Select Frequency</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
            <option value="18">18 Months</option>
            <option value="24">24 Months</option>
          </select>
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
        <button type="submit" className="form-submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
