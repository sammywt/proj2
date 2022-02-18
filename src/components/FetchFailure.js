import { Link } from "react-router-dom"


const FetchFailure = () => {

    return (
        <div>
            <h2>Whoops</h2>
            <h4>looks like your info doesn't match</h4>
            <h3>make sure the ID matches the office being run for (EX: a presidential candidate who previously ran for senate will have a unique id for the senate race versus the presidential race)</h3>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default FetchFailure