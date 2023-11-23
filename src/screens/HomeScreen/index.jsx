import { SafeAreaView, Text, StyleSheet, Image} from "react-native";

export default function HomeScreen() {

    return(
        <SafeAreaView style={styles.conteinerSafe}>
            <Text>
                Home Screen
            </Text>
            <Image
                source={require('./../../../assets/mae.png')}
                resizeMode="cover"
                style={{width: 200, height: 200, alignSelf: 'center'}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteinerSafe:{
        backgroundColor: '#FFCAB3'
    }
})