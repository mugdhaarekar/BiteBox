import { fireEvent, render, screen, within } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render Body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchInput = screen.getByTestId("searchInput"); // Get the search input
  const searchButton = screen.getByText("Search"); // Get the search button
  const mytagrget = fireEvent.change(searchInput, {
    target: { value: "coffee" },
  }); // Change the search input value
  fireEvent.click(searchButton); // Click the search button
  const bodyElement = screen.getByTestId("body"); // Get the Body component container
  const resCards = within(bodyElement).getAllByTestId("resCard"); // Get all elements with data-testid="resCard" within the Body component
  expect(resCards.length).toBe(2);
});
