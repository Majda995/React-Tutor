import React from "react";

const clickHandler = () => {
  alert("Awaaaa");
};
const oneComplexExample = (author) => {
  console.log(author);
};
const Book = (props) => {
  const { img, title, author } = props;
  //atribute, eventHandler
  // onClick, onMouseOver
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img className="image" src={img} alt=""></img>
      <h1 onClick={() => alert(title)}> {title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={oneComplexExample(author)}>
        on more complex example
      </button>
    </article>
  );
};

export default Book;
