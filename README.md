# Project 2

### Campaign finance transparency site using nonprofit **ProPublica** API

## REQUIREMENTS
- Be a working, interactive, React application.
- Include data from a third-party API.
- TRY OUT your API in the browser by making an fetch request before you get too emotionally invested in it, to make sure it works the way you think it does...YOU ARE REQUIRED TO SHOW US YOU CAN RECEIVE THE DATA FOR YOUR PROPOSAL
- Include React Router with at least 2 routes
- Have at least 5 separate components, using a readable file structure.
- Be built using Create React App.
- Built mobile first
- Implement responsive design using flexbox, grid, or another css framework.
- Use React Hooks
- Be deployed on github pages https://github.com/gitname/react-gh-pages

---

### GOAL

Hoping to make an easy to use interface that enables a user to quickly see where money is coming from and where it is being spent for political campaigns during election cycles

- ability to select an election cycle to display relevant candidates
- select a candidate to then see information relevant finances relating to election efforts
- see money that was spent in the interest of electing or blocking said candidate from being elected office, as well as the organizations handling said funds
- see the candidates relevant social media and mailing information to contact them if desired

---

### Design

- simple, information should be the central focus with little distraction

- red and blue colors seem relevant

--- 

## API information

API KEY (ProPublica campaign finance transparency API) (returns data in JSON or XML) (5000 requests per day):

n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT

#### INDEPENDENT EXPENDITURES section displays information based on election cycle and money spent towards a campaign

    - which candidate the money was spent on the behalf of and which office the candidate was in the running for
    {'candidate_name'} {'office'}

    - the federal exchange comission comittee name handling the money (often a PAC)
    {'fec_committee_name'}

    - the amount paid, the organization the money went to, and the purpose of the payment
    {'purpose'} {'payee'} {'amount'}

    - if the money was spent in support of or in opposition to the specified candidate
    {'support_or_oppose' (value is string- "S" for support, "O" for oppose)}


 #### CANDIDATES section shows (based on election cycle (2016, 2020, etc..))...

- a candidates basic political info 
    {'name'} {'party'} {'district' (null for certain positions EX- president)} {'other_cycles' (other times ran for office in any sector)}

- a candidates mailing address 
    {'mailing_address'} + {'mailing_city'} + {'mailing_state'} + {'mailing'}

- a candidates social media and website
    {'facebook_url'} {'twitter_user'} {'url'}

- a candidates contributions from both individuals and from PACs
    {'total_from_individuals'} {'total_from_pacs'} {'total_contributions'}

- a candidates cash at the beginning of the election cycle and at the end of the election cycle
    {'begin_cash'} {'end_cash'}

GET https://api.propublica.org/campaign-finance/v1/{cycle}/independent_expenditures

Example call?
curl "https://api.propublica.org/campaign-finance/v1/2016/independent_expenditures.json"
  -H "X-API-Key: PROPUBLICA_API_KEY"

GET https://api.propublica.org/campaign-finance/v1/{cycle}/candidates/search

- parameters are 4 digit cycle year (2010 - 2020) or the first or last name of a candidate 

curl "https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Wilson"
  -H "X-API-Key: PROPUBLICA_API_KEY"

--- 
### time frame

- pulling data from API: 4 HRS high priority
- displaying cycle years on page: 6 hrs high priority
- click event to pull candidates from cycle year: 6 HRS high priority
- contributions component: 6 HRS high priority
- spending component: 6 HRS high priority
- contact component: 4 HRS low priority
- layout and styling: 4 HRS medium priority
- forms: 6 HRS lowest priority

---

#### component layout

![reference 1][1]

#### visual reference 1

![reference 2][2]

#### visual reference 2

![reference 3][3]


[1]: src/proj-sketches/IMG_2117.jpeg

[2]: src/proj-sketches/IMG_2118.jpeg

[3]: src/proj-sketches/IMG_2119.jpeg




