import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { horizontalScale, verticalScale } from "../../Metrics";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { UserRegister } from './../../api/UserApi.js'

export default function RegisterScreen({navigation}) {
    const [open, setOpen] = useState(false)
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState(new Date())

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleValidation = (inputEmail) => {
    if (isValidEmail(inputEmail)) {
        Alert.alert('E-mail válido', 'O e-mail inserido é válido.');
    } else {
        console.log(inputEmail)
        Alert.alert('E-mail inválido', 'O e-mail inserido não é válido.');
    }
    };

    const handleRegister = (email, password, firstName, lastName, gender, date) => {
        const data = {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "gender": gender,
            "birthdayDate": date,
            "role": "ADMIN"
        }
        UserRegister(data);
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.circleBackground} />   

            <View style={style.loginContainer}>
                <Text style={style.loginContainerTitle}>Bem-vinda!</Text>
                <View style={style.inputContainer}>
                    <Text>E-mail</Text>
                    <TextInput style={style.loginInput}/>
                </View>
                <View style={style.inputContainer}>
                    <Text>Senha</Text>
                    <TextInput secureTextEntry={true} style={style.loginInput}/>
                </View>

                <View style={style.inputContainer}>
                    <Text>Nome</Text>
                    <TextInput style={style.loginInput}/>
                </View>

                <View style={style.inputContainer}>
                    <Text>Sobrenome</Text>
                    <TextInput style={style.loginInput}/>
                </View>

                <View style={style.inputContainer}>
                    <Text>Genero</Text>
                    <TextInput secureTextEntry={true} style={style.loginInput}/>
                </View>
                
                <View style={style.inputContainer}>
                    <Text>Data de Nascimento</Text>
                    <Pressable onPress={() => setOpen(true)}><Text>X</Text></Pressable>
                    <DatePicker 
                        mode="date"
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>

                <Pressable onPress={() =>{
                    console.log(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate())
                    navigation.navigate();
                }} style={style.loginButton}>
                    <Text style={style.loginButtonText}>Cadastrar-se</Text>
                </Pressable>
            </View> 
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
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
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: horizontalScale(320),
        position: 'absolute',
        bottom: Dimensions.get("window").width / 5,
        borderRadius: 8,
        padding: 20,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        maxHeight: 1000,
        gap: 20,
        alignSelf: 'center'
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
        alignSelf: 'center',
        
    },
    
    loginButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500'
    },

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
        
    },

    registerButton: {
        color: '#1B58F3',
        fontSize: 12,
        
    }
});