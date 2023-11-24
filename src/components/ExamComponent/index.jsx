import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { horizontalScale } from "../../Metrics";

export default function ExamComponent() {
    return (
        <View style={style.container}>
            <View style={style.faixa}/>
            <View style={style.textView}>
                <Text style={[style.textStyle, {fontSize: 24}]}>Tipo Exame:</Text>
                <Text style={[style.textStyle, {fontSize: 20}]}>Resultado:</Text>
                <Text style={[style.textStyle, {fontSize: 16}]}>Data do exame:</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: horizontalScale(300),
        backgroundColor: '#BAE6FD',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#0369A1',
        height: 100,
        flexDirection: 'row'
    },

    faixa: {
        height: '100%',
        width: '5%',
        backgroundColor: '#0369A1'
    },

    textView: {
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },

    textStyle: {
        color: "#353535",
        fontWeight: 'bold'
    }
})