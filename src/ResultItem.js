import React from 'react';
import './ResultItem.css';

class ResultItem extends React.Component{
    render(){
        return(
            <li>
                <h2>{this.props.name}</h2>
                <p id="author">{this.props.author}</p>
                <p id="price">{this.props.price}</p>
                <p id="summary">{this.props.summary}</p>
            </li>

        )
    }
}
export default ResultItem;