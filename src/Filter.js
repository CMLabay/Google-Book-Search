import React from 'react';
import './Filter.css';

class Filter extends React.Component{
    render(){
        return(
            <div className="filter-options">
                <label htmlFor="print-type">Print Type:</label>
                <select 
                    id="print-type" 
                    name="print-type"
                    onChange={(e) => this.props.onPrintChange(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select 
                    id="book-type" 
                    name="book-type"
                    onChange={(e) => this.props.onBookChange(e.target.value)}>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free eBook</option>
                    <option value="paid-ebooks">Paid eBook</option>
                    <option value="ebooks">eBooks</option>
                </select>
            </div>
        );
    }
}

Filter.defaultProps = {
    onPrintChange: (e) => {},
    onBookChange: (e) => {},
}
export default Filter;