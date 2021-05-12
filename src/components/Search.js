import React, {useState, useEffect} from 'react';
import axiox from 'axios';
import axios from 'axios';


const Search = () =>{

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(async () =>{

        const SearchWiki = async () => {
            const { data } = await axios.get('http://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };
        if(term){
            SearchWiki();
        }

    }, [term]);

    const renderedReasults = results.map( (result) => {
        return <div key={result.pageid} className='item'>
            <div className='content'>
                {result.title}
            </div>
            <div>
            {result.snippet}
            </div>
        </div>
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <lebel>Enter Search Term</lebel>
                    <input 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className='input' 
                    />
                </div>
            </div>
            <div className="ui called list " >
                {renderedReasults}
            </div>
        </div>
    );
};

export default Search;