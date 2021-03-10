import { useState } from "react";
import "./App.css";
import countries from "./assets/countries.json"
import states from "./assets/states.json"
// Import data from "assets/countries.json" and "assets/states.json" here

function App() {
  const [state, setState] = useState(""); 
  const [country, setCountry] = useState("");
  function handleForm(e){
    e.preventDefault()
  }
  return (
    <form onSubmit = {handleForm}className="container mt-4" method="POST">
      {}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
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
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        { 
        }
        <select value={state} onChange = {states.map( (individualState)=>{ <option></option>})}id="state" name="state" className="form-control" />
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
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        
        {
        
        }        
        
        <select id="country" name="country" className="form-control"  ></select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {false && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;