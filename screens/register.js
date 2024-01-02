import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Heading, VStack,FormControl,Input,Image } from "native-base";
import React, { useState } from "react";
import { TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from '../firebase';
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    
    // const firebase = app();
    // const firestore = db(firebase);

    const createUser = async () => {
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

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("user credential", userCredential);
            const user = userCredential._tokenResponse.email;
            const myUserUid = auth.currentUser.uid;

            navigation.navigate("LoginScreen");

            // setDoc(doc(firestore, "users", `${myUserUid}`), {
            //     email: user,

            // })
        })

        const userCollection = collection(db, "users")
        const newUser = {
            email:email,
            password:password,
        }
        const newDoc = await addDoc(userCollection, newUser);
        const dataku = newDoc.id;
        console.log(dataku)
    }

    return (
        <SafeAreaView>
            <Image source={
                            require("../assets/logo.png")
                        } alt="image"
                        w="full"
                        h="250"
                        >

                        </Image>
            <Center w="100%">
                <Box
                    safeArea p="2" w="90%" maxW="290" >
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        REGISTER
                    </Heading>
                    <VStack space={3} mt="5">
                    <FormControl>
              <FormControl.Label>E-mail</FormControl.Label>
               <TextInput
                            style={{ borderWidth:1}}
                            placeholder="Enter Email"
                            value={email}
                            onChangeText={txt => setEmail(txt)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
               <TextInput
                            style={{ borderWidth:1}}
                            placeholder="Enter Password"
                            value={password}
                            onChangeText={txt => setPassword(txt)} />
            </FormControl>
            
            

                        {/* <TextInput
                            placeholder="Enter Email"
                            value={email}
                            onChangeText={txt => setEmail(txt)} />
                        <TextInput
                            placeholder="Enter Password"
                            value={password}
                            onChangeText={txt => setPassword(txt)} /> */}
                        <Button mt="2" color="#5997E0" onPress={createUser}>
                            Register
                        </Button>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                            <Text textAlign="center">          Already have a account? Sign in
                            </Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    );
};

export default Register;