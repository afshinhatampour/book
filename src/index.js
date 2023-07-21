import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author: 'Rebecca Yarros',
    title: 'Fourth Wing (The Empyrean, 1)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg'
};
const secondBook = {
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg'
};
const BookList = () => {
    return <section className="booklist">
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
    </section>
}

const Book = ({img, title, author}) => {
    return (<article className="book">
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
