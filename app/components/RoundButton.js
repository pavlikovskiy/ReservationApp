/**
 * @flow
 */

import React, { Component } from "react";
import { Button, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class RoundButton extends Component<RoundButtonProps> {
  render() {
    const { onPress, iconSize } = this.props;
    return (
      <View style={styles.controlButtonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={onPress}>
          <Ionicons
            name={"ios-add"}
            size={iconSize}
            style={{ color: "#3478f6" }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

type RoundButtonProps = {
  onPress: Function,
  iconSize: number
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  roundButton: {
    borderWidth: 1,
    borderColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    backgroundColor: "rgb(235,235,235)",
    borderRadius: 75
  }
});
