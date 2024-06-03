import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

it("Should load RestaurantMenu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Lunch Meals - Starting @ 179(9)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText("Cart 🛒 (0 item)")).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart 🛒 (1 item)")).toBeInTheDocument();

  fireEvent.click(addButtons[2]);
  expect(screen.getByText("Cart 🛒 (2 item)")).toBeInTheDocument();
  //make separate tests for each

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText("Cart is empty.")).toBeInTheDocument();
});
