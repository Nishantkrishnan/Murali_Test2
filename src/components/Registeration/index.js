import React from "react";
import Flexi from "../Home/Flexi";
import hoc from "../HighOrder";
class Registeration extends React.Component {
  render() {
    const { config1,handleOnSubmit,handleFieldChange } = this.props;

    console.log(config1, "props");
    return <Flexi items={config1} handleOnSubmit={handleOnSubmit} handleFieldChange={handleFieldChange} />;
  }
}
export default hoc()(Registeration);
