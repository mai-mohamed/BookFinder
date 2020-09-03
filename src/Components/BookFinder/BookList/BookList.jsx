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
        props.bookData.map((book) => <BookCard bookTitle={book.id} />)}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bookData: state.BookReducer.books,
  };
};

export default connect(mapStateToProps)(BookList);
