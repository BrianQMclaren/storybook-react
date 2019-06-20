import { configure, setAddon, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
const req = require.context("../src", true, /\.stories.js$/);

addDecorator(withInfo);
addDecorator(withKnobs);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
