import React from 'react'
import { update } from './BooksAPI'



    
function Book(props) {
    
    
   const organizeBooks= async (target) => {
        await update(props.book, target.target.value)
        .then(data => {
            if(props.updateSection){
              props.updateSection()
            }
            
          } ) }

    return (
        
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select onChange={organizeBooks.bind(this)} defaultValue={props.book["shelf"] ? props.book["shelf"] : "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-authors">{props.authors}</div>
        </div>
      
    );
  }

  export default Book