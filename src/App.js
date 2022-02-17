import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import Form from './components/Form'
import CandidateDetails from './components/CandidateDetails';
import CandidateData from './components/CandidateData';
import ExpenditureData from './components/ExpenditureData';


function App() {

  const [fecId, setFecId] = useState("");
  const [cycleYear, setCycleYear] = useState("");
  const [candidate, getCandidate] = useState([]);
  const [expenditures, getExpenditures] = useState([]);


  const urlBase = 'https://api.propublica.org/campaign-finance/v1/'

  const urlMiddle = '/candidates/';

  let url = `${urlBase}${cycleYear}${urlMiddle}${fecId}.json`

  const urlEnd = '/independent_expenditures.json'

  let urlSpending = `${urlBase}${cycleYear}${urlMiddle}${fecId}${urlEnd}`
  
      const handleSubmit = (e) => {
          e.preventDefault();
          
          fetch(url, {
              headers: {
                "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
              }
            })
              .then((response)=>response.json())
              .then((data) => getCandidate(data.results))
              .catch(() => console.log('data fetch failure'));

              fetch(urlSpending, {
                  headers: {
                    "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                  }
                })
                  .then((response)=>response.json())
                  .then((data) => getExpenditures(data?.results))
                  .catch(() => console.log('Second data fetch failure'))

      }


  return (
    <div className="App">      
    <h1><Link to='/'>Campaign Finance Tracker</Link></h1>
    <h5>data courtesy of ProPublica</h5>
    <hr />
        <a href='https://www.fec.gov/data/candidates/?has_raised_funds=true&is_active_candidate=true' target='_blank' rel="noopener noreferrer">Get FEC ID Number</a>
        <br />
      {/* <Form candidate={candidate} getCandidate={getCandidate} fecId={fecId} setFecId={setFecId} expenditures={expenditures} getExpenditures={getExpenditures} handleSubmit={handleSubmit}/> */}

      <CandidateData 
      candidate={candidate}
      />
      
      <Routes>
        <Route path='/' element={<Form 
        getCandidate={getCandidate} 
        fecId={fecId} 
        setFecId={setFecId} 
        expenditures={expenditures} 
        getExpenditures={getExpenditures} 
        handleSubmit={handleSubmit}
        cycleYear={cycleYear}
        setCycleYear={setCycleYear}
        />} />
        <Route path='/ContactInfo/'  
        element= {<CandidateDetails 
        candidate={candidate}
        />} />
      </Routes>
      <ExpenditureData 
      expenditures={expenditures} 
      />
    </div>
  );
}

export default App;
