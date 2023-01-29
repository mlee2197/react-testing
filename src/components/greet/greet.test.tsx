import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("hello rendered", () => {
    render(<Greet />);
    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="Steve" />);
    const textElement = screen.getByText(/Steve/);
    expect(textElement).toBeInTheDocument();
  });
});
