import { View, Text } from "react-native";
import React, { useContext } from "react";
import { detalhess } from "../globalclasses/style";
import { Infos } from "../context/context";

export default function Detail() {
  const { dados } = useContext(Infos);
  return (
    <View style={detalhess.container}>
      <View style={detalhess.titulo}>
        <Text style={detalhess.textotitu}>
          Mais informações sobre o Cliente
        </Text>
      </View>
      <View style={detalhess.containerInfo}>
        <Text style={detalhess.subtitu}>Informações Pessoais</Text>
        <Text style={detalhess.texto}>Nome: {dados.nome}</Text>
        <Text style={detalhess.texto}>Idade: {dados.idad} anos</Text>
        <Text style={detalhess.texto}>
          Tempo de HaBilitação: {dados.tempohabi} anos
        </Text>
        <Text style={detalhess.texto}>Carro: {dados.auto}</Text>
        <Text style={detalhess.texto}>Ano do Carro: {dados.ano}</Text>

        <Text style={detalhess.subtitu}>Informações do Seguro</Text>
        <Text style={detalhess.texto}>
          Valor do Seguro: R${dados.valorseg},00
        </Text>
        <Text style={detalhess.texto}>Preço do Carro: R${dados.price},00</Text>
        <Text style={detalhess.texto}>
          Porcentagem aplicada pela idade: {dados.porcentagens.p1}
        </Text>
        <Text style={detalhess.texto}>
          Porcentagem aplicada pelo ano do carro: {dados.porcentagens.p3}
        </Text>
        <Text style={detalhess.texto}>
          Porcentagem aplicada pelo tempo de habilitação:{" "}
          {dados.porcentagens.p2}
        </Text>
      </View>
    </View>
  );
}
