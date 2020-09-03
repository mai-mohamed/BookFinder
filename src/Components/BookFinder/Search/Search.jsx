import React from "react";
import { Grid } from "@material-ui/core";
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
        <Grid container>
          <Grid item xs={4}>
            <CommonInputText
              label="Book Name"
              name="name"
              handleChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={4}>
            <CommonBtn name="Search" type="submit" />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default connect(null, { searchAction })(Search);
