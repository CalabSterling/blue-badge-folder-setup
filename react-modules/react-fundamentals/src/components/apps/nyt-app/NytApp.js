import React, {useState} from 'react';
import NytResults from './NytResults';

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = '7Xo2oXrhPdwGAWPv6t4FR7O4MB1tY2j8'

const NytApp = () => {
    const [search, setsearch] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [pageNumber, setpageNumber] = useState(0);
    const [results, setresults] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
            .then(res => res.json())
            .then(data => setresults(data.response.docs))
            .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        setpageNumber(0);
        event.preventDefault();
        fetchResults();
    }

    const changePageNumber = (event, direction) => {
        event.preventDefault()
        if(direction === 'down') {
            if (pageNumber > 0) {
                setpageNumber(pageNumber - 1);
                fetchResults();
            }
        }
        if (direction === 'up') {
            setpageNumber(pageNumber + 1);
            fetchResults();
        }
    }

    return ( 
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e) }>
                    <span>Enter a single search term (required) : </span>
                    <input type='text' name='search' onChange={(e) => setsearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setstartDate(e.target.value) } />
                    <br />
                    <span>Enter a end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setendDate(e.target.value) } />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
                {
                    results.length > 0 ? <NytResults results={results} changePage={changePageNumber}/> : null
                }
            </div>
        </div>
     );
}
 
export default NytApp;