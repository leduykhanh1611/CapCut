import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const edit = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <View style = {{}}>

                    <Image 
                    style ={{height: "65px", width:"65px", marginLeft:" 10px", marginLeft: "2px"}}
                    source={require("../assets/logo_capcut3.png")}
                    />
                </View>
                <View>
                    <Text
                    style = {{fontSize: "18px", fontWeight:"bold", marginBottom: "15px" }}
                    
                    >Cap Cut</Text>

                </View>
                <View>
                    

                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                <Pressable
                    style={{ width: "100px", height: "70px", backgroundColor: "White", alignItems: 'center', justifyContent: 'center' }}
                    onPress={() =>
                        navigation.navigate("edit")}
                >

                    <Image
                        source={require("../assets/edit_true.jpg")}
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
                        source={require("../assets/inbox_false.jpg")}
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
        </View >
    )
}

export default edit

const styles = StyleSheet.create({})