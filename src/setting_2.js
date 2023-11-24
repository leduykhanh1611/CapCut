import { StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'


const inbox = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 2, backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'white' , marginBottom:'25px'}}>
                    <Pressable
                        onPress={() =>
                            navigation.navigate('edit')

                        }>
                        <Image
                            style={{ height: "35px", width: "50px", resizeMode: 'contain', left: '10px', top: '5px' }}
                            source={require("../assets/close.png")}
                        />

                    </Pressable>
                </View>


                <View style={{ flex: 2, backgroundColor: 'white', marginBottom: '10px' }}>
                    <View style={{ width: "100%" }}>
                        <ScrollView>
                            <View style={{ flexDirection: 'column' }}>
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
                                        <View style={{flexDirection:'row'}}>
                                            <Text
                                                style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                            >
                                                Ngôn ngữ ứng dụng
                                            </Text>
                                            <Text
                                                style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left' , left:'120px'}}
                                            >
                                                Tiếng Việt
                                            </Text>

                                            <Image
                                                style={{ height: "40px", width: "50px", left:'120px', top:'-10px '}}
                                                source={require("../assets/right.png")}
                                            />
                                        </View>


                                    </Pressable>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                    onPress={() =>
                                        navigation.navigate('setting')
            
                                    }
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Thêm phần kết mặc định
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' , resizeMode:'contain'}}
                                            source={require("../assets/switch_off.png")}
                                        />
                                    </Pressable>
                                </View>

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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Tự động tải lên
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Phản hồi
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Điều khoản dịch vụ
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Chính sách quyền riếng tư
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Nguyên tắc cộng đồng của CapCut
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Thông báo phần mềm nguồn mở
                                        </Text>

                                        <Image
                                            style={{ height: "40px", width: "50px", top: '-30px', left: '320px' }}
                                            source={require("../assets/right.png")}
                                        />
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Xóa bộ nhớ đệm
                                        </Text>

                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '290px', top: '-20px' }}
                                        >
                                            201.15M
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
                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '15px' }}
                                        >
                                            Phiên bản
                                        </Text>

                                        <Text
                                            style={{ color: "black", textAlign: "center", fontSize: '15px', textAlign: 'left', left: '315px', top: '-20px' }}
                                        >
                                            9.9.0
                                        </Text>
                                    </Pressable>
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