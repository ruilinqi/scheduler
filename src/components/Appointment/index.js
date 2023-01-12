import React from "react";
import Header from "./Header";

import "styles.scss";

<article className="appointment"></article>

storiesOf("Appointment", module)
  // The function addParameters can be chained to storiesOf and can be passed an object of parameters.
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  // Add stories by chaining an function for any number of stories that we want to write
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);