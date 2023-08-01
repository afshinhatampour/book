import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
    {
        id: 1,
        author: 'Rebecca Yarros',
        title: 'Fourth Wing (The Empyrean, 1)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg'
    },
    {
        id: 2,
        author: 'Rebecca Yarros',
        title: 'Iron Flame (The Empyrean, 2)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg'
    }
];

const BookList = () => {
    return <section className="booklist">
        <EventExamples/>
        {books.map((book) => {
            return (<Book {...book} key={book.id}/>)
        })}
    </section>
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e.target.name)
        console.log('handle form input')
    }
    const handleButtonClick = () => {
        alert('handle button click')
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }
    return <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical form</h2>
            <input
                onChange={handleFormInput}
                type="text"
                name='product'
                style={{margin: '1rem 0'}}
            />
            <button onClick={handleButtonClick}>click me</button>
        </form>
    </section>
}

const Book = (props) => {
    const {img, title, author} = props;
    return (<article className="book">
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
