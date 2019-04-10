import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import ReservationDetailsCard from "../../app/components/ReservationDetailsCard";

describe("ReservationDetailsCard", () => {
  it("should render without issues", () => {
    const reservation = {
      id: "id",
      name: "name",
      hotelName: "hotelName",
      arrivalDate: "today",
      departureDate: "tomorrow"
    };

    const component = shallow(
      <ReservationDetailsCard reservation={reservation} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
