import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  // Mock Data
  const users = [
    { userName: "John Doe", userEmail: "john.doe@example.com" },
    { userName: "Harshit", userEmail: "harshit@example.com" },
  ];

  // Render The Component
  const { container } = render(<UserList users={users} />);

  return { users, container };
}

test("render one row per user FallBack #1: By Data-TestId", () => {
  // Getting Users From Render Component
  const { users } = renderComponent();

  // Find All The Rows in The Table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: Correct Number of Rows in The Table
  expect(rows).toHaveLength(users.length);
});

test("render one row per user Fallback #2: For Query Selection", () => {
  // Getting Users & Container From Render Component
  const { users, container } = renderComponent();

  // Find All The Rows in The Table
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: Correct Number of Rows in The Table
  expect(rows).toHaveLength(users.length);
});

test("render the email and name of each user", () => {
  // Getting Users From Render Component
  const { users } = renderComponent();

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
