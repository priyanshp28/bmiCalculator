import React, { useState } from "react";

export default function Calculator() {
    const handleUpClick = (event) => {
        event.preventDefault();
        var ans= weight/ (height*height);
        setBmi(ans);
        // setHeight('');
        // setWeight('');
      };
      const [height, setHeight] = useState("");
      const [weight, setWeight] = useState("");
      const [bmi, setBmi] = useState("");
  return (
    <>
       <div className="container" >
      <form>
    <legend>BMI CALCULATOR</legend>
    <div class="mb-3">
      <label htmlFor="" class="form-label">weight (in kilograms)</label>
      <input type="text"  class="form-control" value= {weight} onChange={(event)=>{setWeight(event.target.value)}}/>
    </div>
    <div class="mb-3">
      <label htmlFor="" class="form-label">height (in meters)</label>
      <input type="text" class="form-control" placeholder="" value= {height} onChange={(event)=>{setHeight(event.target.value)}}/>
    </div>
    <div class="mb-3">
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleUpClick}>Submit</button>
</form>
     <h3>Your Bmi is: </h3>
     <h2>{bmi}</h2>
      </div>


    </>
  )
}
