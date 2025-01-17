import { render, screen } from "@testing-library/react";
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
