import { Link } from "react-router-dom"

const SearchFail = () => {

    return(
        <div>
            <h1>WHOOPS</h1>
            <p>Looks like some incorrect data was entered in the search field. Double check to make sure the FEC ID is for the correct election type</p>
            <h6>For example: Bernie Sanders FEC ID for the Vermont gubernatorial race (2018) would be different from the FEC ID for the presidential election (2016, 2020)</h6>
            <Link to='/'>BACK TO HOME</Link>
        </div>
    )
}

export default SearchFail;