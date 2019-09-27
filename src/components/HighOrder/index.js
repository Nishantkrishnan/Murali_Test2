import React from "react";

const hoc = () => Component => {
  class HighOrder extends React.Component {
    state = {
      list: {},
      flexConfigForHome: {
        items: [
          {
            type: "Card",
            props: {
              label: "Good work labs",
              horozintalAlign: "left"
            }
          },
          {
            type: "Header",
            props: {
              label: "Technology",
              horozintalAlign: "left"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey"
            },
            children: {
              items: [
                {
                  Type: "Cards",
                  props: {
                    cards: [
                      {
                        label: "Java",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "orange"
                      },
                      {
                        label: "React",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "blue"
                      },
                      {
                        label: "Node",
                        horizontalAlign: "center",
                        verticalAlign: "center",
                        color: "pink"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            type: "Header",
            props: {
              label: "Drop Message",
              horozintalAlign: "left"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey",
              horizontalAlign: "center",
              verticalAlign: "center"
            },
            children: {
              items: [
                {
                  type: "TexField",
                  props: {
                    inputType: "text",
                    label: "Name",
                    name: "name"
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "email",
                    label: "Email",
                    name: "email"
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "number",
                    label: "Mobile",
                    name: "Message"
                  }
                },
                {
                  type: "Button",
                  props: {
                    label: "Submit"
                  }
                }
              ]
            }
          }
        ]
      },

      flexConfigForRegistration: {
        items: [
          {
            type: "Header",
            props: {
              label: "Registration",
              horozintalAlign: "center",
              verticalAlign: "center"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey",
              horozintalAlign: "left"
            },
            children: {
              items: [
                {
                  type: "TexField",
                  props: {
                    inputType: "text",
                    label: "Name",
                    name: "name"
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "email",
                    label: "Email",
                    name: "email"
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "number",
                    label: "Mobile",
                    name: "Message"
                  }
                },
                {
                  type: "RadioGruop",
                  props: {
                    label: "Gender",
                    name: "gender",
                    options: [
                      {
                        label: "Male"
                      },
                      {
                        label: "Female"
                      }
                    ]
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "password",
                    label: "Password",
                    name: "password"
                  }
                },
                {
                  type: "TexField",
                  props: {
                    inputType: "password",
                    label: "Confirm Password",
                    name: "confirmPassword"
                  }
                },
                {
                  type: "Button",
                  props: {
                    label: "Register"
                  }
                }
              ]
            }
          }
        ]
      }
    };

    handleOnSubmit = e => {
      e.preventDefault();
      let { list } = this.state;
      console.log(this.state.list);
    };
    handleFieldChange = event => {
      let { list } = this.state;
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({
        list: {
          ...list,
          [name]: value
        }
      });
    };
    render() {
      const { list, flexConfigForHome, flexConfigForRegistration } = this.state;
      const { handleOnSubmit, handleFieldChange } = this;
      console.log(this);
      return (
        <Component
          handleOnSubmit={handleOnSubmit}
          config={flexConfigForHome.items}
          config1={flexConfigForRegistration.items}
          handleFieldChange={handleFieldChange}
        />
      );
    }
  }
  return HighOrder;
};
export default hoc;
