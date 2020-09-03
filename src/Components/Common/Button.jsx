import React from "react";
import { Button } from "@material-ui/core";

function CommonBtn({ name, type }) {
  return (
    <div>
      <Button variant="contained" color="secondary" type={type}>
        {name}
      </Button>
    </div>
  );
}

export default CommonBtn;
