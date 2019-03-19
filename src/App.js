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
              key:null,
              name: null,
              author: null,
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
              
             /* const results = Object.keys(data.items)
                    .map(key => {
                    this.setState({
                        results: [this.state.results.key, key],
                        results: [this.state.results.name, data.items[key].volumeInfo.title], 
                        results: [this.state.results.author, data.items[key].volumeInfo.authors] 
                    })
                    })*/
            for(let i = 0;i<data.items.length;i++){
                this.setState({
                    results: [this.state.results.key, i],
                    results: [this.state.results.name, data.items[i].volumeInfo.title], 
                    results: [this.state.results.author, data.items[i].volumeInfo.authors]  
                 })
                 console.log('res', this.state.results)
                 console.log('tit', data.items[i].volumeInfo.title)
                 console.log('aut', data.items[i].volumeInfo.authors)
            }
            
          })
      }
      handleTextChange = (text) => {
        this.setState({searchText:"q="+text})
      }
      filterPrint = (printType) => {
          this.setState({filterP:"&printType="+printType})
      }
      filterBook = (bookType) => {
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