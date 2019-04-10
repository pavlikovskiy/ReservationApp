/**
 * @format
 * @flow
 */

import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { ReservationListScreen } from "./containers/ReservationListScreen";
import { ReservationDetailsScreen } from "./containers/ReservationDetailsScreen";
import { AddReservationScreen } from "./containers/AddReservationScreen";

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Index: {
        screen: ReservationListScreen
      },
      ReservationDetails: {
        screen: ReservationDetailsScreen
      },
      AddReservation: {
        screen: AddReservationScreen
      }
    },
    {
      // headerMode: 'none',
      initialRouteName: "Index",
      mode: "modal"
    }
  )
);

export default AppNavigator;
