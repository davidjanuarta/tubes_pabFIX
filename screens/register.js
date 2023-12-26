import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Heading, VStack } from "native-base";
import React, { useState } from "react";
import { TextInput, Alert,TouchableOpacity,Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';




const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const createUser = () => {
        if (email === "", password === "") {
            Alert.alert(
                'invalid details',
                'Silahkan masukkan Email / Password Anda!',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
        }
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
            email: user,
            
        })
    })


return (
    <SafeAreaView>
        <Center w="100%">
            <Box
                safeArea p="2" w="90%" maxW="290" >
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Register
                </Heading>
                <VStack space={3} mt="5">
                    <TextInput
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={txt => setEmail(txt)} />

                    <TextInput
                        placeholder="Enter Password"
                        value={password}
                        onChangeText={txt => setPassword(txt)} />
                    <Button mt="2" color="#5997E0" onPress={createUser}>
                        Register
                    </Button>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                            <Text textAlign="center">              Already have a account? Sign in
</Text>
                        </TouchableOpacity>
                </VStack>
            </Box>
        </Center>
    </SafeAreaView>
);
            };

export default Register;