import { SafeAreaView, Text, StyleSheet, Image, Button, View, Pressable } from 'react-native';
import { horizontalScale } from '../../Metrics';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.containerSafe}>


      <Image
        source={require('./../../../assets/logo.png')}
        resizeMode="contain"
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 250 }}
      />

      <Image
        source={require('./../../../assets/mae.png')}
        resizeMode="cover"
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
    
        
      <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    backgroundColor: '#FFCAB3',
    flex: 1, 
    alignItems: 'center'
  },

  loginButton: {
    width: horizontalScale(300),
    backgroundColor: '#F58581',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 16
  },

  loginButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  }
});