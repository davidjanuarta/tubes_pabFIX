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
                        >Nama Profile</Heading>

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
                    <Center>
                        <Text fontSize={20}>Log Out</Text>

                    </Center>

                </Box>



            </VStack>
            </ScrollView>
        </SafeAreaView>


    );
};

export default profile;