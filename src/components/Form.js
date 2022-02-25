
const Form = ({fecId, setFecId, handleSubmit, cycleYear, setCycleYear}) => {
   
    return(
        <div>    
            <form onSubmit={handleSubmit}>
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
            <input className='button'
            type='submit'
            value='$$$'
            />
            </form>  
             
        </div>
    )
}

export default Form;

