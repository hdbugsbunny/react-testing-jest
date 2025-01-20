import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  // Render The Component
  render(<App />);

  // Find The Two Inputs
  const userNameInput = screen.getByRole("textbox", { name: /user name/i });
  const userEmailInput = screen.getByRole("textbox", { name: /user email/i });

  // Simulate The Input Changes
  await userEvent.click(userNameInput);
  await userEvent.keyboard("John Doe");
  await userEvent.click(userEmailInput);
  await userEvent.keyboard("johndoe@example.com");

  // Find The Submit Button And Simulate A Click
  const button = screen.getByRole("button");
  await userEvent.click(button);

  // Debugging Events
  // screen.debug();

  // Check If The New User Is Displayed In The List
  const userName = screen.getByRole("cell", { name: "John Doe" });
  const userEmail = screen.getByRole("cell", { name: "johndoe@example.com" });

  expect(userName).toBeInTheDocument();
  expect(userEmail).toBeInTheDocument();
});
