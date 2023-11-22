import { SafeAreaView, StyleSheet, Image, Text, View, FlatList, Pressable, Button, TextInput, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'

const item = [
    {
        name: 'Tourist Attraction',
        author: 'San_project [LDR]',
        image: require('../assets/10.png'),
    },
    {
        name: 'Desserts And Snacks',
        author: 'Rafif Abid [NL]',
        image: require('../assets/2.png'),
    },
    {
        name: 'Coffee Shop In TikTok',
        author: "Cindy",
        image: require('../assets/3.png'),
    },
    {
        name: 'Home Furniture ',
        author: "Creavora Studio",
        image: require('../assets/4.png'),
    },
    {
        name: 'Summer Camp',
        author: "Bonnie",
        image: require('../assets/5.png'),
    },
    {
        name: 'Best Coffee in Town',
        author: "AScreative",
        image: require('../assets/6.png'),
    },
    {
        name: 'Aesthetic',
        author: "RsMry",
        image: require('../assets/7.png'),
    },
    {
        name: 'How to make Coffee',
        author: "Regina (LDR)",
        image: require('../assets/8.png'),
    },
    {
        name: 'Its weekend guys..',
        author: "Creavora Studio",
        image: require('../assets/9.png'),
    },
    {
        name: 'Field of Flowers',
        author: "debynopen23 [WH]",
        image: require('../assets/10.png'),
    },


]
const template = ({ navigation }) => {
    const nav = useNavigation()
    const rou = useRoute()
    const [state, setState] = useState(item);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '5px' }}>

                    <TextInput
                        placeholder="T1 vô địch chung kết thế giới"
                        placeholderTextColor={"gray"}
                        style={{
                            padding: 5,
                            width: '95%',
                            height: '100px',
                            borderWidth: "1px",
                            backgroundColor: 'rgba(175, 193, 205, 0.15)',
                            borderRadius: "20px",
                            flexDirection: "row"
                            
                        }}
                    >
            
                    </TextInput>
                    <Image
                        source={require("../assets/banner.jpg")}
                        style={{ width: '95%', height: '100px', alignItems: 'center', resizeMode: 'contain' }}
                    ></Image>
                </View>


                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-around",


                    }}
                >
                    <View style ={{width:"100%", flexDirection: "row"}}>
                        <ScrollView style={{}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '10px',
                                        borderColor: 'gray'

                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Đang theo dõi
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "white",
                                        left: '20px',
                                        borderColor: 'gray',
                                        backgroundColor: "black"
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px', color: "white" }}
                                    >
                                        Dành cho bạn
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '30px',
                                        borderColor: 'gray'

                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Mẫu video
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '40px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Nhạc Beat
                                    </Text>
                                </Pressable>

                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '50px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Lời Bài Hát
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '60px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Ghép độc lạ
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '70px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Lễ Hội
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '80px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Vlog
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '90px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Gia Đình
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '100px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        FB&IG Story
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '110px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Bạn Bè
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '120px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Together
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '130px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Anime
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        width: "99px",
                                        height: "32px",
                                        borderWidth: "1px",
                                        borderRadius: "5px",
                                        backgroundColor: "white",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        left: '140px',
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Text
                                        style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                    >
                                        Game
                                    </Text>
                                </Pressable>
                            </View>



                        </ScrollView>
                    </View>
                </View>

                <View style={{ flex: 8 }}>

                    <FlatList
                        data={item}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <Pressable style={{ height: '250px', marginLeft: '15px', right: '8px', width: '180px', borderRadius: '10px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginBottom: '15px' }}
                                // onPress={(nav.navigate(''))}
                                >
                                    <Image
                                        source={item.image}
                                        style={{ width: '100%', height: '200px', resizeMode: 'contain' }}>
                                    </Image>
                                    <Text
                                        style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text
                                        style={{ color: 'gray' }}>{item.author}</Text>
                                </Pressable>
                            )
                        }}

                    />
                </View>
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
                            source={require("../assets/template_true.jpg")}
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
            </View>
        </SafeAreaView>
    )
}

export default template

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})