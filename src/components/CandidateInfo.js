import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Params, useParams } from "react-router";


const CandidateInfo = (props) => {
   let params = useParams()
    return(
       <ul>
           <li>ADDRESS: {props.mailing_address}</li>
       </ul>
    )
}

export default CandidateInfo;