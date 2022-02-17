import { useState } from "react";
import { Link } from "react-router-dom";
import CandidateInfo from "./CandidateDetails";
import { Route } from "react-router";
import { Routes } from "react-router";
import { Navigate } from "react-router";
import ExpenditureInfo from "./ExpenditureInfo";



const Form = ({fecId, setFecId, handleSubmit, cycleYear, setCycleYear}) => {
   
    return(
        <div>
            <form className='forms' onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID : 
                <input 
                type = "text" 
                value={fecId}
                onChange={(e) => setFecId(e.target.value)} 
                />
                
            </label>
            <label>Enter cycle year :
                <input 
                type = "text"
                value={cycleYear}
                onChange={(e) => setCycleYear(e.target.value)} 
                />
            </label>
            <input className='button'
            type='submit'
            />
            </form>  
             
        </div>
    )
}

export default Form;

