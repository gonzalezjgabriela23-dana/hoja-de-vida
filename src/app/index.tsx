import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

// CAMBIAR: pon tus datos reales
const CORREO = "gonzalezj.gabriela23@gmail.com";
const TELEFONO = "3105038850";
const GITHUB = "https://github.com/gonzalezjgabriela23-dana";

const Inicio = () => {
  const router = useRouter();

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Laurith Sofía Gil Rodríguez</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionada por el desarrollo de aplicaciones móviles
          y web. Con habilidades en React Native, JavaScript, HTML5.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => Alert.alert("Contacto", `Correo: ${CORREO}`)}
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#5B7FE8"
          onPress={() => Alert.alert("Contacto", `Teléfono: ${TELEFONO}`)}
        />
        <MiBoton
          textoBoton="GitHub"
          nombreIcono="logo-github"
          colorBoton="#374151"
          onPress={() => Alert.alert("Repositorios de GitHub", GITHUB)}
        />
        <MiBoton
          textoBoton="Estudios"
          nombreIcono="school"
          colorBoton="#F07167"
          onPress={() => router.push("/estudios")}
        />
      </View>
    </ScrollView>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});