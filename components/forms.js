import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign } from "@expo/vector-icons";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { styles } from "../globalclasses/style";
import { ModalCalc, Modals } from "./modal";

export default function Forms() {
  const [nome, setNome] = useState("");
  const [idad, setIdad] = useState("");
  const [ano, setAno] = useState("");
  const [tempohabi, setTempohabi] = useState("");
  const [auto, setAuto] = useState("");

  const [porcentagens, setPorcentagens] = useState([]);
  const [val, setVal] = useState("");

  const [modalC, setModalC] = useState(false);
  const [modal, setModal] = useState(false);
  const [contModal, setContModal] = useState("");

  const dados = [
    { key: JSON.stringify({ price: 3000, value: "Tiggo" }), value: "Tiggo" },
    { key: JSON.stringify({ price: 2000, value: "Onix" }), value: "Onix" },
    {
      key: JSON.stringify({ price: 4000, value: "Tracker" }),
      value: "Tracker",
    },
    { key: JSON.stringify({ price: 1000, value: "Fiesta" }), value: "Fiesta" },
  ];

  async function criaUsu() {
    if (
      nome == "" ||
      idad == "" ||
      auto == "" ||
      ano == "" ||
      tempohabi == ""
    ) {
      setContModal("Prencha todos os campos");
      setModal(true);
    } else {
      if (
        Number(idad) <= 17 ||
        Number(idad) >= 90 ||
        Number(tempohabi) >= 70 ||
        Number(ano) > 2023 ||
        Number(ano) < 1990
      ) {
        setContModal("Hà dados incoerentes no formulário");
        setModal(true);
      } else {
        const seg = await calc();
        await addDoc(collection(db, "Seguro automovel"), {
          nome,
          idad,
          auto: JSON.parse(auto).value,
          price: JSON.parse(auto).price,
          ano,
          tempohabi,
          valorseg: seg,
          porcentagens,
        });
        setAno("");
        setAuto("");
        setIdad("");
        setNome("");
        setTempohabi(null);
        Keyboard.dismiss();
      }
    }
  }
  function calc() {
    const isValid = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(nome);

    if (
      nome == "" ||
      idad == "" ||
      auto == "" ||
      ano == "" ||
      tempohabi == ""
    ) {
      setContModal("Prencha todos os campos");
      setModal(true);
    } else {
      if (!isValid) {
        setContModal("O nome não pode conter números ou caractéres especiai.");
        setModal(true);
      } else {
        if (
          Number(idad) <= 17 ||
          Number(idad) >= 90 ||
          Number(tempohabi) >= 70 ||
          Number(ano) > 2023 ||
          Number(ano) < 1900
        ) {
          setContModal("Hà dados incoerentes no formulário");
          setModal(true);
        } else {
          let def = JSON.parse(auto).price;

          setPorcentagens((old) => ({ ...old, carro: "R$" + def + ",00" }));
          if (Number(idad) <= 20) {
            def = def * 1.3;
            setPorcentagens((old) => ({ ...old, p1: "+30%" }));
          } else if (Number(idad) <= 30) {
            def = def * 1.1;
            setPorcentagens((old) => ({ ...old, p1: "+10%" }));
          } else if (Number(idad) <= 55) {
            def = def * 1.05;
            setPorcentagens((old) => ({ ...old, p1: "+5%" }));
          } else {
            def = def * 1.2;
            setPorcentagens((old) => ({ ...old, p1: "+20%" }));
          }

          if (Number(tempohabi) <= 2) {
            def = def * 1.3;
            setPorcentagens((old) => ({ ...old, p2: "+30%" }));
          } else if (Number(tempohabi) <= 5) {
            def = def * 0.9;
            setPorcentagens((old) => ({ ...old, p2: "-10%" }));
          } else if (Number(tempohabi) <= 10) {
            def = def * 0.7;
            setPorcentagens((old) => ({ ...old, p2: "-30%" }));
          } else if (Number(tempohabi) <= 20) {
            def = def * 0.5;
            setPorcentagens((old) => ({ ...old, p2: "-50%" }));
          } else if (Number(tempohabi) <= 30) {
            def = def * 0.4;
            setPorcentagens((old) => ({ ...old, p2: "-60%" }));
          } else {
            def = def * 1.2;
            setPorcentagens((old) => ({ ...old, p2: "+20%" }));
          }

          if (Number(ano) <= 1990) {
            def = def * 1.8;
            setPorcentagens((old) => ({ ...old, p3: "+80%" }));
          } else if (Number(ano) <= 2005) {
            def = def * 1.6;
            setPorcentagens((old) => ({ ...old, p3: "+60%" }));
          } else if (Number(ano) <= 2010) {
            def = def * 1.5;
            setPorcentagens((old) => ({ ...old, p3: "+50%" }));
          } else if (Number(ano) <= 2015) {
            def = def * 1.4;
            setPorcentagens((old) => ({ ...old, p3: "+40%" }));
          } else if (Number(ano) <= 2020) {
            def = def * 1.2;
            setPorcentagens((old) => ({ ...old, p3: "+20%" }));
          } else if (Number(ano) <= 2023) {
            def = def * 1.1;
            setPorcentagens((old) => ({ ...old, p3: "+10%" }));
          }

          setVal(def);
          setModalC(true);
          return def;
        }
      }
    }
  }

  return (
    <View style={styles.form}>
      <Modals cont={contModal} modal={modal} setM={setModal} />
      <ModalCalc
        porce={porcentagens}
        val={val}
        modalC={modalC}
        setMC={setModalC}
      />
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.forminput}
        placeholder="Cliente:"
        placeholderTextColor={"yellow"}
      />
      <TextInput
        value={idad}
        keyboardType="number-pad"
        onChangeText={setIdad}
        style={styles.forminput}
        placeholder="Idade:"
        placeholderTextColor={"yellow"}
      />
      <SelectList
        setSelected={(val) => setAuto(val)}
        data={dados}
        save="key"
        notFoundText="Nada com esse nome"
        searchPlaceholder="Pesquisar um Automovél"
        placeholder="Selecionar Automovél"
        arrowicon={<AntDesign name="arrowdown" size={20} color="white" />}
        closeicon={<AntDesign name="closecircleo" size={24} color="white" />}
        boxStyles={styles.forminput}
        inputStyles={{ color: "yellow" }}
        maxHeight={150}
        dropdownItemStyles={{ alignSelf: "center" }}
        dropdownStyles={{
          borderColor: "black",
          borderWidth: 2,
          width: 120,
          alignSelf: "center",
        }}
      />
      <TextInput
        value={ano}
        keyboardType="number-pad"
        onChangeText={setAno}
        style={styles.forminput}
        placeholder="Ano do Carro:"
        placeholderTextColor={"yellow"}
      />
      <TextInput
        value={tempohabi}
        keyboardType="number-pad"
        onChangeText={setTempohabi}
        style={styles.forminput}
        placeholder="Tempo de Habilitação:"
        placeholderTextColor={"yellow"}
      />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity style={styles.buton} onPress={criaUsu}>
          <Text style={styles.txtbut}>Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton} onPress={calc}>
          <Text style={styles.txtbut}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
