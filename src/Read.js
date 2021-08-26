import React from 'react'
import Book from './book'


function Read  (props) {
    
return (
<div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
        {props.books.map(book => {
        if(book["shelf"] === "read"){
            return <li key={book['id']}>
            <Book 
            title={book.title} 
            authors={book.authors} 
            thumbnail={book["imageLinks"]["thumbnail"]} 
            book={book} 
            bookshelf={book.shelf}
            updateSection={props.updateSection}
            />
            </li>
            }})}
            </ol>
            </div>
            </div>
            )
               
}

export default Read 