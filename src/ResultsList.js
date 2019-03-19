import React from 'react';
import './ResultsList.css';
import ResultItem from './ResultItem';


class ResultsList extends React.Component{
    render(){
        const books = this.props.results;
       /* const resultsList = Object.keys(books)
        .map(key => <ResultItem 
                            className="result-item"
                            name={books[key].name}
                            author={books[key].author}
                            summary={books[key].summary}
                            price={books[key].price}
                            key={key}/>)
        console.log('res', books[0].name)*/
        return(
            <ul className="results-list">
            </ul>
        )
    }
}
export default ResultsList;