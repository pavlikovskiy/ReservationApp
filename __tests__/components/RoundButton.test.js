import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import RoundButton from "../../app/components/RoundButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

describe("RoundButton", () => {
  it("should render without issues", () => {
    const component = shallow(<RoundButton onPress={() => {}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render touchable ", () => {
    const component = shallow(<RoundButton onPress={() => {}} />);

    expect(component.find(TouchableOpacity)).toBeTruthy();
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render with vector icon ", () => {
    const component = shallow(<RoundButton onPress={() => {}} />);

    expect(component.find(Ionicons)).toBeTruthy();
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render with vector icon specific size ", () => {
    const component = shallow(<RoundButton onPress={() => {}} iconSize={70} />);

    expect(component.find(Ionicons)).toBeTruthy();
    expect(component.find(Ionicons).props().size).toBe(70);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
