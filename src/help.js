import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'


const inbox = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 2, backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'white', marginBottom: '25px', flexDirection: 'row' }}>
                    <Pressable
                        onPress={() =>
                            navigation.navigate('edit')

                        }>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: "50px", width: "50px", resizeMode: 'contain', left: '10px', top: '5px' }}
                                source={require("../assets/back.jpg")}
                            />
                            <Text style={{ left: '60px', top: '15px', fontWeight: 'bold', fontSize: '20px' }}>Trung tâm trợ giúp</Text>
                        </View>

                    </Pressable>
                </View>


                <View style={{ flex: 2, backgroundColor: 'white', marginBottom: '10px' }}>
                    <View style={{ width: "100%" }}>
                        <ScrollView>
                            <View style={{ flexDirection: 'column' }}>


                                {/* ----- */}
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Đang thịnh hành
                                        </Text>


                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Chỉnh sửa
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Mẫu
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Bản nháp
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Sự cố, kết nối và cập nhật
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Vi phạm và báo cáo
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Mua hàng
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            // justifyContent: "center",
                                            // alignItems: "center",
                                            marginBottom: '25px',
                                            borderBottomWidth: '1px',
                                            borderColor: 'gray'
                                        }}

                                    >
                                        <Image
                                            style={{ height: "30px", width: "30px", left: '10px' }}
                                            source={require("../assets/+.png")}
                                        />
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '55px', bottom: '25px  ' }}
                                        >
                                            Pro
                                        </Text>
                                    </Pressable>
                                </View>

                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                    <Image
                                        style={{ height: "150px", width: "4000px", resizeMode:'contain' }}
                                        source={require("../assets/quest.png")}
                                    />

                                </View>





                            </View>
                        </ScrollView>

                    </View>


                </View>

            </View>
        </SafeAreaView>

    )
}

export default inbox

const styles = StyleSheet.create({})