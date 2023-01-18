/* Jest Test for Application */
import React from "react";

import { render, cleanup, waitForElement, fireEvent } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

it("changes the schedule when a new day is selected", async () => {
  // render(<Application />);
  const { getByText } = render(<Application />);

  // Promise chain way
  // return waitForElement(() => getByText("Monday")).then(() => {
  //   fireEvent.click(getByText("Tuesday")); // Fire the click event on "Tuesday"
  //   expect(getByText("Leopold Silvers")).toBeInTheDocument(); // Verify the text is in the document
  // });

  // async/await way
  await waitForElement(() => getByText("Monday"));
  fireEvent.click(getByText("Tuesday"));
  expect(getByText("Leopold Silvers")).toBeInTheDocument();
});
