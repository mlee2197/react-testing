import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


test("Greet hello rendered", () => {
  render(<Greet/>)
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
})

test("Greet renders with a name", () => {
  render(<Greet name="Steve" />);
  const textElement = screen.getByText("Hello Steve");
  expect(textElement).toBeInTheDocument();
})