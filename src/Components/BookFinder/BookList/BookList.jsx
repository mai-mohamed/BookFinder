import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookCard from "../BookCard/BookCard";

function BookList(props) {
  useEffect(() => {
    console.log(props.bookData);
  });
  return (
    <div>
      {props.bookData &&
        props.bookData.map((book) => (
          <BookCard key={book.id}
            bookTitle={book.volumeInfo.title}
            bookImg={book.volumeInfo.imageLinks.smallThumnail}
            bookPublisher={book.volumeInfo.description}
          />
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bookData: state.BookReducer.books,
  };
};

export default connect(mapStateToProps)(BookList);
