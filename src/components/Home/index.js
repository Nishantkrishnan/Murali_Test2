import React from "react";
import Flexi from "../Home/Flexi";
import hoc from "../HighOrder";
class Home extends React.Component {
  render() {
    const { config, handleOnSubmit, handleFieldChange } = this.props;
    console.log(config, "props");
    return (
      <Flexi
        items={config}
        handleOnSubmit={handleOnSubmit}
        handleFieldChange={handleFieldChange}
      />
    );
  }
}
export default hoc()(Home);
