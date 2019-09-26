import React from "react";
import CardC from "../Flexi/CardC";
import Header from "../Flexi/Header";
import CardsC from "../Flexi/CardsC";
import TextF from "../Flexi/TextF";
import Button from "../Flexi/Buttons";
import RadioG from "../Flexi/RadioG";

const Flexi = props => {
  let { items = [] ,handleFieldChange,handleOnSubmit} = props;
  console.log(props, "items");
  var nishant = items;
  console.log(nishant, "var");

  const FlexiConfig = item => {
    if (item.type === "Card") {
      console.log(item, "Common");
      let isChild = "children" in item;
      if (isChild) {
        console.log(item.children, "Insidechild");
        return (
          <CardC propsData={item.props}>
            {item.children.items.map((Data, Index) => {
              return <div>{FlexiConfig(Data)}</div>;
            })}
          </CardC>
        );
      } else {
        return <CardC propsData={item.props} />;
      }
    }
    if (item.Type === "Cards") {
      return <CardsC propsData={item.props} />;
    }
    if (item.type === "Header") {
      console.log("Header is calling");
      return <Header propsData={item.props} />;
    }
    if (item.type === "TexField") {
      console.log(item.type, "TextField is calling");
      return <TextF propsData={item.props} handleOnSubmit={handleOnSubmit} handleFieldChange={handleFieldChange}/>;
    }

    if (item.type === "RadioGruop") {
      console.log(item.type, "Radio is calling");
      return <RadioG propsData={item.props} handleFieldChange={handleFieldChange}/>;
    }
    if (item.type === "Button") {
      console.log(item.type, "Button is calling");
      return <Button propsData={item.props} handleOnSubmit={handleOnSubmit}/>;
    }
  };
  return <div>{nishant.map((item, index) => FlexiConfig(item))}</div>;
};
export default Flexi;
