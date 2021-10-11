import React from "react";
import ReactDom from "react-dom";
import "./styles.css"; // CSS

import { books } from "./books.js";
import Book from "./Book.js";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// const clickHandler = () => {
//   alert("Awaaaa");
// };
// const oneComplexExample = (author) => {
//   console.log(author);
// };
// const Book = (props) => {
//   const { img, title, author } = props;
//   //atribute, eventHandler
//   // onClick, onMouseOver
//   return (
//     <article
//       className="book"
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img className="image" src={img} alt=""></img>
//       <h1 onClick={() => alert(title)}> {title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>
//         reference example
//       </button>
//       <button type="button" onClick={oneComplexExample(author)}>
//         on more complex example
//       </button>
//     </article>
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));

// const Image = () => {
//   return (
//     <img
//       style={{ borderRadius: "20px" }}
//       src="https://images-eu.ssl-images-amazon.com/images/I/51OsiyrR2sL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
//       alt=""
//     ></img>
//   );
// };
// const Title = () => {
//   return <h1> a good Rendez-vous</h1>;
// };
// const Author = () => {
//   return (
//     <h4 style={{  color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem"}}>
//       Abdelmajid Chaker
//     </h4>
//   );
// };
