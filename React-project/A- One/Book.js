import React from "react";
import './Book.css';

const Book=(props)=>{

    const {image,title,publisher,price} = props;

    
    return(
        <div className="book">
            {console.log(props)}
            
            <div className="book-img">
            <img src={image}/>
            </div>
            <div className="book-info">
            <h2>{title}</h2>
            <p className="book-author">{publisher}</p>
            <p className="book-price">{price}</p>
            <button>Add To Cart</button>
        </div>
        </div>
    )
}
export default Book