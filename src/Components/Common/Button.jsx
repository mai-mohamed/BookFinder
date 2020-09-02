import React from "react";
import {Button} from "@material-ui/core";

function CommonBtn({name}) {
  return (
    <div>
      <Button variant="contained" color="secondary">
        {name}
      </Button>
    </div>
  );
}

export default CommonBtn;
