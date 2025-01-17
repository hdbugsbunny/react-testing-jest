import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // Mock Data
  const users = [
    { userName: "John Doe", userEmail: "john.doe@example.com" },
    { userName: "Harshit", userEmail: "harshit@example.com" },
  ];

  // Render The Component
  // Fallback - #2: For Query Selection
  const { container } = render(<UserList users={users} />);

  // Find All The Rows in The Table
  // Fallback - #1: By Data-TestId
  const rows1 = within(screen.getByTestId("users")).getAllByRole("row");

  // Fallback - #2: By Query Selection
  // eslint-disable-next-line
  const rows2 = container.querySelectorAll("tbody tr");

  // Assertion: Correct Number of Rows in The Table
  expect(rows1).toHaveLength(users.length);
  expect(rows2).toHaveLength(users.length);
});

test("render the email and name of each user", () => {
  // Mock Data
  const users = [
    { userName: "John Doe", userEmail: "john.doe@example.com" },
    { userName: "Harshit", userEmail: "harshit@example.com" },
  ];

  // Render The Component
  render(<UserList users={users} />);

  // Find All The Rows in The Table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: Correct Email and Name for Each User
  rows.forEach((row, index) => {
    const emailCell = within(row).getByText(users[index].userEmail);
    const nameCell = within(row).getByText(users[index].userName);

    expect(emailCell).toBeInTheDocument();
    expect(nameCell).toBeInTheDocument();
  });
});
