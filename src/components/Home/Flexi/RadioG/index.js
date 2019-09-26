import React from "react";
import { Typography } from "@material-ui/core";
const RadioG = props => {
  let { propsData,handleFieldChange } = props;
  let { options } = propsData;
  return (
    <div>
      <div>
        <Typography variant="h6" color="inherit">
          {propsData.label}:
        </Typography>
        <div>
          {options.map(option => {
            return (
              <React.Fragment>
                <input
                  name={propsData.name}
                  type="radio"
                  value={option.label}
                  onChange={propsData.handleFieldChange}
                />
                {option.label}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RadioG;
