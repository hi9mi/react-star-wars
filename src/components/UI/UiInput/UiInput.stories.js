import { useState } from "react";

import UiInput from "./UiInput";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const handleInputChange = (value) => {
    setValue(value);
  };
  return <UiInput {...args} value={value} onChange={handleInputChange} />;
};

const props = {
  value: "",
  onChange: () => console.log("Input change"),
  placeholder: "Placeholder",
  type: "text",
  classes: "",
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
