import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const edit = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{}}>

                    <Image
                        style={{ height: "65px", width: "65px", marginLeft: "10px" }}
                        source={require("../assets/logo_capcut3.png")}
                    />
                </View>
                <View>
                    <Text
                        style={{ fontSize: "27px", fontWeight: "bold", marginBottom: "15px", marginTop: 10 }}

                    >CapCut</Text>

                </View>
                <View>
                    <Image
                        style={{ height: "27px", width: "57px", marginTop: "5px", marginLeft: 60, marginRight: 10 }}
                        source={require("../assets/capcutpro.png")}
                    />

                </View>
                <View>

                </View>
                <View>
                    <Pressable
                        style={{ height: "27px", width: "23px", marginTop: "5px", marginLeft: 10 }}

                    >
                        <Image
                            style={{ height: "27px", width: "23px" }}
                            source={require("../assets/chamhoi.png")}
                        />
                    </Pressable>

                </View>
                <View>
                    <Pressable
                        style={{ height: "29px", width: "25px", marginTop: "5px", marginLeft: 25 }}

                    >
                        <Image
                            style={{ height: "29px", width: "25px" }}
                            source={require("../assets/setting.png")}
                        />
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <View>
                    <Pressable
                        style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 20, borderRadius: 10 }}

                    >
                        <Image
                            style={{ height: "60px", width: "60px", borderRadius: 10 }}
                            source={require("../assets/photoeditor.png")}
                        />
                        <Text style = {{fontSize: 10, fontWeight: '500', marginTop: 7, textAlign: 'center' }}>Photo editor</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 1, borderRadius: 10 }}

                    >
                        <Image
                            style={{ height: "60px", width: "60px", borderRadius: 10 }}
                            source={require("../assets/texttoimg.png")}
                        />
                        <Text style = {{fontSize: 10, fontWeight: '600', marginTop: 7, textAlign: 'center' }}>Text to image</Text>
                    </Pressable>
                </View>
                <View style = {{}}>
                    <Pressable

                        style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 1, borderRadius: 10 }}
                    >
                        <Image
                            style={{ height: "60px", width: "60px", borderRadius: 10 }}
                            source={require("../assets/autocut.png")}
                        />
                        <Text style = {{fontSize: 10, fontWeight: '500', marginTop: 7, marginLeft: 12 }}>AutoCut</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 1, borderRadius: 10 }}

                    >
                        <Image
                            style={{ height: "60px", width: "60px", borderRadius: 10 }}
                            source={require("../assets/productphoto.png")}
                        />
                        <Text style = {{fontSize: 10, fontWeight: '600', marginTop: 7, textAlign: 'center', marginLeft: -8 }}>Product Photo</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={{ height: "60px", width: "70px", marginTop: "5px", marginLeft: 1, borderRadius: 10, marginRight: 20 }}

                    >
                        <Image
                            style={{ height: "60px", width: "60px", borderRadius: 10 }}
                            source={require("../assets/expard.png")}
                        />
                        <Text style = {{fontSize: 10, fontWeight: '500', marginTop: 7, marginLeft: 15  }}>Expard</Text>
                    </Pressable>
                </View>
            </View>
            <View style = {{marginTop: 40}}>
                <Pressable style  ={{marginLeft: 20, borderRadius: 40}}>
                        <Image
                        style = {{width: "352px", height: 126, borderRadius: 18}}
                        source={require("../assets/newproject.png")}
                        />


                </Pressable>
            </View>
            <View style = {{marginLeft: 20, marginTop: 20, flexDirection: 'row'}}>
                <Text style  ={{fontWeight: 'bold', fontSize: 20}}>Project</Text>
                <Image
                style= {{width: 75, height:30, marginLeft: 160}}
                source={require("../assets/cloud.png")}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                <Pressable
                    style={{ width: "100px", height: "70px", backgroundColor: "White", alignItems: 'center', justifyContent: 'center', marginLeft: -2  }}
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
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2  }}
                >
                    <Image
                        source={require("../assets/template_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('inbox')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2  }}
                >
                    <Image
                        source={require("../assets/inbox_false.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('me')}
                    style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2  }}
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