import React from 'react';
import SearchInput from './SearchInput';
import Filter from './Filter';

class SearchBar extends React.Component{

    render(){
        console.log('func', this.props.onSearch)
        return(
            <section>   
                <SearchInput 
                    onSearch={this.props.onSearch}
                    onChange={this.props.onChange} />
                <Filter
                    onPrintChange={this.props.onPrintChange}
                    onBookChange={this.props.onBookChange} />
            </section>
        )
    }
}
export default SearchBar;