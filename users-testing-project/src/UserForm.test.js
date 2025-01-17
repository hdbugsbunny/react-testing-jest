import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("renders user form with two input fields and submit button", () => {
  // Render The Component
  render(<UserForm />);

  // Manipulate The Component or Find an Element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - Make Sure The Component is Doing What we Expect is to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("form submission triggers the onUserAdd callback", async () => {
  // Jest Callback Function
  const mockCallback = jest.fn();

  // Render The Component
  render(<UserForm onUserAdd={mockCallback} />);

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

  // Assertion - Make Sure The Callback Method was Called with the Correct Arguments
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledWith({
    userName: "John Doe",
    userEmail: "johndoe@example.com",
  });
});
