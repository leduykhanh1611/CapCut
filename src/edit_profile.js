import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const edit_profile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('me')}>

                    <Image
                        resizeMode='contain'
                        style={{ width: 60, height: 60 }}
                        source={require("../assets/back.jpg")}
                    />
                </Pressable>
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, fontWeight: '500', marginLeft: 95 }}>Edit profile</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Image
                    style={{ height: 70, width: 70, borderRadius: "50%", borderColor: "gray", borderWidth: 1 }}
                    resizeMode='contain'
                    source={require("../assets/avatar.jpg")}
                />
                <Pressable>

                    <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 10 }}>Change photo</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 20 }}>
                <Text style={{ marginTop: 7, fontSize: 18 }}>Nickname</Text>
                <Text style={{ marginLeft: 130, marginTop: 7, fontSize: 15, color: "gray" }}>Lê Duy Khánh458</Text>
                <Image
                    style={{ height: 28, width: 28, marginLeft: 7, marginTop: 5 }}
                    resizeMode='contain'
                    source={require("../assets/phai.png")}
                />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 30 }}>
                <Text style={{ marginTop: 7, fontSize: 18 }}>CapCut ID</Text>
                <Text style={{ marginLeft: 162, marginTop: 7, fontSize: 15, color: "gray" }}>1236007534</Text>
                <Image
                    style={{ height: 28, width: 28, marginLeft: 7, marginTop: 5 }}
                    resizeMode='contain'
                    source={require("../assets/phai.png")}
                />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 30 }}>
                <Text style={{ marginTop: 7, fontSize: 18 }}>Gender</Text>
                <Text style={{ marginLeft: 176, marginTop: 7, fontSize: 15, color: "gray" }}>Don't display</Text>
                <Image
                    style={{ height: 28, width: 28, marginLeft: 7, marginTop: 5 }}
                    resizeMode='contain'
                    source={require("../assets/phai.png")}
                />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 30 }}>
                <Text style={{ marginTop: 7, fontSize: 18 }}>Bio</Text>
                <Image
                    style={{ height: 28, width: 28, marginLeft: 302, marginTop: 5 }}
                    resizeMode='contain'
                    source={require("../assets/phai.png")}
                />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 30 }}>
                <Text style={{ marginTop: 7, fontSize: 20, fontWeight: 'bold' }}>Links</Text>
            </View> 
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 30 }}>
                <Text style={{ marginTop: 7, fontSize: 18 }}>TikTok</Text>
                <Text style={{ marginLeft: 240, marginTop: 7, fontSize: 15, color: "gray" }}>Add</Text>
                <Image
                    style={{ height: 28, width: 28, marginLeft: 7, marginTop: 5 }}
                    resizeMode='contain'
                    source={require("../assets/phai.png")}
                />
            </View>
        </View>
    )
}

export default edit_profile

