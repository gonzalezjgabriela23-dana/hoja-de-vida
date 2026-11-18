import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  descripcion: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, descripcion, nombreIcono, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}
    >
      <Ionicons name={nombreIcono} size={32} color="#2563eb" />
      <View style={estilos.textos}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ffffff",
  },
  presionada: { opacity: 0.7 },
  textos: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold" },
  descripcion: { fontSize: 14, color: "#555" },
});