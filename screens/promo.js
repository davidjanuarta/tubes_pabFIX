import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Box, Button, Center, HStack, NativeBaseProvider, ScrollView, Bold, Heading, Text, AddIcon, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gap from "../components/gap.js"

const PromoScreen = () => {



  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <HStack marginTop={30} >
            <Box marginLeft={5} my={3}>
              <Ionicons as="Ionicons" name="arrow-back" size={30} color="black"></Ionicons>
            </Box>
            <Box mx={105}>
              <Text fontWeight="bold" fontSize={32} >Promo</Text>
            </Box>
          </HStack>
          <Box
            mx={7}
            my={2}
            background={'gray.300'}
            width={355}
            padding={2}
            height={10}
            borderRadius={7}

          >
            <Text>Masukkan Kode Promo</Text>

          </Box>
          <Center marginTop={10}>

            <Box
              marginTop={-2}
              backgroundColor="white"
              borderRadius={8}
              padding={8}
              width={350}
              height={180}
              shadow={5}

            >

              <View>
                <Text fontSize="2xl" >
                  <Heading>Traktir Livik</Heading>
                </Text>
                <Text fontSize={15} color="#5997E0" >
         
                  Diskon hingga 40 % dengan maksimal
                  potongan Rp.50.000,-
                  Berlaku hingga Januari 2025
                </Text>
                <HStack my={2} mx={75}>
                  <TouchableOpacity>
                    <Box alignItems={"center"} backgroundColor={"white"} p={1} borderRadius={7} width={40} shadow={"2"} borderWidth={0.4} mx={59}>
                      <Heading color={"black"} fontSize={"sm"}>Ambil Promo</Heading>
                    </Box>
                  </TouchableOpacity>


                </HStack>

              </View>

            </Box>

            <Box


              marginTop={5}
              backgroundColor="white"
              borderRadius={8}
              padding={8}
              width={350}
              height={190}
              shadow={5}

            >

              <View>
                <Text fontSize={16} marginBottom={2} fontWeight="Bold" color="black">
                  <Heading>Arek Suroboyo</Heading>
                </Text>
                <Text fontSize={15} color="#5997E0" >
                  Diskon hingga 60 % dengan maksimal
                  potongan Rp.25.000,-
                  Berlaku hingga Januari 2025h
                </Text>
                <HStack my={2} mx={75}>
                  <TouchableOpacity>
                    <Box alignItems={"center"} backgroundColor={"white"} p={1} borderRadius={7} width={40} shadow={"2"} borderWidth={0.4} mx={59}>
                      <Heading color={"black"} fontSize={"sm"}>Ambil Promo</Heading>
                    </Box>
                  </TouchableOpacity>


                </HStack>

              </View>

            </Box>
            <Box
              
              marginTop={5}
              backgroundColor="white"
              borderRadius={8}
              padding={8}
              width={350}
              height={230}
              shadow={5}

            >
              <View>
                <Text fontSize={16} marginBottom={2} fontWeight="Bold" color="black">
                  <Heading>Pake Livik Rek!
                  </Heading>
                </Text>
                <Text fontSize={15} color="#5997E0" >
                Diskon hingga 60 % dengan maksimal
                  potongan Rp.25.000,-voucher ini dapat digunakan ketika kalian menyewa mobil
                </Text>
                <HStack my={2} mx={75}>
                  <TouchableOpacity>
                    <Box alignItems={"center"} backgroundColor={"white"} p={1} borderRadius={7} width={40} shadow={"2"} borderWidth={0.4} mx={59}>
                      <Heading color={"black"} fontSize={"sm"}>Ambil Promo</Heading>
                    </Box>
                  </TouchableOpacity>


                </HStack>



              </View>

            </Box>
            <Box
              
              marginTop={5}
              backgroundColor="white"
              borderRadius={8}
              padding={8}
              width={350}
              height={205}
              shadow={5}

            >
              <View>
                <Text fontSize={16} marginBottom={2} fontWeight="Bold" color="black">
                  <Heading>Sewa Mobil Aja
                  </Heading>
                </Text>
                <Text fontSize={15} color="#5997E0" >
                  Discouvoucher ini dapat digunakan ketika kalian menyewa mobil , agar mendapatkan harga murah
                </Text>
                <HStack my={2} mx={75}>
                  <TouchableOpacity>
                    <Box alignItems={"center"} backgroundColor={"white"} p={1} borderRadius={7} width={40} shadow={"2"} borderWidth={0.4} mx={59}>
                      <Heading color={"black"} fontSize={"sm"}>Ambil Promo</Heading>
                    </Box>
                  </TouchableOpacity>


                </HStack>



              </View>

            </Box>


            <Gap height={20} />
          </Center>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default PromoScreen;