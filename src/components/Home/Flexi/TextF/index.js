import React from "react";
import TextField from "@material-ui/core/TextField";

class TextF extends React.Component {
  render() {
    let { propsData,handleFieldChange } = this.props;
    console.log(propsData, "texts");

    return   <TextField
    id="outlined-password-input"
    label={propsData.label}
   name={propsData.name}
    type={propsData.inputType}
    autoComplete="current-password"
    margin="normal"
    variant="outlined"
    onChange={handleFieldChange}
  />
  }
}
export default TextF;
