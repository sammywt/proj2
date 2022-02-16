import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import Form from './components/Form'
import CandidateInfo from './components/CandidateInfo';
import CandidateData from './components/CandidateData';


function App() {

  const [fecId, setFecId] = useState("");
  const [candidate, getCandidate] = useState([]);
  const [expenditures, getExpenditures] = useState([]);


  const urlBase = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

  let url = `${urlBase}${fecId}.json`

  const urlEnd = '/independent_expenditures.json'

  let urlSpending = `${urlBase}${fecId}${urlEnd}`
  
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
    <h1>Campaign Finance Tracker</h1>
    <hr />
        <a href='https://www.fec.gov/data/candidates/?has_raised_funds=true&is_active_candidate=true' target='_blank' rel="noopener noreferrer">Get FEC ID Number</a>
        <br />
      {/* <Form candidate={candidate} getCandidate={getCandidate} fecId={fecId} setFecId={setFecId} expenditures={expenditures} getExpenditures={getExpenditures} handleSubmit={handleSubmit}/> */}

      <CandidateData candidate={candidate}/>
      <Routes>
        <Route path='/' element={<Form candidate={candidate} getCandidate={getCandidate} fecId={fecId} setFecId={setFecId} expenditures={expenditures} getExpenditures={getExpenditures} handleSubmit={handleSubmit}/>} />
        <Route path='/ContactInfo/'  element= {<CandidateInfo candidate={candidate}/>} />
      </Routes>
    </div>
  );
}

export default App;
