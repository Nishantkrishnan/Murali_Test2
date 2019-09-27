let homeConfig = {
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
};
export default homeConfig;
