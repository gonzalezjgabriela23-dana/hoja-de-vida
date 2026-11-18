import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/tarjetahobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart-outline" size={90} color="#2563eb" />
        <Text style={estilos.nombre}>Dana Gonzalez</Text>
        <Text style={estilos.subtitulo}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Leer"
          descripcion="Me gusta leer en mi tiempo libre."
          nombreIcono="book-outline"
          onPress={() =>
            Alert.alert("Leer", "romantico")
          }
        />
        <TarjetaHobby
          nombre="Música"
          descripcion="Escucho música mientras programo."
          nombreIcono="musical-notes-outline"
          onPress={() =>
            Alert.alert("Música", "De todo un poquito")
          }
        />
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});