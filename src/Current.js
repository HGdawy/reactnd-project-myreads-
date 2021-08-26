import React from 'react'
import Book from './book'


function Current (props)  {
    const books = props.books
return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map(
                book => { if(book.shelf === "currentlyReading"){
                        return <li key={book.id}>
                        <Book title={book.title}
                        authors={book.authors}
                        thumbnail={book["imageLinks"]["thumbnail"]} 
                        book={book}
                        updateSection={props.updateSection}
                        /> 
                        
                    </li>}})}
            </ol>
        </div>
   </div>
        )
  }
                
 export default Current