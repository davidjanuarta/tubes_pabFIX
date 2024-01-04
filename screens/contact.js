import React from 'react';
import { Text, VStack, HStack, Button, Box, } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Modal } from 'native-base';

const Contact = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleA, setModalVisibleA] = useState(false);



    return (
        <SafeAreaView>
            <HStack marginTop={30}>
                <Box marginLeft={5} my={3}>
                    <Button onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={30} color="black" />
                    </Button>
                </Box>
                <Box mx={78}>
                    <Text fontWeight="semi-bold" fontSize={30}>
                        Contact Us
                    </Text>
                </Box>
            </HStack>
            <VStack p={3}>
            <HStack justifyContent={'space-between'} py={5}>
                    <Text fontWeight="bold">E-mail.</Text>
                    <TouchableOpacity>
                        <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    </TouchableOpacity>
                </HStack>
                <HStack justifyContent={'space-between'} py={5}>
                    <Text fontWeight="bold">Instagram.</Text>
                    <TouchableOpacity>
                        <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    </TouchableOpacity>
                </HStack>
                <HStack justifyContent={'space-between'} py={5}>
                    <Text fontWeight="bold">WhatsApp.</Text>
                    <TouchableOpacity>
                        <Ionicons as="Ionicons" name="arrow-forward" size={30} color="black"
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    </TouchableOpacity>
                </HStack>
                <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} bottom="4" size="lg">
                    <Modal.Content>
                        <Modal.Header>Our Social Media.</Modal.Header>
                        <Modal.Body>
                           Livik@gmail.com
                        </Modal.Body>
                        <Modal.Body>
                           @Livik_trans 
                        </Modal.Body>
                        <Modal.Body>
                           081277799596
                        </Modal.Body>
                        <Modal.Footer>
                            <Button flex="1" onPress={() => {
                                setModalVisible(false);
                            }}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </VStack>




        </SafeAreaView>
    );
};

export default Contact;