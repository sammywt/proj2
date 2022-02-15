import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Params } from "react-router";


const CandidateInfo = ({candidateData}) => {
   
    return(
       <ul>
           <li>ADDRESS: {candidateData.mailing_address}</li>
           <li>CITY: {candidateData.mailing_city}</li>
           <li>STATE: {candidateData.mailing_state}</li>
           <li>ZIP: {candidateData.mailing_zip}</li>
           <li>WEBSITE: {candidateData.url}</li>
           <li>FACEBOOK: {candidateData.facebook_url}</li>
           <li>TWITTER: {candidateData.twitter_user}</li>
       </ul>
    )
}

export default CandidateInfo;