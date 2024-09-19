import React, {Component} from "react";
import Book from "../representational/Book";

class BookList extends Component{

  render(){
    
    return (
      this.props.books.map((book, index)=>{
          return(
            <Book book={book} key = {book.id} selectedBookHandler={this.props.selectedBookHandler}/>
          );
        })
     );
  }
     
}

export default BookList;


