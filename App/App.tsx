import { SafeAreaView, Text } from "react-native";
import { useState } from "react";
import ButtonAction from "./src/components/ButtonAction";

export default function App() {
  const [valor, setValor] = useState(0);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#96B09E",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 33, marginBottom: 20, fontWeight: "bold" }}>O valor é {valor}</Text>

      <ButtonAction label="Incrementar" onPress={() => setValor(valor + 1)} />
      <ButtonAction label="Decrementar" onPress={() => setValor(valor - 1)} />
      <ButtonAction label="Resetar" onPress={() => setValor(0)} />
    </SafeAreaView>
  );
}
