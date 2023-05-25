import { render, screen } from "@testing-library/react";
import ForecastDay from "./ForecastDay";

test("renders forecast day as expected", () => {
  render(
    <ForecastDay
      date="2000-01-01"
      weatherCode="a"
      apparentMaxTemperature={9999}
      precipitation={1}
      realFeelTemperature={1}
      windspeed={1}
    />
  );

  expect(screen.getByText(/9999/i)).toBeInTheDocument();
  expect(screen.getByText(/01 Jan 2000 - Saturday/i)).toBeInTheDocument();
  expect(screen.getByText(/Light Rain/i)).toBeInTheDocument();
  expect(screen.getByText(/1 kmph/i)).toBeInTheDocument();
  expect(screen.getByText(/1 mm/i)).toBeInTheDocument();
});
