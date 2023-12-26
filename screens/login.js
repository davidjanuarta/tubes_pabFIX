import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Heading, Text, FlatList } from "native-base";
import { Box, ScrollView, Center, VStack, FormControl, Input, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";


const LoginScreen = ({}) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        setLoading(true);
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(!authUser){
            setLoading(false);
          }
          if(authUser){
            navigation.replace("home");
          }
        });
    
        return unsubscribe;
      },[])

    const login = () => {
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
          console.log("user credential",userCredential);
          const user = userCredential.user;
          console.log("user details",user)
        })
      }




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
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text textAlign="center">Belum punya akun? Register</Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    );
};

export default LoginScreen;