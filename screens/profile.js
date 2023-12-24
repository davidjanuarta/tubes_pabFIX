import { Heading, Image, Text, FlatList, Avatar, Icon, HStack, VStack } from "native-base";
import { Box, ScrollView, FormControl, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "../components";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
    const navigation = useNavigation();



    return (
        <SafeAreaView >
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
                        >Nama Profile</Heading>
                        <Text
                            marginTop={1}
                            marginLeft={8}
                            color={"white"}
                        >Edit Profile</Text>
                    </Box>
                </Box>
            </Center>

            <HStack p={3} justifyContent="space-between" alignItems={"center"}>
                <Box borderWidth="2"
                w="100"
                h="100"
                p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}
                 
                 >
                    <Center>
                        <Text fontSize={10}>FAVORIT</Text>

                    </Center>

                </Box>
                <Box borderWidth="2"
                    w="100"
                    h="100"
                    p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}>
                    <Center>
                        <Text fontSize={10}>PAYMENTS</Text>

                    </Center>

                </Box>
                <Box borderWidth="2"
                    w="100"
                    h="100"
                    p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}>
                    <Center>
                        <Text fontSize={10}>CONTACT US</Text>

                    </Center>

                </Box>
            </HStack>
            
            <HStack p={3} justifyContent="space-between" alignItems={"center"}>
                <Box borderWidth="2"
                    w="100"
                    h="100"
                    p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}

                >
                    <Center>
                        <Text fontSize={10}>SETTING</Text>

                    </Center>
                </Box>
                
                <Box borderWidth="2"
                    w="100"
                    h="100"
                    p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}>
                    <Center>
                        <Text fontSize={10}>PROMO</Text>
                    </Center>
                </Box>

                <Box borderWidth="2"
                    w="100"
                    h="100"
                    p={5}
                    backgroundColor="#DEDEDE" shadow="4" rounded={20}>
                    <Center>
                        <Text fontSize={10}>LOG OUT</Text>

                    </Center>

                </Box>



            </HStack>
            
        </SafeAreaView>


    );
};

export default profile;