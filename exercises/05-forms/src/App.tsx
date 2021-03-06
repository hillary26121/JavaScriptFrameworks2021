import { useState, FunctionComponent as FC, ReactNode } from "react";
import React from 'react';
import "./App.css";
import states from "./assets/states.json";
import countries from "./assets/countries.json";

function App() {

  interface IformValues {
    firstName: string;
    lastName: string
    addressLine1: string;
    state: string;
    city: string;
    postalCode: string;
    country: string;
    [key: string]: string;
  }

  const [submitted, setSubmitted] = React.useState(false);


  const [formValues, setFormValues] = useState<IformValues>(
    {firstName: "",
    lastName: "",
    addressLine1: "",
    state: "",
    city: "",
    postalCode: "",
    country: "",}
  
  
  );


  const [submittedValues, setSubmittedValues] = useState<IformValues>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedValues({...formValues})
    setFormValues(formValues)
  };

  const handleChange = (e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    ) => {
    setFormValues((prevValues) => {
      return { 
        ...prevValues, 
        [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="container mt-4" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formValues.firstName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formValues.lastName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formValues.addressLine1}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formValues.city}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          onChange={handleChange}
          value={formValues.state}
        >
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formValues.postalCode}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          onChange={handleChange}
          value={formValues.country}
        >
          {countries.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {submitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          <h3>Results:</h3>
          <ul className="list-unstyled mb-0">
            {submittedValues && Object.keys(submittedValues).map((key, index) => (
              <li key={index}>{`${key}: ` + submittedValues[key]}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;