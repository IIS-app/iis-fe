import React, { useState } from "react";
import { ReactDOM } from "react";

export const Starrs = () => {



    return (
        <>
            <h1 className="Starr">STARR Stories!</h1>
                <div>
                    <button className="button is-link">Add a new STARR Story!</button>

                </div>
        </>
    )
}
const searchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const starrStories = [CALLTO BE DATA
        
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0 {
        starrtitles.filter((starrtitle) => {
        return starrtitle.name.match(searchInput);
        });
    }

    return (
        <div>
            <input 
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
        </div>
    ) 
}
