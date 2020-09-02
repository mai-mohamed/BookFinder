import React from "react";
import CommonBtn from "../Components/Common/Button";
import CommonInputText from "../Components/Common/InputText";

function BookFinder() {

  return <div>
      <CommonInputText label="Enter Book Name" id="name"/>
      <CommonBtn name="Search"/></div>;
}


export default BookFinder;
