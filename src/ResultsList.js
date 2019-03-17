import React from 'react';
import './ResultsList.css';
import ResultItem from './ResultItem';


class ResultsList extends React.Component{
    render(){
        
        const books = this.props.results;
        const resultsList = Object.keys(books.results)
        .map(key => <ResultItem 
                            className="result-item"
                            name={books.results[key].name}
                            author={books.results[key].author}
                            summary={books.results[key].summary}
                            price={books.results[key].price}
                            key={key}/>)
        return(
            <ul className="results-list">
                {resultsList}
            </ul>
        )
    }
}
export default ResultsList;