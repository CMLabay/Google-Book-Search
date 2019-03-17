import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          searchValue: 'butts',
          results: [{
              name: "Henry I",
              author: "Warren Hollister",
              price: 50.00,
              summary: "The resulting volume is one that will be welcomed by students and general readers alike.",
              picture: ""
          },
              {
              name: "Henry VIII",
              author: "Alison Weir",
              price: 15.50,
              summary: "This is a triumph of historical writing which will appeal equally to the general reader and the serious historian.",
              picture: ""
              }
            ],
        };
      }
      handleSearch(e) {
          console.log('seeeeeeeaaaaaarrrrcccchhhh')
          e.preventDefault();
      }
      handleTextChange(text){
        console.log('chhange text', text);   
      }
      filterPrint(printType){
          console.log('print type ', printType)
      }
      filterBook(bookType){
          console.log('book type', bookType)
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
                <ResultsList results={this.state} />
            </section>
        );
    }
}

export default App