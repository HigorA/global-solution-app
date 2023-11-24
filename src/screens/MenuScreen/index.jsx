import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { horizontalScale } from "../../Metrics";
import { MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';

export default function MenuScreen({navigation}) {

    
    return(
        <SafeAreaView style={style.container}>
            <View style={style.circleBackground} />
            <View style={style.headerContainer}>
                <Image source={require('./../../../assets/mae.png')} resizeMode="contain" style={style.maeLogo} />
                <Ionicons name="menu" size={32} color="#2288BB" />
            </View>

            <Text style={style.titleScreen}>Serviços</Text>
            
            <View style={style.buttonViewContainer}>
                <Pressable onPress={() => navigation.navigate('Tips')}>
                    <View style={style.buttonContainer}>
                        <MaterialCommunityIcons name="chat-question-outline" size={48} color="#2288BB" />
                        <Text style={style.buttonTitleContainer}>Curiosidades</Text>
                    </View>
                </Pressable>
                
                <Pressable onPress={() => console.log("")}>
                    <View style={style.buttonContainer}>
                        <MaterialCommunityIcons name="file-document-edit-outline" size={48} color="#2288BB" />
                        <Text style={style.buttonTitleContainer}>Exames</Text>
                    </View>
                </Pressable>

                <View style={style.buttonContainer}>
                    <MaterialCommunityIcons name="chat-question-outline" size={48} color="#2288BB" />
                    <Text style={style.buttonTitleContainer}>Dicas para gestantes</Text>
                </View>

                <View style={style.buttonContainer}>
                    <Ionicons name="people-outline" size={48} color="#2288BB" />
                    <Text style={style.buttonTitleContainer}>Histórico Familiar</Text>
                </View>

                <View style={style.buttonContainer}>
                    <Fontisto name="heartbeat" size={46} color="#2288BB" />
                    <Text style={style.buttonTitleContainer}>Monitoramento</Text>
                </View>

                <View style={style.buttonContainer}>
                    <Ionicons name="alert-circle-outline" size={48} color="#2288BB" />
                    <Text style={style.buttonTitleContainer}>Alertas</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F4F1F1',
        gap: 30
    },

    headerContainer: {
        width: horizontalScale(310),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCCCCC'
    },

    maeLogo: {
        width: horizontalScale(80),
        height: horizontalScale(80)
    },

    circleBackground: {
        width: horizontalScale(400),
        height: 500,
        backgroundColor: '#FFDFD1',
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,
        position: 'absolute',
        top: 0,
    },

    buttonViewContainer: {
        width: horizontalScale(310),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
    },

    buttonContainer: {
        width: horizontalScale(150),
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 8,
        height: horizontalScale(150),
        borderWidth: 1,
        borderColor: '#CCCCCC'
    },

    buttonTitleContainer: {
        color: '#414141',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',
        width: '80%'
    },

    titleScreen: {
        fontSize: 24,
        fontWeight: '500',
        color: '#2288BB',
        alignSelf: 'flex-start',
        paddingLeft: horizontalScale(40)
    }
})