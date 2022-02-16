import { Link } from "react-router-dom"
import ExpenditureDetails from "./ExpenditureInfo";
import { useState } from "react";
import SingleExpenditure from "./SingleExpenditure";


const ExpenditureData = ({expenditures}) => {
  
    return (
        expenditures.map((i, index) => (
          <SingleExpenditure i={i} key={index}/>
        ))
    )
}

export default ExpenditureData;

//https://devdojo.com/krissanawat101/3-ways-for-toggle-a-class-in-react`