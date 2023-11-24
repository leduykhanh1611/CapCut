import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { RadioButton } from 'react-native-paper';

const select_img = ({ navigation }) => {
    var [data, setData] = useState();
    useEffect(() => {
        fetch("https://654ad5c25b38a59f28ee45ce.mockapi.io/job")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, flex: 1 }}>
                <Pressable
                    onPress={() => navigation.navigate('edit')}>
                    <Text style={{ color: "white", fontSize: 30 }}>X</Text>

                </Pressable>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', marginLeft: 115, color: "white" }}>Gần đây</Text>
                <Image
                    style={{ width: 15, height: 15, borderRadius: "12px 8px", marginTop: 15, marginLeft: 5 }}
                    source={require("../assets/expard.png")}
                />
            </View>
            <View style={{ flex: 8 }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: "black", flex: 1 }}>
                                <View>
                                    <Pressable style={{}}
                                    onPress={()=>{
                                        navigation.navigate('image_1', item)
                                }}
                                    >
                                        <Image

                                            resizeMode='contain'
                                            source={{ uri: item.image }}
                                            style={{ width: 120, height: 120, resizeMode: 'contain', backgroundColor: "black", margin: 5 }}>
                                        </Image>
                                        <RadioButton
                                            color="#007BFF"
                                        />
                                    </Pressable>
                                </View>

                            </View>

                        )
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Pressable
                    style={{ marginLeft: 300, marginTop: 15, backgroundColor: "#07f7f7", height: 40, width: 60, borderRadius: "10px" }}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center', marginTop: 7 }}>Edit</Text>

                </Pressable>
            </View>
        </View>
    )
}

export default select_img

const styles = StyleSheet.create({})