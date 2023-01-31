import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];
  test("rendered correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render list of skills", () => {
    render(<Skills skills={skills} />)

    const allListElements = screen.getAllByRole("listitem");
    expect(allListElements).toHaveLength(skills.length);
  })

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: /Login/ });
    expect(loginButton).toBeInTheDocument();
  })
  test("render start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", { name: /Start learning/ });
    expect(startLearningButton).not.toBeInTheDocument();
  })
});
