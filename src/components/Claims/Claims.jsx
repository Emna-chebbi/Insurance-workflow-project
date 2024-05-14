import React from 'react';
import './Claims.css';

function Form() {
  return (
    <div>
      <form className="claim-form">
        <p className="claim-title">Write up a claim</p>
        <div className="flex">
          <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>Description details</span>
          </label>
          <label>
            <input required="" type="file" className="input" />
            <span>Upload a file</span>
          </label>
        </div>
        <button className="claim-submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
