import React, {useEffect,useState} from 'react'
import "./Book.css"
import Book from "./Book";
import axios from 'axios';
const URL ="http://localhost:5000/books";
const fetchHandler = async()=>{
   return await axios.get(URL).then((res)=> res.data);
}
const Books = () =>{
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then(data=>setBooks(data.books));
    

    }, []);
    console.log(books);
    return (
        <div>
            <ul>
                {books && 
                books.map((book, i)=>(
                    <li className='book' key={i}>
                        <Book book={book}/>
                    </li>
                ))}
            </ul>
        </div>
      )
}

  
export default Books;
