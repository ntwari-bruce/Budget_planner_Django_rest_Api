import React from 'react';
import { useState } from 'react';

const Search = ({FilteredResult}) => {
    const[query, setQuery] = useState('');

    const handleSearch = () =>{
        fetch(`http://127.0.0.1:8000/budget_planner/search-expenses/?q=${query}`)
        .then((response) => {
            return response.json();
        }).then(data => {
            FilteredResult(data);
        }).catch((error) => {
            console.error("unable to fetch the results");
        });
    }
    return ( 
        <div className="custom-width1 mx-auto">
            <input
                className="form-control rounded"
                type="search"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
             />
             <div className="pt-1">
              <button className="btn btn-primary pt-1" onClick={handleSearch}>Search</button>
             </div>
        </div>
     );
}
 
export default Search;