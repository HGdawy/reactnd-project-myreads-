import React , {Component} from 'react'
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { getAll } from './BooksAPI'
import BookSearch from './BookSearch'
import Current from './Current.js'
import Want from './Want.js'
import Read from './Read.js'

import './App.css'

class BooksApp extends Component {
  state = {
    books:[],
    showSearchPage: false
  }
  updateSection(){
    getAll().then(
      data => {
        this.setState({books: data})
      }
    )
  }

  componentDidMount(){
   
    getAll().then(
      data => {
        this.setState({books: data})
      }
    )
    }
  render() {
    return (
      <Router forceRefresh={true}>
        <div>
          <Switch>
            <Route path="/search">
              <BookSearch  books={this.state.books} />
            </Route>
            <Route path="/">
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                     <div>
                       
                       <div>
                         <Current books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                         <Want books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                         <Read books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                         </div>
                        </div>
                         <Link to='/search'>
                           <div className="open-search">
                             <button >Add a book</button>
                             </div>
                              </Link>
                              </div>
                              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
                            }
}

export default BooksApp
