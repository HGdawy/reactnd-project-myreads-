import React  from 'react'
import Book from './book'



function Want(props) {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {props.books.map(book => {
          if(book["shelf"] === "wantToRead"){
            return <li key={book.id}>
              <Book 
                title={book.title} 
                authors={book.authors} 
                thumbnail={book["imageLinks"]["thumbnail"]}
                book={book} 
                updateSection={props.updateSection}/>
              
              </li>
            }})}
            </ol>
            </div>
            </div>)}

export default  Want