import { Text, View, Modal, StyleSheet, Button } from "react-native";
import React from "react";

export function Modals(props) {
  return (
    <Modal transparent={true} visible={props.modal} animationType="fade">
      <View style={styles.modal}>
        <View style={styles.modalcont}>
          <Text style={{ color: "white", marginBottom: 20 }}>{props.cont}</Text>
          <Button
            title="Ok"
            onPress={() => {
              props.setM(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

export function ModalCalc(props) {
  return (
    <Modal transparent={true} visible={props.modalC} animationType="fade">
      <View style={styles.modal}>
        <View style={styles.modalcont}>
          <Text style={{ color: "white", marginBottom: 20 }}>
            Valor do Seguro: R${props.val},00
          </Text>
          <Text style={{ color: "white", marginBottom: 5, fontWeight: "bold" }}>
            Valor do carro: {props.porce.carro};
          </Text>
          <Text style={{ color: "white", marginBottom: 5, fontWeight: "bold" }}>
            Porcentagem aplicada pela idade: {props.porce.p1};
          </Text>
          <Text style={{ color: "white", marginBottom: 5, fontWeight: "bold" }}>
            Porcentagem aplicada pelo ano do carro: {props.porce.p3};
          </Text>
          <Text
            style={{ color: "white", marginBottom: 10, fontWeight: "bold" }}
          >
            Porcentagem aplicada pelo tempo de habilitação: {props.porce.p2};
          </Text>
          <Button
            title="Ok"
            onPress={() => {
              props.setMC(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalcont: {
    bottom: 150,
    backgroundColor: "#590303",
    padding: 10,
    borderRadius: 20,
    paddingTop: 5,
  },
});
