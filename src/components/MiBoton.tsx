import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        estilos.boton,
        { backgroundColor: colorBoton },
        pressed && estilos.presionado,
      ]}
    >
      <Ionicons name={nombreIcono} size={20} color="#ffffff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
    gap: 8,
  },
  presionado: { opacity: 0.7 },
  texto: { color: "#ffffff", fontWeight: "bold", fontSize: 14 },
});