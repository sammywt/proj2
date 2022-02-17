

const Form = ({fecId, setFecId, handleSubmit, cycleYear, setCycleYear}) => {
   
    return(
        <div>
            <form className='forms' onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID : </label>
                <input className='text-input'
                type = "text" 
                value={fecId}
                onChange={(e) => setFecId(e.target.value)} 
                />
                
           
            <label>Enter cycle year : </label>
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

