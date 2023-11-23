import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, Image } from "react-native";
import { horizontalScale, verticalScale } from "../../Metrics";

export default function LoginScreen() {

    return(
        <SafeAreaView style={style.container}>
            <View style={style.circleBackground} />
            <Image source={require('./../../../assets/logo.png')} style={style.logo} resizeMode="contain"/>
            <View style={style.loginContainer}>
                <Text>Bem-vinda!</Text>
                <View>
                    <Text>E-mail</Text>
                    <TextInput style={style.loginInput}/>
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput secureTextEntry={true} style={style.loginInput}/>
                </View>
                <Pressable>
                    <Text>Login</Text>
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
        top: verticalScale(100)
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
        gap: 20
    },

    loginInput: {
        width: '100%',
        backgroundColor: '#FFFCFC',
        paddingVertical: 2,
        paddingHorizontal: 4
    }
});