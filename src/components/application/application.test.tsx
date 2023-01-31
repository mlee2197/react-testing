import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("application", () => {
  test("text input rendered", () => {
    render(<Application />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByRole("heading", { level: 2 });
    expect(subtitleElement).toBeInTheDocument();

    // const paraElement = screen.getByText("All fields are mandatory");
    // const paraElement = screen.getByText(/fields are/i);
    const paraElement = screen.getByText((content) => content.endsWith("are mandatory"));
    expect(paraElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const imgElement = screen.getByAltText(/laptop/);
    expect(imgElement).toBeInTheDocument();

    const textElement = screen.getByPlaceholderText("Fullname");
    expect(textElement).toBeInTheDocument();

    const bioElement = screen.getByLabelText("Bio");
    expect(bioElement).toBeInTheDocument();

    const jobElement = screen.getByRole("combobox");
    expect(jobElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
