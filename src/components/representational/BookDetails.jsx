import React from "react";
import { Link } from "react-router-dom";

const BookDetails = ({book}) => {
    return (
      book &&( 
       <div>
        <h1>{book.bookName}</h1>
        <h1>{book.writer}</h1>
        <p>{book.description}</p>
       </div> 
        )        
      )
    
}
export default BookDetails;