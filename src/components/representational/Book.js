import React from "react";
import '../../stylesheet/Book.css'
import { Link } from "react-router-dom";


const Book = ({book, selectedBookHandler}) => {
    return(
     <Link to={'/'+book.id} style={{textDecoration:'none', color:'orange'}}>
      <div className="Book" onClick={()   =>selectedBookHandler(book.id)}>
       <h2>Book Name : {book.bookName}</h2>
       <h2> Book Writer : {book.writer} </h2>
      </div>
     </Link>
    )
}
export default Book;