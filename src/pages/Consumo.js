import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

export default function Consumo() {
  const route = useRoute();
  const navigation = useNavigation();
  const {quilometragem, litros} = route.params;

  const [mediaConsumo, setMediaConsumo] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [cor, setCor] = useState('white');
  
  useEffect(() => {
    calcularConsumo();
  }, [quilometragem, litros]);


  const calcularConsumo = () => {
    if (quilometragem != "" && litros != "" ){
      const media = quilometragem / litros;
      setMediaConsumo(media.toFixed(2));
      classificarConsumo(media);
    }
  };


  const classificarConsumo = (media) => {
    if (media > 12) {
      setClassificacao("A");
      setCor('#2E865F');
    } else if (media <= 12 && media > 10) {
      setClassificacao("B");
      setCor("#8B9467");
    } else if (media <= 10 && media > 8) {
      setClassificacao("C");
      setCor("#F7DC6F");
    } else if (media <= 8 && media > 4) {
      setClassificacao("D");
      setCor("#FFA07A");
    } else {
      setClassificacao("E");
      setCor("#FF3737");
    }
  };

  const IrParaHome = () => {
    navigation.navigate('Home')
  }


    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.title}>Consumo</Text>
                    <Text style={[styles.tipo, { color: cor }]}>{classificacao}</Text>
                    <Text style={styles.consumo}>{mediaConsumo} Km/L</Text>
                </View>
              <TouchableOpacity style={styles.buttonBox} onPress={IrParaHome}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: '#fffaf0'
      },
      box: {
        backgroundColor: '#F3F3FF',
        width: '80%',
        height: '50%',
        borderRadius: 15,
        borderWidth: 3,
        borderColor:'#9c0000',
        shadowOffset: {
          width: 7,
          height: 9
        },
        shadowOpacity: 0.25,
        shadowRadius: 9,
        elevation: 1
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#9c0000',
        fontStyle: 'italic',
        fontFamily: 'BerkshireSwash_400Regular',
      },
      tipo: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 100,
        fontStyle: 'italic',
        fontWeight: 'bold',
      },
      consumo: {
        textAlign: 'center',
        fontSize: 24,
        color: '#9c0000',
        marginBottom: 10,
        textDecorationLine: 'underline'
      },
      buttonBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#9c0000',
        backgroundColor: '#9c0000',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        padding: 15,
        height: 60,
        marginTop: 15
      },
      buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
      }



})