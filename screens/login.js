import { useNavigation } from "@react-navigation/native";
import { Heading, Text, FlatList } from "native-base";
import { Box, ScrollView, Center, VStack, FormControl, Input, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = ({navigation}) => {
    // const pindahHalaman = () => {
    //     navigation.navigate('home');
    // }

    return (
        <SafeAreaView>
            <Center w="100%">



                <Box
                safeArea p="2" w="90%" maxW="290" >
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Login
                    </Heading>

                    <VStack space={3} mt="5">

                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input type="Email" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="Password" />
                        </FormControl>
                        <Button mt="2" color="#5997E0" onPress={() => navigation.navigate('Tabs')}>
                            Login
                        </Button>
                        <Box

                        >
                            <Text
                                textAlign="center"
                            >Belum punya akun? Register</Text>
                        </Box>
                    </VStack>
                </Box>


            </Center>
        </SafeAreaView>
    );

};

export default Login;