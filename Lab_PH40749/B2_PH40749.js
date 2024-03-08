import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
const L22SectionView = ({ diadiem, imageSource, diadiem2, thoigian, phuongtien, thoigian2, phuongtien2 }) => {
    return (
        <View>
            <Text style={styles.title}>{diadiem}</Text>
            <Text style={styles.description}>{diadiem2}</Text>
            <Text style={styles.title}>{thoigian}</Text>
            <Text style={styles.description}>{thoigian2}</Text>
            <Text style={styles.title}>{phuongtien}</Text>
            <Text style={styles.description}>{phuongtien2}</Text>
            <Image source={imageSource} style={styles.image} />

        </View>
    );
}
const L22khachSan = ({ diadiem1, diadiem3, thoigian1, phuongtien1, thoigian3, phuongtien3 }) => {
    return (
        <View>
            <Text style={styles.title}>{diadiem1}</Text>
            <Text style={styles.description}>{diadiem3}</Text>
            <Text style={styles.title}>{thoigian1}</Text>
            <Text style={styles.description}>{thoigian3}</Text>
            <Text style={styles.title}>{phuongtien1}</Text>
            <Text style={styles.description}>{phuongtien3}</Text>
        </View>
    );
}
const B2_PH40749 = () => {
    return (
        <ScrollView horizontal={true}>
            <View>
                <View style={{ padding: 10 }}>
                    <Text style={{ color: "#000", fontSize: 25, padding: 10, fontWeight: "600" }}>Lịch trình</Text>
                    <View style={styles.container}>
                        <L22SectionView
                            diadiem="Địa điểm: "
                            diadiem2="Hồ Tràm - Vũng Tàu"
                            thoigian="Thời gian: "
                            thoigian2="09:00 AM - 12:00 AM, 12/12/2024"
                            phuongtien="Phương tiện di chuyển"
                            phuongtien2="Xe bus"
                            imageSource={{ uri: 'https://i.pinimg.com/564x/b6/63/c5/b663c5ec6e5656b1b465a31462889fc4.jpg' }}
                        />
                    </View>
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ color: "#000", fontSize: 25, padding: 10, fontWeight: "600", top: 20 }}>Khách sạn</Text>
                    <View style={{
                        top: 20,
                        padding: 20,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        shadowColor: '#C0C0C0',
                        borderWidth: 1,
                        height: 245
                    }}>
                        <L22khachSan
                            diadiem1="Tên khách sạn: "
                            diadiem3="Hồng Quỳnh"
                            thoigian1="Giờ mở cửa: "
                            thoigian3="06:00 AM - 12:00 AM"
                            phuongtien1="Địa điểm"
                            phuongtien3="234 Quang Trung, Hồ Chí Minh"
                        />
                        <Button style={{top: 20}} title="Chi tiết" />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        top: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#C0C0C0',
        borderWidth: 1,
        width: 393

    },
    title: {
        fontSize: 15,

        color: "#A2B5CD",
        marginBottom: 10,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
    },
    description: {
        fontSize: 20,
        color: "#36648B",
        top: -6
    },
});
export default B2_PH40749;