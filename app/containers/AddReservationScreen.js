/**
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";

const createReservationQuery = gql`
  mutation createReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        name: $name
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      }
    ) {
      id
    }
  }
`;

export class AddReservationScreen extends Component<
  AddReservationScreenProps,
  AddReservationScreenState
> {
  static navigationOptions = () => ({
    title: "Add reservation"
  });

  state = {
    name: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  };

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    return (
      <ScrollView style={{}}>
        <View style={styles.container}>
          <Mutation
            mutation={createReservationQuery}
            refetchQueries={[{ query: params.refetchQuery }]}
          >
            {(addReservationMutation, { data }) => (
              <View>
                <Text style={styles.welcome}>Reservation details</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({ name: text })}
                  value={this.state.name}
                  placeholder="Name"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({ hotelName: text })}
                  value={this.state.hotelName}
                  placeholder="Hotel Name"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({ arrivalDate: text })}
                  value={this.state.arrivalDate}
                  placeholder="Arrival Date"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.setState({ departureDate: text })}
                  value={this.state.departureDate}
                  placeholder="Departure Date"
                />
                <Button
                  style={styles.button}
                  onPress={() => {
                    addReservationMutation({
                      variables: {
                        name: this.state.name,
                        hotelName: this.state.hotelName,
                        arrivalDate: this.state.arrivalDate,
                        departureDate: this.state.departureDate
                      }
                    })
                      .then(res => {
                        console.log(
                          "reservation is created : " + JSON.stringify(res)
                        );
                      })
                      .catch(err => <Text>{err}</Text>);
                    this.setState({
                      name: "",
                      hotelName: "",
                      arrivalDate: "",
                      departureDate: ""
                    });
                    navigation.goBack();
                  }}
                  title="Create reservation"
                />
              </View>
            )}
          </Mutation>
        </View>
      </ScrollView>
    );
  }
}

type AddReservationScreenProps = {
  navigation: any
};

type AddReservationScreenState = {
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    height: 30,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    padding: 1
  },
  button: {
    marginTop: 15
  }
});
