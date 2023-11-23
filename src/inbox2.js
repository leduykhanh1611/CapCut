import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'


const inbox = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(242, 242, 242)' }}>
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>Hộp Thư đến</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', marginBottom: '10px' }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={{
                                    width: "45%",
                                    height: "45px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    left: '10px',
                                    borderColor: 'black',
                                    borderBottomWidth: '3px'

                                }}
                            >
                                <Text
                                    style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: '15px' }}
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
                                }}
                                onPress={() =>
                                    navigation.navigate('inbox')

                                }
                            >
                                <Text
                                    style={{ color: "gray", fontWeight: "bold", textAlign: "center", fontSize: '15px' }}
                                >
                                    Nội dung cập nhật nổi bật
                                </Text>
                            </Pressable>

                        </View>
                    </ScrollView>

                </View>


            </View>

            <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                style={{
                                    width: "350px",
                                    height: '280px',
                                    borderRadius: "15px",
                                    backgroundColor: 'white',
                                    // justifyContent: "center",
                                    // alignItems: "center",
                                    left: '20px',
                                    borderColor: 'gray',
                                    marginBottom: '20px'

                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/capcut_icon.png")}
                                        style={{ top: '12px', width: '30px', height: '30px ', resizeMode: 'contain', left: '15px' }}></Image>
                                    <Text
                                        style={{ top: '15px', fontWeight: "bold", fontSize: '18px', left: '15px' }}
                                    >
                                        Tin nhắn hệ thống
                                    </Text>
                                    <Text
                                        style={{ top: '20px', color: "gray", fontWeight: "bold", fontSize: '13px', textAlign: 'right', left: '110px' }}
                                    >
                                        18-10
                                    </Text>
                                </View>

                                <View style={{ width: '330px', left: '15px', flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/fire.png")}
                                        style={{ top: '20px', width: '30px', height: '30px ', resizeMode: 'contain', marginRight: '5px' }}></Image>
                                    <Text style={{ top: '25px', fontWeight: 'bold', fontSize: '20px', marginRight: '5px' }}>
                                        Sửa đã tay
                                    </Text>
                                    <Image
                                        source={require("../assets/fire.png")}
                                        style={{ top: '20px', width: '30px', height: '30px ', resizeMode: 'contain', }}></Image>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ top: '40px', fontWeight: '500', fontSize: '20px', left: '18px' }}>
                                        TĂNG TỐC ĐỘ chỉnh sửa video dài hơn trên trình duyệt web với trình chỉnh sửa video trực tuyến đầy đột phá của chúng tôi !
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ left: '15px', top: '55px', fontWeight: 'bold', fontSize: '18px', color: 'gray' }}>Xem thêm</Text>
                                    <Image
                                        source={require("../assets/right.png")}
                                        style={{ top: '45px', width: '50px', height: '50px ', resizeMode: 'contain', marginRight: '5px', left: '200px' }}></Image>

                                </View>
                            </Pressable>

                            <Pressable
                                style={{
                                    width: "350px",
                                    height: '180px',
                                    borderRadius: "15px",
                                    backgroundColor: 'white',
                                    // justifyContent: "center",
                                    // alignItems: "center",
                                    left: '20px',
                                    borderColor: 'gray',
                                    marginBottom: '20px'

                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/capcut_icon.png")}
                                        style={{ top: '12px', width: '30px', height: '30px ', resizeMode: 'contain', left: '15px' }}></Image>
                                    <Text
                                        style={{ top: '15px', fontWeight: "bold", fontSize: '18px', left: '15px' }}
                                    >
                                        Tin nhắn hệ thống
                                    </Text>
                                    <Text
                                        style={{ top: '20px', color: "gray", fontWeight: "bold", fontSize: '13px', textAlign: 'right', left: '110px' }}
                                    >
                                        12-10
                                    </Text>
                                </View>

                                <View style={{ width: '330px', left: '15px', flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/vip2.jpg")}
                                        style={{ top: '25px', width: '30px', height: '30px ', resizeMode: 'contain', marginRight: '5px' }}></Image>
                                    <Text style={{ top: '25px', fontWeight: 'bold', fontSize: '20px', marginRight: '5px' }}>
                                        Tháng 10 ưu đãi!
                                    </Text>

                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ top: '40px', fontWeight: '500', fontSize: '16px', }}>
                                        Dùng bản Pro miễn phí trong vòng 30 ngày.
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ left: '15px', top: '55px', fontWeight: 'bold', fontSize: '18px', color: 'gray' }}>Xem thêm</Text>
                                    <Image
                                        source={require("../assets/right.png")}
                                        style={{ top: '45px', width: '50px', height: '50px ', resizeMode: 'contain', marginRight: '5px', left: '200px' }}></Image>

                                </View>

                            </Pressable>

                            <Pressable
                                style={{
                                    width: "350px",
                                    height: '200px',
                                    borderRadius: "15px",
                                    backgroundColor: 'white',
                                    // justifyContent: "center",
                                    // alignItems: "center",
                                    left: '20px',
                                    borderColor: 'gray',
                                    marginBottom: '100px'

                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/capcut_icon.png")}
                                        style={{ top: '12px', width: '30px', height: '30px ', resizeMode: 'contain', left: '15px' }}></Image>
                                    <Text
                                        style={{ top: '15px', fontWeight: "bold", fontSize: '18px', left: '15px' }}
                                    >
                                        Tin nhắn hệ thống
                                    </Text>
                                    <Text
                                        style={{ top: '20px', color: "gray", fontWeight: "bold", fontSize: '13px', textAlign: 'right', left: '110px' }}
                                    >
                                        10-10
                                    </Text>
                                </View>

                                <View style={{ width: '330px', left: '15px', flexDirection: 'row' }}>
                                    <Image
                                        source={require("../assets/pumpkin.png")}
                                        style={{ top: '20px', width: '30px', height: '30px ', resizeMode: 'contain', marginRight: '5px' }}></Image>
                                    <Text style={{ top: '25px', fontWeight: 'bold', fontSize: '20px', marginRight: '5px' }}>
                                        Halloween diệu kỳ!
                                    </Text>
                                    <Image
                                        source={require("../assets/ghost.png")}
                                        style={{ top: '20px', width: '30px', height: '30px ', resizeMode: 'contain', }}></Image>
                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ top: '40px', fontWeight: '500', fontSize: '16px', left: '15px' }}>
                                        Mở khóa Pro để nhận được nhiều ưu đã hấp dẫn.
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ left: '15px', top: '55px', fontWeight: 'bold', fontSize: '18px', color: 'gray' }}>Xem thêm</Text>
                                    <Image
                                        source={require("../assets/right.png")}
                                        style={{ top: '45px', width: '50px', height: '50px ', resizeMode: 'contain', marginRight: '5px', left: '200px' }}></Image>

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