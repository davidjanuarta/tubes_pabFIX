import { Heading, Image, Text, FlatList, Avatar, Icon, HStack, VStack, View, Button } from "native-base";
import { Box, ScrollView, FormControl, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const ProductDetailScreen = () => {
    // const user = auth.currentUser;
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const route = useRoute();

    const image = route.params ? route.params.ProductImg : "";
    const nama = route.params ? route.params.ProductNama : "";
    const harga = route.params ? route.params.ProductHarga : "";
    const spek = route.params ? route.params.ProductSpek : "";

    
    const signOutUser = async () => {
        // signOut(auth).then(() => {
        //     navigation.replace("Login");
        // }).catch(err => {
        //     console.log(err);
        // })
        await AsyncStorage.removeItem("memori");

        navigation.replace("LoginScreen")
    }

    const [UserData, setUserData] = useState(null);

    const FetchData = async () => {
        try {
            const userData = await AsyncStorage.getItem("memori")
            if (userData !== null) {
                const parsedData = JSON.parse(userData);
                setUserData(parsedData);
                console.log("ini dari asyncStorage:", parsedData);
            }
        }
        catch (error) {
            console.error("Error Fetching data", error)
        }
    }
    useEffect(() => {



        if (isFocused) {
            FetchData();
        }
    }, [isFocused])

    console.log("Ini state Dataku :", UserData);


    return (
        <SafeAreaView >
            <ScrollView>
                <Heading
                    marginTop={8}
                    mx={4}
                    mb={10}
                    
                >Livik</Heading>
                <Center>
                    <Box
                        width={330} // Sesuaikan lebar kotak sesuai kebutuhan Anda
                        borderWidth={2}
                        borderColor="gray.300"
                        borderRadius={5}
                        overflow="hidden"
                    >
                        <Image
                            alt="Product"
                            source={{ uri: image }}
                            w={300}
                            h={190}
                        />
                    </Box>
                </Center>

                <VStack p={3} >
                    <Box






                    >

                        <Text fontSize={27} bold>{nama}</Text>


                    </Box>

                    <Box
                        mt={2}

                    >

                        <Text fontSize={17}> Tarif / Hari {harga}</Text>

                    </Box>


                   


                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                    <Box>
                        <Text bold fontSize={27}>Specification</Text>
                        <Text bold fontSize={17}>{spek}</Text>
                        
                    </Box>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                    <Box>
                        <Text bold fontSize={27}>Description</Text>
                        <VStack
                        mt={5}
                        >
                            <Text fontSize={17}>Layanan lepas kunci</Text>
                            <Text fontSize={17}>Mobil Bersih dan wangi</Text>
                            <Text fontSize={17}>Cocok Digunakan bersama keluarga</Text>
                            <Text fontSize={17}>Mobil sehat dan terjaga mesinya</Text>
                            
                            
                             </VStack>
                    </Box>

                </VStack>
                <HStack
                ml={295}
                mt={6}
                
                >
                    <TouchableOpacity onPress={{}}>
                    <Button width={20}>book</Button>
                    </TouchableOpacity>
                </HStack>
            </ScrollView>
        </SafeAreaView>


    );
};

export default ProductDetailScreen;