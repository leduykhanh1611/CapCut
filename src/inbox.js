import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const inbox = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View><Text>trang 3</Text></View>
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                <Pressable
                    style={{ width: "100px", height: "70px", backgroundColor: "White", alignItems: 'center', justifyContent: 'center' }}
                    onPress={() =>
                        navigation.navigate("edit")}
                >

                    <Image
                        source={require("../assets/edit_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() =>
                        navigation.navigate('template')

                    }
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image
                        source={require("../assets/template_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('inbox')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image
                        source={require("../assets/inbox_true.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('me')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}
                >

                    <Image
                        source={require("../assets/me_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>


            </View>
        </View>
    )
}

export default inbox

const styles = StyleSheet.create({})