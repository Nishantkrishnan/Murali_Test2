import React from "react";
import { Card } from "@material-ui/core";

class CardsC extends React.Component {
  render() {
    let { propsData } = this.props;

    let color=propsData.color;
    console.log(propsData, "Mcards");
    return (
      <div className="card">
        {propsData.cards.map((item, index) => (
          <Card ><span style={{color:color}}>{item.label}</span></Card>
        ))}
      </div>
    );
  }
}
export default CardsC;
