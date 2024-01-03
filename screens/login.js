import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Heading, VStack,Image,FormControl, } from "native-base";
import React, { useState } from "react";
import { TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../firebase';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const Loginrek = async () => {
        // signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        //     console.log("user credential", userCredential);
        //     const user = userCredential.user;
        //     console.log("user details", user)
        //     navigation.navigate("Tabs");
        // })

        const userCollection = collection(db, "users");
        const QEmail = query(userCollection, where("email", "==",email))
        const QPassword = query(userCollection, where("password", "==",password))

        const snapEmail = await getDocs(QEmail)
        const snapPassword = await getDocs(QPassword)

        const GabunganSnap = snapEmail.docs.concat(snapPassword.docs);
        if (!GabunganSnap.empty) {
            GabunganSnap.forEach(async (doc) => {
                const UserData = doc.data();
                console.log("Ini userData:", UserData);

                const Dataku = {
                    email: UserData.email,
                    password: UserData.password,
                    username: UserData.username,
                }

                await AsyncStorage.setItem('memori', JSON.stringify(Dataku))
                .then(() => {
                    Alert.alert("Success", "anda berhasil masuk")
                    navigation.replace("Tabs")
                })
            })
        }


        
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
                    
                        LOGIN
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
                        <Button mt="2" color="#5997E0" onPress={Loginrek}>
                            Login
                        </Button>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text textAlign="center">            Belum punya Akun? Register
                            </Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </SafeAreaView>
    );
};

export default Login;