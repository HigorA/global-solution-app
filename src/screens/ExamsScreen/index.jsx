import { SafeAreaView, Text } from 'react-native'
import ExamComponent from '../../components/ExamComponent'
import { StyleSheet } from 'react-native'
import { horizontalScale } from '../../Metrics'
import { View } from 'react-native'

export default function ExamsScreen() {

    return(
        <SafeAreaView style={style.container}>
            <View style={style.circleBackground} />
            <Text>Exam Screen</Text>
            <ExamComponent />
            <ExamComponent />
            <ExamComponent />
            <ExamComponent />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
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
})