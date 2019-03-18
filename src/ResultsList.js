import React from 'react';
import './ResultsList.css';
import ResultItem from './ResultItem';


class ResultsList extends React.Component{
    render(){
        //console.log('res', this.props.results[0].props)
        const books = this.props.results;
        const resultsList = Object.keys(books)
        .map(key => <ResultItem 
                            className="result-item"
                            name={books[key].name}
                            author={books[key].author}
                            summary={books[key].summary}
                            price={books[key].price}
                            key={key}/>)
        return(
            <ul className="results-list">
                {resultsList}
            </ul>
        )
    }
}
export default ResultsList;