import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Tests for contact us", () => {
  test("should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("should load button in Contact Us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("should load input in Contact Us Component", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("Name");
    //Assertion
    expect(placeholder).toBeInTheDocument();
  });

  test("should load input in Contact Us Component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).not.toBe(3);
  });
});
