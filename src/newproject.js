import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const newproject = () => {
    var [data, setData] = useState();
    const navigation = useNavigation();
    useEffect(() => {
        fetch("https://654ad5c25b38a59f28ee45ce.mockapi.io/job")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);
    return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, flex: 1, justifyContent: 'space-evenly' }}>
                <Pressable
                    onPress={() => navigation.navigate('edit')}>
                    <Text style={{ color: "white", fontSize: 30 }}>X</Text>

                </Pressable>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', color: "white" }}>Gần đây</Text>
                <Image
                    style={{ width: 15, height: 15, borderRadius: "12px 8px", marginTop: 15, marginLeft: 5 }}
                    source={require("../assets/expard.png")}
                />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', color: "white" }}>Lê Duy Khánh</Text>
                <Image
                    style={{ width: 15, height: 15, borderRadius: "12px 8px", marginTop: 15, marginLeft: 5 }}
                    source={require("../assets/expard.png")}
                />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', color: "white" }}>Stock video</Text>

            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Pressable
                    style={{ width: "33%", height: "100%" }}

                >
                    <Text style={{ color: "gray", textAlign: 'center', marginTop: 25 }}>Videos</Text>
                </Pressable>
                <Pressable
                    style={{ width: "33%", height: "100%", borderBottomWidth: 1, borderBottomColor: "#07f7f7" }}

                >
                    <Text style={{ color: "#07f7f7", textAlign: 'center', marginTop: 25 }}>Photos</Text>
                </Pressable>

                <Pressable
                    style={{ width: "33%", height: "100%" }}

                >
                    <Text style={{ color: "gray", textAlign: 'center', marginTop: 25 }}>Lives photos</Text>
                </Pressable>


            </View>
            <View style={{ flex: 8 }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            // name: '20231102-01',
                            // date: '22/11/2023 02:59',
                            // size: "4MB",
                            // time: "00:29",
                            // image: require('../assets/anh1.png'),
                            <View style={{ flexDirection: 'row', backgroundColor: "black", flex: 1 }}>
                                <View>
                                    <Pressable style={{}}
                                        onPress={() => {
                                            navigation.navigate('image_3', item)
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
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Pressable
                    style={{ marginLeft: 100, marginTop: 15, backgroundColor: "black", height: 40, width: 100, borderRadius: "10px", marginBottom: 20, borderColor: "white", borderWidth: 1 }}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center', marginTop: 7 }}>Collage</Text>
                </Pressable>
                <Pressable
                    style={{ marginLeft: 10, marginTop: 15, backgroundColor: "black", height: 40, width: 100, borderRadius: "10px", marginBottom: 20, borderColor: "white", borderWidth: 1 }}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center', marginTop: 7 }}>Edit photo</Text>
                </Pressable>
                <Pressable
                    style={{ marginLeft: 10, marginTop: 15, backgroundColor: "#07f7f7", height: 40, width: 60, borderRadius: "10px", marginBottom: 20 }}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: 'center', marginTop: 7 }}>Next</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default newproject