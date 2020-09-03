import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import CommonBtn from "../../Common/Button";
import CommonInputText from "../../Common/InputText";
import { searchAction } from "../../../Store/ActionCreator/SearchActionCreator";

function Search(props) {

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
      props.searchAction(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CommonInputText
          label="Book Name"
          name="name"
          handleChange={formik.handleChange}
        />
        <CommonBtn name="Search" type="submit" />
      </form>
    </div>
  );
}

export default connect(null, { searchAction })(Search);
