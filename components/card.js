import { View, Text, Image } from "react-native";
import React from "react";

import { cards } from "../globalclasses/style";

export default function Card(props) {
  return (
    <View style={cards.container}>
      <Image style={cards.img} source={props.img} />
      <Text style={cards.texto}>{props.texto}</Text>
    </View>
  );
}
