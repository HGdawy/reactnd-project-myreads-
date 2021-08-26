import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Book from './book.js'


export default class BookSearch extends Component {
    state = {
        books: [], 
        count: 0,
        userInput: "",
        bookwithshelfs: []
    }
    
    userInput = (input) => {
        this.setState({userInput: input.target.value})
        clearTimeout(this.state)
        this.setState({
             count: setTimeout(() => {
                  this.apiRequest()}, 500 )
                }
                )} 
                async apiRequest() {
                    await search(this.state.userInput)
                    .then(data => {
                        const searchData = data.books
                        if(searchData !== undefined && searchData.error === undefined){
                                
                                const dataProp = this.props.books 
                                let arr = []
                                arr.concat(dataProp)
                                arr = arr.concat(searchData); 
                                
                                for (let index = 0; index < arr.length; index++) {
                                    arr[index].shelf=""
                                    for (let counter = 0; counter < dataProp.length; counter++) {
                                        if (arr[index].id=== dataProp[counter].id){
                                        arr[index].shelf=dataProp[counter].shelf
                                        }
                                    }}
                                    this.setState({books: arr})
                                    console.log(arr)
                        }
                         else {
                        this.setState({books: []})
                        } 
                    })
                }  
    render() {
        return (
        <div className="search-books">
            <div className="search-books-bar">
                <div> 
                    <div>
                        <input type="text" placeholder="Search by title or author"onChange={this.userInput}/>
                    </div>
                        <Link to="/" >
                            <button className="close-search" >Close</button>
                            </Link>
                            <div className="search-books-results">
                                <ol className="books-grid">
                                    {
                                    this.state.books.map(book=> {
                                        return <Book                                     
                                        title={book["title"] ? book["title"] : "No title found"} 
                                        authors={book["authors"] ? book["authors"]:"No author info"} 
                                        book={book} 
                                        thumbnail={book["imageLinks"]? book["imageLinks"]["thumbnail"]:"No image found"} 
                                        key={book['id']}>
                                        
                                            </Book>
                                    })}
                                </ol>
                            </div>
               </div>
            </div>
        </div>
                )}}
