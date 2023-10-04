import { Text, View, Modal, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Infos } from "../context/context";

export default function Del(props) {
  const { setAtua } = useContext(Infos);

  async function deleteUsu() {
    await deleteDoc(doc(db, "Seguro automovel", props.id));
    alert("Usuário deletado");

    props.setM(false);
    setAtua(true);
  }
  return (
    <Modal transparent={true} visible={props.modal} animationType="fade">
      <View style={styles.modal}>
        <View style={styles.modalcont}>
          <Text style={{ color: "white", marginBottom: 5 }}>
            Tem certeza que deseja deletar?
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button title="Sim" onPress={deleteUsu} />
            <Button
              title="Não"
              onPress={() => {
                props.setM(false);
              }}
            />
          </View>
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
