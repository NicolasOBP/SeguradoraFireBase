import { View, Text } from "react-native";
import React from "react";

import { styles } from "../globalclasses/style";

import ViniImg from "../assets/imgs/ele.jpg";
import NicImg from "../assets/imgs/eu.jpg";

import Card from "../components/card";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.textotitu}>Um pouco sobre os criadores do App</Text>
      </View>
      <Card
        img={ViniImg}
        texto="A pessoa mais manjadora de React do País. Ele que em um ano fez 4 TCCs e disseminador da religião do React. Vinicius Buava"
      />
      <Card
        img={NicImg}
        texto="Nico brabs, o cortador de saque no pingas, o gabaritador profissional de provas, melhor debugador de código e cientista de aplicativos"
      />
    </View>
  );
}
