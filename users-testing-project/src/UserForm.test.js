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
  //! NOT THE BEST IMPLEMENTATION
  // Callback Function
  const argList = [];
  const mockCallback = (...args) => {
    argList.push(args);
  };

  // Render The Component
  render(<UserForm onUserAdd={mockCallback} />);

  // Find The Two Inputs And Simulate Input Changes
  const [userNameInput, userEmailInput] = screen.getAllByRole("textbox");
  await userEvent.click(userNameInput);
  await userEvent.keyboard("John Doe");
  await userEvent.click(userEmailInput);
  await userEvent.keyboard("johndoe@example.com");

  // Find The Submit Button And Simulate A Click
  const button = screen.getByRole("button");
  await userEvent.click(button);

  // Assertion - Make Sure The Callback Method was Called with the Correct Arguments
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    userName: "John Doe",
    userEmail: "johndoe@example.com",
  });
});
