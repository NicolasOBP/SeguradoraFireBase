import { Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { item } from "../globalclasses/style";
import { MaterialIcons } from "@expo/vector-icons";
import Del from "./delusu";
import { ModalCalc } from "./modal";
import { useNavigation } from "@react-navigation/native";
import { Infos } from "../context/context";

export default function Item(props) {
  const navigation = useNavigation();

  const { setDados } = useContext(Infos);

  const [modal, setModal] = useState(false);
  const [modalDin, setModalDin] = useState(false);
  const [val, setVal] = useState("");
  const [porce, setPorce] = useState([]);

  function deleteUsu() {
    setModal(true);
  }
  function show(din, porce) {
    setVal(din);
    setPorce(porce);
    setModalDin(true);
  }

  function navega(usu) {
    setDados(usu);
    navigation.navigate("Detalhes");
  }

  return (
    <View style={item.box}>
      <Del setM={setModal} modal={modal} id={props.usu.id} />
      <ModalCalc
        setMC={setModalDin}
        porce={porce}
        modalC={modalDin}
        val={val}
      />
      <MaterialIcons
        onPress={deleteUsu}
        name="delete"
        size={40}
        color="darkred"
      />
      <MaterialIcons
        onPress={() => show(props.usu.valorseg, props.usu.porcentagens)}
        name="money"
        size={40}
        color="black"
      />
      <MaterialIcons
        onPress={() => navega(props.usu)}
        name="search"
        size={40}
        color="black"
      />
      <Text style={item.text}>
        Nome: {props.usu.nome} - Idade: {props.usu.idad}
      </Text>
    </View>
  );
}
