import React from "react";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";

import {
  ReservationDetails,
  GET_RESERVATION_QUERY
} from "../../app/containers/ReservationDetailsScreen";

const mocks = [
  {
    request: {
      query: GET_RESERVATION_QUERY,
      variables: {
        id: "cjuatrgg0eggt0b03az2hakfx"
      }
    },
    result: {
      data: {
        reservation: {
          name: "Jeff McCall",
          arrivalDate: "9/9/2019",
          hotelName: "Hilton",
          id: "cjuatrgg0eggt0b03az2hakfx",
          departureDate: "9/9/2020"
        }
      }
    }
  }
];

describe("ReservationDetailsScreen", () => {
  it("should render loading message ", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ReservationDetails id="cjuatrgg0eggt0b03az2hakfx" />
      </MockedProvider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should render with data from graph mock", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ReservationDetails id="cjuatrgg0eggt0b03az2hakfx" />
      </MockedProvider>
    );

    await wait(1); // wait to resolve promise
    expect(component.toJSON()).toMatchSnapshot();
  });
});
