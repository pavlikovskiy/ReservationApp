/**
 * @flow
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReservationListItem extends Component<ReservationListItemProps> {
  render() {
    const { reservation } = this.props;

    return (
      <View key={reservation.id} style={styles.searchResultContainer}>
        <Text style={styles.header}>
          {reservation.name} at {reservation.hotelName}
        </Text>
        <Text style={styles.label}>From: {reservation.arrivalDate}</Text>
        <Text style={styles.label}>To: {reservation.departureDate}</Text>
      </View>
    );
  }
}

type ReservationListItemProps = {
  reservation: {
    id: string,
    name: string,
    hotelName: string,
    arrivalDate: string,
    departureDate: string
  }
};

const styles = StyleSheet.create({
  searchResultContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FAFAFA",
    paddingLeft: 20,
    paddingBottom: 20,
    borderBottomColor: "#B6B6B6",
    borderBottomWidth: 1
  },
  header: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 10,
    color: "#808080",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  label: {}
});
