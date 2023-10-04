import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";
import { styles } from "../globalclasses/style";
import Item from "../components/item";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

import Forms from "../components/forms";

export default function Home({ navigation }) {
  const [userList, setUserList] = useState([]);
  const user = collection(db, "Seguro automovel");

  useEffect(() => {
    const unsub = onSnapshot(user, (collection) => {
      let snapshotUsers = [];

      collection?.docs.forEach((doc) => {
        snapshotUsers.push({ ...doc.data(), id: doc.id });
      });

      setUserList(snapshotUsers);
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.textotitu}>Seguro de caro com FireBase</Text>
        </View>

        <Forms pa={userList.length} />

        <FlatList
          style={{ maxHeight: 290, marginBottom: 10 }}
          data={userList}
          renderItem={({ item }) => <Item usu={item} />}
        />
        <Pressable
          onPress={() => navigation.navigate("Sobre")}
          style={styles.btnbox}
        >
          <Text style={{ color: "white" }}>Sobre os Criadores</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
