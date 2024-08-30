import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [quilometragem, setQuilometragem] = useState();
  const [litros, setLitros] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      console.log("Teste de Funcionamento");
      setLoading(false);
    }, 2000);
  }, []);

  function stopLoading() {
    setLoading(!loading);
  }

  const IrParaConsumo = () => {
    navigation.navigate("Consumo", {
      quilometragem, litros
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logoProj.png')}></Image>
      <Text style={styles.title}>Consumo de Gasolina</Text>

      <TextInput 
        value={quilometragem}
        onChangeText={setQuilometragem}
        placeholder="Informe a quilometragem em KM"
        style={styles.estiloCampoTexto}
      />

      <TextInput 
        value={litros}
        onChangeText={setLitros}
        placeholder="Consumo de gasolina em Litros"
        style={styles.estiloCampoTexto}
      />

      <TouchableOpacity style={styles.button} onPress={IrParaConsumo}>
        <Text style={styles.buttonText}>Executar</Text>
      </TouchableOpacity>
      <ActivityIndicator style={styles.loading} animating={loading} color={"darkred"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloCampoTexto: {
    backgroundColor: '#F3F3FF',
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderColor: 'grey',
    margin: 6,
    color: "#9c0000",
    fontSize: 15,
    shadowOffset: { // adicionando sombras
      width: 4,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 1
  },
  button: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 15,
    marginBottom: 20,
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    backgroundColor: '#9c0000',
    shadowOffset: { // adicionando sombras
      width: 4,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 1
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },
  image:{
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    fontStyle: 'italic',
    color: '#9c0000',
  },
  loading: {
    marginTop: 20,
    size: 'large',
    transform: [{ scale: 2 }] // aumentar o tamanho do loading

  }


});
