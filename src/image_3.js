import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'
const image_3 = (route) => {
    const navigation = useNavigation()
    const data = route.route.params;
    console.log(data)
    return (

        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, flex: 1, justifyContent: 'space-between' }}>
                <Pressable
                    onPress={() => navigation.navigate('newproject')}>
                    <Text style={{ color: "white", fontSize: 30 }}>X</Text>

                </Pressable>

                <RadioButton
          
                    color="#007BFF"
                />
            </View>
            <View style={{ flex: 8 }}>
                <Image
                    source={{ uri: data.image }}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode='contain'
                />
            </View>
            <View style={{ flex: 1 }}>
                <Pressable
                    style={{ marginLeft: 300, marginTop: 15, backgroundColor: "#07f7f7", height: 40, width: 60, borderRadius: "10px", marginBottom: 20 }}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center', marginTop: 7 }}>Add</Text>

                </Pressable>
            </View>
        </View>
    )
}

export default image_3
