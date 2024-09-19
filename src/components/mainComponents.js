
import React, {Component} from "react";
import bookLists from "../assets/books";
import BookList from "./lists/bookList";
import NewBook from "./representational/NewBook";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import BookDetails from "./representational/BookDetails";




class MainComponent extends Component{
  constructor(props){
    super(props);
    this.state ={
      books : bookLists,
      selectedBook:null
    }
  }
 selectedBookHandler = (bookId) => {
             const book = this.state.books.filter(book => book.id == bookId)[0];
             this.setState({
              selectedBook:book
             })
 }
      render(){

    const books = <BookList 
    books={this.state.books} selectedBookHandler={this.selectedBookHandler}
    />;
    
        return (
              <div className="App">
                <nav className="nav-bar">
                  <ul>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/new-book'>New Book</NavLink>
                    </li>
                  </ul>
                </nav>
                 <h1>Book List</h1>
                <Routes>
                 <Route path="/" element={<Navigate to='/books'/>}></Route>
                 <Route path="/books" element={books}></Route>
                 <Route path="/new-book" element={ <NewBook/>}></Route>
                 <Route path="/:id" element={   <BookDetails book={this.state.selectedBook}/>}></Route>
                </Routes>
              </div>
            );
      }
}


export default MainComponent;