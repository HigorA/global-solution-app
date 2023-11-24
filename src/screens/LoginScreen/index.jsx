import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, Image, Alert } from "react-native";
import { horizontalScale, verticalScale } from "../../Metrics";
import { useState } from "react";
import Toast from 'react-native-toast-message';
import { StatusBar } from "react-native";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidEmail = (email) => {
        // Expressão regular para validar um e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleValidation = (inputEmail) => {
    if (isValidEmail(inputEmail)) {
        Alert.alert('E-mail válido', 'O e-mail inserido é válido.');
        return true;
    } else {
        // Alert.alert('E-mail inválido', 'O e-mail inserido não é válido.');
        return false;
    }
    };

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: "Hello",
            text2: "Test"
        });
    }

    const handleLogin = (email, password) => {
        if (handleValidation(email) == false) {
            showToast();
            return;
        }
    }

    

    return(
        <SafeAreaView style={style.container}>
            <StatusBar hidden={true}/>
            <View style={style.circleBackground} />
            <Image source={require('./../../../assets/logo.png')} style={style.logo} resizeMode="contain"/>
            <View style={style.loginContainer}>
                <Text style={style.loginContainerTitle}>Bem-vinda!</Text>
                <View style={style.inputContainer}>
                    <Text>E-mail</Text>
                    <TextInput onChangeText={setEmail} style={style.loginInput}/>
                </View>
                <View style={style.inputContainer}>
                    <Text>Senha</Text>
                    <TextInput secureTextEntry={true} style={style.loginInput}/>
                </View>
                <Text style={style.registerButton} onPress={() => navigation.navigate("Register")}>Cadastre-se</Text>
                <Pressable onPress={() => showToast()} style={style.loginButton}>
                    <Text style={style.loginButtonText}>Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    logo: { 
        width: horizontalScale(200),
        height: horizontalScale(200),
        position: 'absolute',
        top: verticalScale(60)
    },

    circleBackground: {
        width: horizontalScale(400),
        height: 500,
        backgroundColor: '#FFCAB3',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

    loginContainer: {
        backgroundColor: '#fff',
        zIndex: 1,
        alignSelf: 'center',
        width: horizontalScale(320),
        position: 'absolute',
        bottom: Dimensions.get("window").width / 3,
        borderRadius: 8,
        padding: 20,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        gap: 20,
        justifyContent: 'center'
    },

    loginContainerTitle: {
        fontWeight: '700',
        color: 'black',
        fontSize: 24
    },

    loginInput: {
        width: '100%',
        backgroundColor: '#F0F0F0',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 8
    },

    loginButton: {
        width: horizontalScale(280),
        backgroundColor: '#F58581',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 16,
        alignSelf: 'center'
      },
    
    loginButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500'
    },

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8
    },

    registerButton: {
        color: '#1B58F3',
        fontSize: 12,
        
    }
});