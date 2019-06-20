import React from "react";
import { storiesOf } from "@storybook/react";
import { color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

storiesOf("Demo|Button", module).add("testing", () => {
  return (
    <div>
      <button onClick={action("clicked")}>Action</button>
    </div>
  );
});

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    () => (
      <Button
        onClick={action("clicked")}
        bg={color("bg", "rebeccapurple", "group1")}
      >
        Hello World
      </Button>
    ),
    { notes: "A simple click button" }
  )

  .addWithJSX("with some background", () => (
    <Button bg="salmon">Hello World Two</Button>
  ));
