import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Box, Button, Center, HStack, NativeBaseProvider, ScrollView, Bold, Heading, Text, AddIcon, VStack, Input, Icon, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import datas from '../datas';

const Home = () => {



    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <HStack marginTop={30} >

                        <Box

                            mx={7}
                            my={2}
                            background={'#5997E0'}
                            width={355}
                            height={10}
                            borderRadius={18}
                        >
                            <Input p="3" placeholder="Search for a car" w="100%" />            </Box>
                    </HStack>
                    <Box
                        w={'350'}
                        mx={7}

                    >
                        <HStack
                           mx={21}
                           justifyContent={'space-between'}
                        >
                            <Ionicons as="IonIcons" name="car" size={30} color="black'"></Ionicons>
                            
                            <Ionicons as="IonIcons" name="List car" size={30} color="black'"></Ionicons>
                        </HStack>

                    </Box>

                    <Box
                        w={'350'}
                        mx={7}

                    >
                        <HStack
                            justifyContent={'space-between'}
                        >
                            <Text>Book your car</Text>
                            
                            <Text>Promotions</Text>

                        </HStack>


                    </Box>
                    <Box borderWidth={0.5} />


                    <Heading p={5}
                    style={{
                        fontSize:17,

                    }}
                    
                     >Discover the latest deals and updates</Heading>




                    <HStack backgroundColor={'#5997E0'} justifyContent="space-between"
                    borderRadius={18}
                    >
                        <VStack>
                            <Box py={50} px={3}
                            >
                                <Text
                                style={{
                                    fontSize:19,
                                    fontWeight: '900',
                                    color:'white',
            
                                }}
                                >
                                    Perpanjang Booking
                                </Text>
                                <Text
                               style={{
                                fontSize:19,
                                fontWeight: '900',
                                color:'white',
        
                            }}
                            >
                                    Kini Lebh Mudah!
                                </Text>
                            </Box>
                        </VStack>
                        <Box
                        
                        padding={2}
                        >
                        <Image


                            source={require('../assets/finansial.jpg')}
                            alt='hhhgm'
                            style={{
                                resizeMode: 'cover',
                                height: 140,
                                width: 200,
                                borderRadius: 17,
                    
                            }}
                        />
                        </Box>
                    </HStack>
                    <Heading p={7}>Popular cars</Heading>
                    <Box py={"4"} bg="#5997E0">
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {datas.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        key={index}

                                    >
                                        <Box w={""} mr={"4"} ml={index == 0 ? "4" : "0"}>
                                            <Image
                                                source={{ uri: item.image }}
                                                w="full"
                                                h="24"
                                                alt="Image Data"
                                                mb={"2"}
                                            />
                                            <Text fontSize={"xs"} color="light.300">
                                                {item.nama}
                                            </Text>
                                            <Heading
                                                fontSize={"sm"}
                                                lineHeight={"xs"}
                                                ellipsizeMode="tail"
                                                numberOfLines={2}
                                                color="light.50"
                                            >
                                                {item.harga}
                                            </Heading>
                                        </Box>

                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </Box>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default Home;