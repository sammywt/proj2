import { Link } from "react-router-dom";

const Form = ({fecId, setFecId, handleSubmit, cycleYear, setCycleYear}) => {
   
    return(
        <div>
             <a href='https://www.fec.gov/data/candidates/?has_raised_funds=true&is_active_candidate=true' target='_blank' rel="noopener noreferrer" className='get-FEC'>Get FEC ID Number</a>
        <br />
            <form className='forms' onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID</label>
                <input className='text-input'
                type = "text" 
                value={fecId}
                onChange={(e) => setFecId(e.target.value.toUpperCase())} 
                />
                
           
            <label>Enter cycle year</label>
                <input className='text-input'
                type = "text"
                value={cycleYear}
                onChange={(e) => setCycleYear(e.target.value)} 
                />
                <br />
            <input className='button'
            type='submit'
            />
            </form>  
             
        </div>
    )
}

export default Form;

