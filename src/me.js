import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const me = ({ navigation }) => {
    var [data, setData] = useState();
    useEffect(() => {
        fetch("https://654ad5c25b38a59f28ee45ce.mockapi.io/job")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style  ={{justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 3}}>
                <Pressable 
                style={{height: 40, width: 40, marginTop: 4, marginRight: 5}}
                >
                    <Text style = {{textAlign: 'center', fontSize: 25, marginRight: 5}}>☰</Text>
                </Pressable>


            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <View>
                    <Image
                        style={{ height: 70, width: 70, borderRadius: "50%", borderColor: "gray", borderWidth: 1 }}
                        resizeMode='contain'
                        source={require("../assets/avatar.jpg")}
                    />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Lê Duy Khánh458</Text>
                        <Image
                            resizeMode='contain'
                            style={{ height: 29, width: 110, marginLeft: 10 }}
                            source={require("../assets/joincapcut.png")}
                        />
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}>ID:1236007534</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>0</Text>
                    <Text>Following</Text>
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>0</Text>
                    <Text>Followers</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                <Image
                    resizeMode='contain'
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/pen.png")}
                />
                <Text style={{ marginLeft: 10, fontWeight: '500' }}>Tap to add bio</Text>

            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                <Pressable
                onPress={() => navigation.navigate('edit_profile')}
                    style={{ borderWidth: 1, height: 30, width: 290, borderRadius: 5, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray" }}

                >
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Edit profile</Text>
                </Pressable>
                <Pressable
                    style={{ borderRadius: 5, height: 30, width: 30, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >
                    <Image
                        style={{ height: 28, width: 28 }}
                        resizeMode='contain'
                        source={require("../assets/share.png")}
                    />
                </Pressable>
                <Pressable
                    style={{ borderRadius: 5, height: 30, width: 30, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >
                    <Image
                        style={{ height: 28, width: 28 }}
                        resizeMode='contain'
                        source={require("../assets/expard.png")}
                    />
                </Pressable>
            </View>
            <View style={{ marginTop: 15 }}>
                <Pressable
                  onPress={() => navigation.navigate('view_history')}
                    style={{ borderRadius: 5, height: 50, width: 370, borderWidth: 1, borderTopColor: "gray", borderBottomColor: "gray", borderLeftColor: "gray", borderRightColor: "gray", marginLeft: 10 }}
                >


                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                style={{ height: 28, width: 28, marginLeft: 18, marginTop: 8 }}
                                resizeMode='contain'
                                source={require("../assets/dongho.png")}
                            />
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ marginLeft: 10, fontWeight: '500' }}>View history</Text>
                            <Text style={{ marginLeft: 10, color: "gray" }}>Recently viewed templated</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>

                            <Image
                                style={{ height: 28, width: 28, marginLeft: 110, marginTop: 5 }}

                                source={require("../assets/phai.png")}
                            />
                        </View>
                    </View>
                </Pressable>

            </View>
            <View>



            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Pressable
                    onPress={() => navigation.navigate('me_1')}
                    style={{ height: 40, width: "50%", borderBottomColor: "gray", borderWidth: 1, borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white" }}
                >
                    <Text style={{ textAlign: 'center', color: "gray", marginTop: 10, fontSize: 15 }}>
                        Favorites🔒
                    </Text>

                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('me')}
                    style={{ height: 40, width: "50%", borderBottomColor: "Black", borderWidth: 2, borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white" }}
                >
                    <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: '800', fontSize: 15 }}>
                        Likes
                    </Text>

                </Pressable>
            </View>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            // name: '20231102-01',
                            // date: '22/11/2023 02:59',
                            // size: "4MB",
                            // time: "00:29",
                            // image: require('../assets/anh1.png'),
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginTop: 10 }}>
                                    <Pressable style={{ borderRadius: 10, margin: 10 }}
                                    >
                                        <Image
                                            resizeMode='cover'
                                            source={{ uri: item.image }}
                                            style={{ width: "175px", height: 200, resizeMode: 'contain', borderRadius: 10 }}>
                                        </Image>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>{item.name}</Text>
                                    </Pressable>
                                </View>
                            </View>

                        )
                    }}

                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, flex: 1 }}>
                <Pressable
                    style={{ width: "100px", height: "70px", backgroundColor: "White", alignItems: 'center', justifyContent: 'center', marginLeft: -2 }}
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
                        source={require("../assets/me_true.jpg")}
                        style={{ width: '100%', height: "100%" }}
                    />
                </Pressable>
            </View>

        </View>
    )
}

export default me