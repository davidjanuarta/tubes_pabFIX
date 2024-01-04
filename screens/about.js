import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { Modal, Button, HStack, VStack, Box, Center } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "@expo/vector-icons/Ionicons";


const Faq = () => {
    const [selectedOption, setSelectedOption] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState(false);
    const [selectedOption3, setSelectedOption3] = useState(false);
    const [selectedOption4, setSelectedOption4] = useState(false);
    const [selectedOption5, setSelectedOption5] = useState(false);

    return (
        <SafeAreaView>
            <Box h={350}>
                <Center>
                <Image backgroundColor={"white.200"}
                    source={require('../assets/logo.png')}
                    w="full"
                    h="full"
                    rounded="lg"
                    alt="imagepn"
                />
                </Center>
            </Box>
            <HStack justifyContent={"space-between"} p={3}>
                <Text>Selamat Datang di LIVIK - Solusi Mobil Sewaan Anda!</Text>

                < Ionicons
                    size={30}
                    onPress={() => {
                        setSelectedOption(!selectedOption);
                    }}
                    name="arrow-forward" ></ Ionicons>
            </HStack>
            <View>
                {selectedOption && selectedOption && (
                    <Box p={2} h={20} backgroundColor={"gray.300"}>
                        <Center>
                            <Text >
                            Kami menghadirkan lebih dari sekadar mobil. Kami adalah tim yang berdedikasi untuk memberikan pengalaman menyewa mobil yang tak terlupakan,
                            </Text>
                            <Text>

                            </Text>
                        </Center>
                    </Box>
                )}
            </View>
            <HStack justifyContent={"space-between"} p={3}>
                <Text>Visi LIVIK</Text>

                < Ionicons
                    size={30}
                    onPress={() => {
                        setSelectedOption2(!selectedOption2);
                    }}
                    name="arrow-forward" ></ Ionicons>
            </HStack>
            <View>
                {selectedOption2 && selectedOption2 && (
                    <Box p={2} h={20} backgroundColor={"gray.300"}>
                        <Center>
                            <Text >
                            Menjadi pilihan utama dalam penyewaan mobil dengan memberikan layanan yang luar biasa dan mobil berkualitas tinggi.
                            </Text>
                        </Center>
                    </Box>
                )}
            </View>
            <HStack justifyContent={"space-between"} p={3}>
                <Text >Misi LIVIK</Text>

                < Ionicons
                    size={30}
                    onPress={() => {
                        setSelectedOption3(!selectedOption3);
                    }}
                    name="arrow-forward" ></ Ionicons>
            </HStack>
            <View>
                {selectedOption3 && selectedOption3 && (
                    <Box  p={2} h={20} backgroundColor={"gray.300"}>
                        <Center>
                            <Text >-Kualitas Utama,Menyediakan armada mobil yang terawat dengan baik dan selalu dalam kondisi prima.
                            </Text>
                            
                            <Text>-Kemudahan Reservasi,Membuat proses pemesanan mobil menjadi cepat, mudah, dan efisien.
                            </Text>
                        </Center>
                    </Box>
                )}
            </View>
            <HStack justifyContent={"space-between"} p={3}>
                <Text>Mengapa Memilih LIVIK?</Text>

                < Ionicons
                    size={30}
                    onPress={() => {
                        setSelectedOption4(!selectedOption4);
                    }}
                    name="arrow-forward" ></ Ionicons>
            </HStack>
            <View>
                {selectedOption4 && selectedOption4 && (
                    <Box p={2} h={20} backgroundColor={"gray.300"}>
                        <Center>
                            <Text >
                            Armada Berkualitas Tinggi,Mobil-mobil terbaru dan terawat dengan baik untuk memberikan kenyamanan dan keamanan selama perjalanan Anda.Juga Harga yang Transparan: Biaya sewa yang jelas dan terjangkau tanpa biaya tersembunyi.
                            </Text>
                        </Center>
                    </Box>
                )}
            </View>
            <HStack justifyContent={"space-between"} p={3}>
                <Text>Terima Kasih</Text>

                < Ionicons
                    size={30}
                    onPress={() => {
                        setSelectedOption5(!selectedOption5);
                    }}
                    name="arrow-forward" ></ Ionicons>
            </HStack>
            <View>
                {selectedOption5 && selectedOption5 && (
                    <Box p={2} h={20} backgroundColor={"gray.300"}>
                        <Center>
                            <Text>
                                Terima kasih telah memilih LIVIK sebagai mitra perjalanan Anda. Bersama-sama, mari jadikan setiap perjalanan Anda sebagai pengalaman tak terlupakan!
                            </Text>
                        </Center>
                    </Box>
                )}
            </View>



        </SafeAreaView>
    )
}

export default Faq

const styles = StyleSheet.create({})