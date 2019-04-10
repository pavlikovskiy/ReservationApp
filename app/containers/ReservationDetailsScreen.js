/**
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";
import ReservationDetailsCard from "../components/ReservationDetailsCard";

export const GET_RESERVATION_QUERY = gql`
  query getReservation($id: ID!) {
    reservation(where: { id: $id }) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const ReservationDetails = ({ id }) => (
  <Query query={GET_RESERVATION_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Reservation details is loading...</Text>;
      if (error) return <Text>Error ... </Text>;

      const { reservation } = data;

      return <ReservationDetailsCard reservation={reservation} />;
    }}
  </Query>
);

export class ReservationDetailsScreen extends Component<ReservationDetailsScreenProps> {
  static navigationOptions = () => ({
    title: "Reservation Details"
  });

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { id } = params;

    return (
      <ScrollView style={styles.container}>
        <ReservationDetails id={id} />
      </ScrollView>
    );
  }
}

type ReservationDetailsScreenProps = {
  navigation: any
};

const styles = StyleSheet.create({
  container: {}
});
