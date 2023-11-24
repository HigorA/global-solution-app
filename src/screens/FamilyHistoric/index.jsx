import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

export default function FamilyHistoric() {
    return(
        <SafeAreaView style={style.container}>
            <Text>Family History Screen</Text>
            <View></View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})