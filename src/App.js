import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import ResultItem from './ResultItem';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          searchText: '',
          filterB: '&filter=full',
          filterP: '&printType=all',
          results: [{
              key:'',
              name: "",
              author: "",
          },
            ],
        };
      }
      handleSearch = (e) => {
          e.preventDefault();
          const searchURL = this.props.url+this.state.searchText+this.state.filterP+this.state.filterB+this.props.apiKey;
          fetch(searchURL)
          .then(response => response.json())
          .then(data => {
              const results = Object.keys(data.items)
                    .map(key => <ResultItem
                                    key={key}
                                    name = {data.items[key].volumeInfo.title}
                                    author={data.items[key].volumeInfo.authors}
                                    />)
              this.setState({results})
              console.log('result',results)
          })
      }
      handleTextChange = (text) => {
        console.log('chhange text', text); 
        this.setState({searchText:"q="+text})
      }
      filterPrint = (printType) => {
          console.log('print type ', printType)
          this.setState({filterP:"&printType="+printType})
      }
      filterBook = (bookType) => {
          console.log('book type', bookType)
          this.setState({filterB:"&filter="+bookType})
      }
    render(){
        return(
            <section>
                <h2>Google Book Search</h2>
                <SearchBar
                    onSearch={this.handleSearch}
                    onChange={this.handleTextChange}
                    onPrintChange={this.filterPrint}
                    onBookChange={this.filterBook} />
                <ResultsList results={this.state.results} />
            </section>
        );
    }
}

export default App