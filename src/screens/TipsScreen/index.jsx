import { SafeAreaView, Image, View, StyleSheet, Text, ScrollView} from 'react-native';

export default function TipsScreen() {
    return(
        <SafeAreaView>
            <View style={styles.viewContainer1TS}>
              <View>
                 <Image
                 source={require('./../../../assets/menuoptionsicon.png')}
                 resizeMode="cover"
                 style={{ width: 50, height: 50, alignItems: 'center'}}
                />
              </View>
              <View>
                 <Image
                 source={require('./../../../assets/logo.png')}
                 resizeMode="contain"
                 style={{ width: 60, height: 60, alignItems: 'flex-end'}}
                />
              </View>
              <View>
                 <Image
                 source={require('./../../../assets/engineconfigicon.png')}
                 resizeMode="cover"
                 style={{ width: 90, height: 90, alignItems: 'flex-start'}}
                 />
               </View>
            </View>
            <Text style={styles.textTS}> Tamanho do seu bebê por semana: </Text>
            
            <ScrollView>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 1 - 4 Semanas</Text>
                    <Image
                    source={require('./../../../assets/papoula.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de uma semente de papoula. (2mm)</Text>
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text  style={styles.subTitleText}> 5 - 8 Semanas</Text>
                    <Image
                    source={require('./../../../assets/lentilha.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de um grão de lentilha.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 9 - 12 Semanas</Text>
                    <Image
                    source={require('./../../../assets/uva.png')}
                    resizeMode='cover'
                    style={{ width: 200, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de uma uva.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 13 - 16 Semanas</Text>
                    <Image
                    source={require('./../../../assets/limao.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de um limão.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 17 - 20 Semanas</Text>
                    <Image
                    source={require('./../../../assets/pessego.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de um pêssego.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 21 - 24 Semanas</Text>
                    <Image
                    source={require('./../../../assets/manga.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de uma manga.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 25 - 28 Semanas</Text>
                    <Image
                    source={require('./../../../assets/abacate.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de um abacate.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 29 - 32 Semanas</Text>
                    <Image
                    source={require('./../../../assets/abacaxi.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de um abacaxi.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 33 - 36 Semanas</Text>
                    <Image
                    source={require('./../../../assets/melancia.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de uma melancia pequena.</Text>                
                </View>
                <View style={styles.viewContainer2TS}> 
                    <Text style={styles.subTitleText}> 36 - 40 Semanas</Text>
                    <Image
                    source={require('./../../../assets/melao.png')}
                    resizeMode='cover'
                    style={{ width: 150, height: 150}}
                    />
                    <Text style={styles.contentText}>Mamãe, seu bebê tem o tamanho de uma melão.</Text>                
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    viewContainer1TS: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 100,
        backgroundColor: "#F4F1F1"
    },
    textTS: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 0
    },

    viewContainer2TS: {
        alignItems: 'center',
        marginBottom: 50,
        justifyContent: 'center',
        gap: 30
    },

    subTitleText: {
        color: '#F58581',
        fontSize: 20,
        fontWeight: '700'
    },

    contentText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500'
    }


})