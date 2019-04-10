/**
 * @flow
 */

import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import RoundButton from "../components/RoundButton";
import ReservationListItem from "../components/ReservationListItem";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const reservationListQuery = gql`
  query {
    reservations(where: {}, orderBy: createdAt_DESC, first: 15) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

const ReservationList = graphql(reservationListQuery)(props => {
  const { error, reservations } = props.data;
  const { navigation } = props;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (reservations) {
    return (
      <ScrollView contentContainerStyle={styles.reservationListContainer}>
        {reservations.map(reservation => {
          return (
            <TouchableOpacity
              key={reservation.id}
              onPress={() =>
                navigation.navigate("ReservationDetails", {
                  id: reservation.id
                })
              }
            >
              <ReservationListItem reservation={reservation} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }

  return <Text>Loading reservations ...</Text>;
});

export class ReservationListScreen extends Component<ReservationListScreenProps> {
  static navigationOptions = () => ({
    title: "Reservations"
  });

  render() {
    const { navigation } = this.props;

    return (
      <View style={{}}>
        <ReservationList navigation={navigation} />

        <View style={styles.buttonContainer}>
          <RoundButton
            iconSize={70}
            onPress={() => {
              navigation.navigate("AddReservation", {
                refetchQuery: reservationListQuery
              });
            }}
          />
        </View>
      </View>
    );
  }
}

type ReservationListScreenProps = {
  navigation: any
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  reservationListContainer: {
    justifyContent: "flex-start"
  },

  buttonContainer: {
    flex: 1,
    position: "absolute",
    left: SCREEN_WIDTH - 100,
    top: SCREEN_HEIGHT - 200,
    zIndex: 111
  }
});
