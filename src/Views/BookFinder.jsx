import React from "react";
import Search from "../Components/BookFinder/Search/Search";
import BookList from "../Components/BookFinder/BookList/BookList";
import BookHeader from "../Components/BookFinder/BookHeader/BookHeader";

function BookFinder() {
  return (
    <div>
      <BookHeader/>
      <Search />
      <BookList />
    </div>
  );
}

export default BookFinder;
