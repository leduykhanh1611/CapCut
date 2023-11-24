import { Alert, Image, Pressable, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
const edit = ({ navigation }) => {
    var [data, setData] = useState();
    useEffect(() => {
        fetch("https://654ad5c25b38a59f28ee45ce.mockapi.io/capcut")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "white", position: 'relative' }}>
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
                            onPress={() =>
                                navigation.navigate('setting')

                            }
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
                            onPress={() => navigation.navigate('select_img')}
                            style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 20, borderRadius: 10 }}

                        >
                            <Image
                                style={{ height: "60px", width: "60px", borderRadius: 10 }}
                                source={require("../assets/photoeditor.png")}
                            />
                            <Text style={{ fontSize: 10, fontWeight: '500', marginTop: 7, textAlign: 'center' }}>Photo editor</Text>
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
                            <Text style={{ fontSize: 10, fontWeight: '600', marginTop: 7, textAlign: 'center' }}>Text to image</Text>
                        </Pressable>
                    </View>
                    <View style={{}}>
                        <Pressable
                            onPress={() => navigation.navigate('select_img_2')}
                            style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 1, borderRadius: 10 }}
                        >
                            <Image
                                style={{ height: "60px", width: "60px", borderRadius: 10 }}
                                source={require("../assets/autocut.png")}
                            />
                            <Text style={{ fontSize: 10, fontWeight: '500', marginTop: 7, marginLeft: 12 }}>AutoCut</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable
                            onPress={() => navigation.navigate('select_img')}
                            style={{ height: "60px", width: "72px", marginTop: "5px", marginLeft: 1, borderRadius: 10 }}

                        >
                            <Image
                                style={{ height: "60px", width: "60px", borderRadius: 10 }}
                                source={require("../assets/productphoto.png")}
                            />
                            <Text style={{ fontSize: 10, fontWeight: '600', marginTop: 7, textAlign: 'center', marginLeft: -8 }}>Product Photo</Text>
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
                            <Text style={{ fontSize: 10, fontWeight: '500', marginTop: 7, marginLeft: 15 }}>Expard</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Pressable
                    onPress={() => navigation.navigate('newproject')}
                    style={{ marginLeft: 20, borderRadius: 40 }}>
                        <Image
                            style={{ width: "352px", height: 126, borderRadius: 18 }}
                            source={require("../assets/newproject.png")}
                        />
                    </Pressable>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Project</Text>
                    <Image
                        style={{ width: 75, height: 30, marginLeft: 150 }}
                        source={require("../assets/cloud.png")}
                    />
                    <Pressable>

                        <Image
                            style={{ width: 29, height: 30, marginLeft: 20, marginBottom: 10 }}
                            source={require("../assets/chinhhang.png")}
                        />
                    </Pressable>
                </View>
                <View style={{ flex: 1 }}>

                    <FlatList
                        data={data}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                // name: '20231102-01',
                                // date: '22/11/2023 02:59',
                                // size: "4MB",
                                // time: "00:29",
                                // image: require('../assets/anh1.png'),
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Pressable style={{}}
                                        >
                                            <Image
                                                source={{ uri: item.image }}
                                                style={{ width: 90, height: 90, resizeMode: 'contain' }}>
                                            </Image>

                                        </Pressable>
                                    </View>
                                    <View style={{ marginLeft: 18 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ color: "gray", marginTop: 10 }}>{item.date}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Text style={{ color: "gray" }}>{item.size}</Text>
                                            <Text style={{ color: "gray", marginLeft: 20 }}>{item.time}</Text>
                                        </View>

                                    </View>
                                </View>

                            )
                        }}

                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, flex: 1 }}>
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
                        style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                    >
                        <Image
                            source={require("../assets/template_false.jpg")}
                            style={{ width: '100%', height: "100%" }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('inbox')}
                        style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                    >
                        <Image
                            source={require("../assets/inbox_false.jpg")}
                            style={{ width: '100%', height: "100%" }}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('me')}
                        style={{ width: "100px", height: "70px", backgroundColor: "white", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
                    >

                        <Image
                            source={require("../assets/me_false.jpg")}
                            style={{ width: '100%', height: "100%" }}
                        />
                    </Pressable>


                </View>
            </View >
        </SafeAreaView>
    )
}

export default edit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})