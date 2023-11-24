import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const inbox = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(242, 242, 242)' }}>
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>Hộp Thư đến</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginBottom: '10px', backgroundColor: 'white' }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate('inbox2')

                                }

                                style={{
                                    width: "45%",
                                    height: "45px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    left: '10px',
                                    borderColor: 'gray'

                                }}

                            >
                                <Text
                                    style={{ color: "gray", fontWeight: "bold", textAlign: "center", fontSize: '15px' }}
                                >
                                    Đội ngũ chính thức của CAPCUT
                                </Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    width: "45%",
                                    height: "45px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    left: '28px',
                                    borderColor: 'gray',
                                    borderBottomWidth: '3px'
                                }}
                            >
                                <Text
                                    style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '15px' }}
                                >
                                    Nội dung cập nhật nổi bật
                                </Text>
                            </Pressable>

                        </View>
                    </ScrollView>

                </View>


            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={{
                                    width: "110px",
                                    height: "38px",
                                    borderWidth: "1px",
                                    borderRadius: "5px",
                                    backgroundColor: 'rgb(242, 242, 242)',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    left: '20px',
                                    borderColor: 'gray',
                                    backgroundColor: "black"

                                }}
                            >
                                <Text
                                    style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px', color: 'white' }}
                                >
                                    Di động
                                </Text>
                            </Pressable>
                            <Pressable
                            onPress={() =>
                                navigation.navigate('inbox')

                            }
                                style={{
                                    width: "110px",
                                    height: "38px",
                                    borderWidth: "1px",
                                    borderRadius: "5px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: 'rgb(242, 242, 242)',
                                    left: '28px',
                                    borderColor: 'gray'
                                }}
                            >
                                <Text
                                    style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                >
                                    Trực tuyến
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate('inbox1_3')

                                }
                                style={{
                                    width: "110px",
                                    height: "38px",
                                    borderWidth: "1px",
                                    borderRadius: "5px",
                                    backgroundColor: 'rgb(242, 242, 242)',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    left: '36px',
                                    borderColor: 'gray'

                                }}
                            >
                                <Text
                                    style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '13px' }}
                                >
                                    Máy tính
                                </Text>
                            </Pressable>

                        </View>
                    </ScrollView>

                </View>
            </View>

            {/* end */}

            <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                style={{
                                    width: "350px",
                                    height: '360px',
                                    borderRadius: "15px",
                                    backgroundColor: 'white',
                                    // justifyContent: "center",
                                    // alignItems: "center",
                                    left: '20px',
                                    borderColor: 'gray',
                                    marginBottom: '20px'

                                }}
                            >
                                <Text
                                    style={{ left: '15px', top: '15px', color: "gray", fontWeight: "bold", fontSize: '13px' }}
                                >
                                    18/10/2023
                                </Text>
                                <Text style={{ left: '15px', top: '15px', fontWeight: 'bold', fontSize: '18px' }}>Tự động điều chỉnh</Text>

                                <View style={{ width: '330px', left: '15px' }}>
                                    <Text style={{ top: '25px', fontWeight: 'bold', fontSize: '15px', color: 'gray', }}>
                                        Tùy chỉnh tỷ lệ khung hình của video cho nhiều nền tảng chỉ với 1 cú nhấp.
                                    </Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require("../assets/tb3.png")}
                                        style={{ top: '40px', width: '300px', height: "180px", justifyContent: 'center', alignItems: 'center' }}></Image>
                                </View>

                                <Text style={{ left: '15px', top: '55px', fontWeight: 'bold', fontSize: '18px', color: 'gray' }}>Thử ngay</Text>

                            </Pressable>
                            <Pressable
                                style={{
                                    width: "350px",
                                    height: '360px',
                                    borderRadius: "15px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: 'white',
                                    left: '20px',
                                    borderColor: 'gray',
                                    marginBottom: '100px'

                                }}
                            >


                                <View style={{ width: '330px', left: '15px' }}>
                                    <Text
                                        style={{ color: "gray", fontWeight: "bold", fontSize: '13px' }}
                                    >
                                        15/10/2023
                                    </Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: '18px', top: '1px' }}>Khung hình chính</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: '15px', color: 'gray', top: '10px', right:'10px' }}>
                                        Thêm các khung hình chính để xác định chính điểm bắt đầu và điểm kết thúc nhằm tạo chuyển động liền mạch.
                                    </Text>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require("../assets/tb4.png")}
                                        style={{ width: '300px', height: "200px", justifyContent: 'center', alignItems: 'center', resizeMode: 'contain' }}></Image>

                                    <Text style={{ right: '110px', fontWeight: 'bold', fontSize: '18px', color: 'gray' }}>Thử ngay</Text>
                                </View>


                            </Pressable>


                        </View>

                    </ScrollView>



                </View>
            </View>










            {/* menu duoi */}
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