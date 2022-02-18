


const AboutProPublica = () => {
    return (
        <div>
            <h2>ProPublica Campaign Finance API</h2>

            <a href='https://projects.propublica.org/api-docs/campaign-finance/' target='_blank' rel="noopener noreferrer" >WEBSITE</a>
            <br />
            <a href ='https://projects.propublica.org/api-docs/campaign-finance/candidates/' target='_blank' rel="noopener noreferrer">CANDIDATE DOCUMENTATION</a>
            <br />
            <a href='https://projects.propublica.org/api-docs/campaign-finance/ies/' target='_blank' rel="noopener noreferrer">EXPENDITURE DOCUMENTATION</a>
            <h3>OVERVIEW</h3>
            <p>Using the Campaign Finance API, you can retrieve data from United States Federal Election Commission filings and other sources. The API, which originated at The New York Times in 2008, covers summary information for candidates and committees, as well as certain types of itemized data. This document describes the requests that users can make of the API and the responses that it returns.</p>
            <h3>SCOPE</h3>
                <li>Candidate and committee data: 1980–present</li>
                <li>Committee contributions: 1987/88–present</li>
                <li>Congressional summary financial data: 2000–present (even-numbered years)</li>
                <li>Presidential campaign data: 2008–present (even-numbered years)</li>
                <li>Electronic filings: 2001–present</li>
                <li>Paper filings: 1999–present</li>
                <li>Independent Expenditures: 2009–present</li>
                <li>48-hour notices of contributions/loans received: 2010-present</li>
                <li>Lobbyist bundler data: 2012-present</li>
        </div>
    )
}

export default AboutProPublica;