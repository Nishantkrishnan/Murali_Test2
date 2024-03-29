import React from "react";
import Button from "@material-ui/core/Button";

class Buttons extends React.Component {
  render() {
    const { propsData,handleOnSubmit } = this.props;
    return (
      <Button variant="contained" color="primary" onClick={handleOnSubmit}>
        {propsData.label}
      </Button>
    );
  }
}
export default Buttons;
