import { SafeAreaView, Text, StyleSheet, Image} from "react-native";

export default function HomeScreen() {

    return(
        <SafeAreaView style={styles.conteinerSafe}>
            <Text>
                Home Screen
            </Text>
            <Image
            source={require('')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteinerSafe:{
        backgroundColor: '#F78881'
    }
})