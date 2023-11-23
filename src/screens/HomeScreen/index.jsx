import { SafeAreaView, Text, StyleSheet, Image, Button, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.containerSafe}>


      <Image
        source={require('./../../../assets/logo.png')}
        resizeMode="cover"
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 250 }}
      />

      <Image
        source={require('./../../../assets/mae.png')}
        resizeMode="cover"
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
    
        
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          color="#f58581"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    backgroundColor: '#FFCAB3',
    flex: 1, 
  },
  buttonContainer: {
    width: '80%', 
    borderRadius: 20, 
    overflow: 'hidden', 
    alignSelf: 'center',
    marginTop: 200 
  },
});