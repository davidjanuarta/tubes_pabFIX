import { Heading, Image, Text, FlatList, Avatar, Icon, HStack, VStack } from "native-base";
import { Box, ScrollView, FormControl, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const profile = () => {
    // const user = auth.currentUser;
    const navigation = useNavigation();
    const isFocused = useIsFocused();

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
                    marginTop={10}
                    mx={3}
                >Livik</Heading>
                <Center>
                    <Box
                        mx={2}
                        h="270"
                        w="400"
                        backgroundColor="#5997E0"

                        marginTop="1"
                        px="5"
                        rounded={9}
                        shadow={9}
                    >

                        <Avatar
                            mx={109}
                            bg="green.500"
                            w="40%"
                            h="40"
                            marginTop="7"
                            alignContent={"center"}
                            source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                        </Avatar>


                        <Box
                            marginLeft={120}
                            marginTop={3}

                        >
                            <Heading
                                color={"white"}
                                >
                                    {UserData?.username}

                                </Heading>

                        </Box>
                    </Box>
                </Center>

                <VStack p={3} justifyContent="" alignItems={"center"}>
                    <Box
                        marginTop={2}
                        borderWidth="0.5"
                        w="full"
                        h="20"
                        p={5}
                        backgroundColor="#FFFFFF" shadow="9" rounded={10}

                    >
                        <Center>
                            <Text fontSize={20}>Setting</Text>

                        </Center>
                    </Box>

                    <Box
                        marginTop={2}
                        borderWidth="0.5"
                        w="full"
                        h="20"
                        p={5}
                        backgroundColor="#FFFFFF" shadow="9" rounded={10}>
                        <Center>
                            <Text fontSize={20}>Promo</Text>
                        </Center>
                    </Box>

                    <Box
                        marginTop={2}
                        borderWidth="0.5"
                        w="full"
                        h="20"
                        p={5}
                        backgroundColor="#FFFFFF" shadow="9" rounded={10}>
                        <Center>
                            <Text fontSize={20}>History</Text>

                        </Center>

                    </Box>
                    <Box
                        marginTop={2}
                        borderWidth="0.5"
                        w="full"
                        h="20"
                        p={5}
                        backgroundColor="#FFFFFF" shadow="9" rounded={10}>
                        <TouchableOpacity onPress={signOutUser}>
                            <Heading>Sign Out</Heading>
                        </TouchableOpacity>

                    </Box>



                </VStack>
            </ScrollView>
        </SafeAreaView>


    );
};

export default profile;