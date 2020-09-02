import React from "react";
import CommonBtn from "../../Common/Button";
import CommonInputText from "../../Common/InputText";

function Search() {

  return <div>
      <CommonInputText label="Enter Book Name" id="name"/>
      <CommonBtn name="Search"/></div>;
}


export default Search;