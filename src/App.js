import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import {useState} from 'react';
import Form from './components/Form'
import CandidateDetails from './components/CandidateDetails';
import CandidateData from './components/CandidateData';
import ExpenditureData from './components/ExpenditureData';
import AboutProPublica from './components/AboutProPublica';
// import './.env';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  const [fecId, setFecId] = useState("");
  const [cycleYear, setCycleYear] = useState("");
  const [candidate, getCandidate] = useState([]);
  const [expenditures, getExpenditures] = useState([]);

  //consider adding network logic (API call) into its own file and passing it here (lines 18-46)
  const urlBase = 'https://api.propublica.org/campaign-finance/v1/'
  const urlMiddle = '/candidates/';
  let url = `${urlBase}${cycleYear}${urlMiddle}${fecId}.json`
  const urlEnd = '/independent_expenditures.json'
  let urlSpending = `${urlBase}${cycleYear}${urlMiddle}${fecId}${urlEnd}`
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          //can create and set state to is processing
          await fetch(url, {
            //turn headers into a variable to call
              headers: {
                "X-Api-Key": process.env.REACT_APP_API_KEY
              }
            })
              .then((response)=>response.json())
              .then((data) => getCandidate(data?.results))
              .then(() =>{
                fetch(urlSpending, {
                headers: {
                  "X-Api-Key": process.env.REACT_APP_API_KEY
                }
              })
                .then((response)=>response.json())
                .then((data) => getExpenditures(data?.results))
                .catch(() => console.log('Second data fetch failure'))
            })
                .catch(() => console.log('Data fetch failure'))
              

              // fetch(urlSpending, {
              //     headers: {
              //       "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
              //     }
              //   })
              //     .then((response)=>response.json())
              //     .then((data) => getExpenditures(data?.results))
              //     .catch(() => console.log('Second data fetch failure'))

      }


  return (
    <div className="App">      
        <h1><Link to='/'>Campaign Finance Tracker</Link></h1>
        <h5>data courtesy of ProPublica</h5>
        <h6><Link to='/propublica'>about</Link></h6>
        <hr />
        <br />
        <Routes>
          <Route path='/' element={<div><CandidateData candidate={candidate} /><Form 
          getCandidate={getCandidate} 
          fecId={fecId} 
          setFecId={setFecId} 
          expenditures={expenditures} 
          getExpenditures={getExpenditures} 
          handleSubmit={handleSubmit}
          cycleYear={cycleYear}
          setCycleYear={setCycleYear}
          /><ExpenditureData expenditures={expenditures}/></div>} />
          <Route path='/propublica' element= {<AboutProPublica />}/>
          <Route path='/ContactInfo'  
          element= {<CandidateDetails 
          candidate={candidate}
          />} />
        </Routes>
    </div>
  );
}

export default App;
