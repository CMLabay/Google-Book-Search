import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component{
    render(){
        console.log('func', this.props.onChange)
        return(
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    name="search"
                    onChange={(e) => this.props.onChange(e.target.value)} />
                <button 
                    type="submit"
                    onClick={this.props.onSearch}>
                    Search
                    </button>
            </form>
        )
    }
}
SearchInput.defaultProps = {
    onChange: (e) => {},
}
export default SearchInput;