import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

const view_history = ({ navigation }) => {
    var [data, setData] = useState();
    const [isEditMode, setIsEditMode] = useState(false);
    useEffect(() => {
        fetch("https://654ad5c25b38a59f28ee45ce.mockapi.io/job")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <Pressable
                    onPress={() => navigation.navigate('me')}>

                    <Image
                        resizeMode='contain'
                        style={{ width: 60, height: 60 }}
                        source={require("../assets/back.jpg")}
                    />
                </Pressable>

                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, fontWeight: '500' }}>View history</Text>
                <Pressable
                    onPress={() => setIsEditMode(!isEditMode)}
                    style={{ marginTop: 20, marginRight: 20 }}
                >
                    <Text style={{ color: "#07f7f7" }}>Edit</Text>
                </Pressable>
            </View>
            <View style={{ flex: 9 }}>


                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginTop: 10 }}>
                                    <Pressable style={{ borderRadius: 10, margin: 10 }}
                                    >
                                        <Image
                                            resizeMode='cover'
                                            source={{ uri: item.image }}
                                            style={{ width: "175px", height: 300, resizeMode: 'contain', borderRadius: 10 }}>
                                        </Image>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>{item.name}</Text>
                                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                                            <Image
                                                resizeMode='cover'
                                                source={{ uri: item.image }}
                                                style={{ width: "20px", height: 20, resizeMode: 'contain', borderRadius: 10, marginRight: 10 }}>
                                            </Image>
                                            <Text style={{ textAlign: 'left', fontSize: 13, color: "gray" }}>{item.name_ac}</Text>
                                            {isEditMode && (
                                                <RadioButton
                                                    color="#007BFF"
                                                />
                                            )}
                                        </View>

                                    </Pressable>
                                </View>
                            </View>

                        )
                    }}

                />
            </View>
        </View>
    )
}

export default view_history

const styles = StyleSheet.create({})