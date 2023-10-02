import React from "react";
import ReactDom from "react-dom/client";
import Book from "./Book";
import books from'./books.json';


const BookList = () => {
    return (
        <div>
            {books.map((elm)=>{
               return <Book
                image={elm.image} 
                title={elm.title} 
                publisher={elm.publisher} 
                price={elm.price} />
            })}
            
           
        </div>
    )
}
export default BookList;