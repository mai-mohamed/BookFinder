import React from "react";
import { TextField } from "@material-ui/core";
function CommonInputText({ id, label }) {
  return (
    <div>
      <TextField id={id} label={label} />
    </div>
  );
}

export default CommonInputText;
