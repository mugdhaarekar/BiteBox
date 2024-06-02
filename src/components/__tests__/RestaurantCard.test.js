import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Cheesecakes By CakeZone");
  expect(restaurantName).toBeInTheDocument();
});

it("Should render RestaurantCard with OpenLabel", () => {
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);
  render(<RestaurantCardOpen resData={MOCK_DATA} />);
  const withOpenLabelText = screen.getByText("Closed");
  expect(withOpenLabelText).toBeInTheDocument();
});
