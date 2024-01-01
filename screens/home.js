import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Box, Button, HStack, NativeBaseProvider, ScrollView, Bold, Heading, Text, AddIcon, VStack, Input, Icon, Image, FlatList } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import datas from '../datas';
import { db } from "../firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";





const Home = () => {

  const navigation = useNavigation();

  const renderGridItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", {
          ProductImg: item.image,
          ProductNama: item.nama,
          ProductHarga: item.harga,
          ProductSpek: item.spek,
        })}
        activeOpacity={0.5}
        key={index}
      >
        <Box
          width={180} // Sesuaikan lebar kotak sesuai kebutuhan Anda
          mr={index % 3 === 2 ? 0 : 4} // Setelah setiap tiga item, atur margin ke "0"
          ml={index % 3 === 0 ? 4 : 0} // Mulai dari setiap tiga item baru, atur margin ke "4"
          // mb={4} // Berikan margin bawah untuk membuat baris
          borderWidth={2}
          borderColor="gray.200"
          borderRadius={6}
          overflow="hidden"
        >
          <Image
            source={{ uri: item.image }}
            width={'100%'}
            height={120}
            // style={{ width: '100%', height: 120 }} // Sesuaikan tinggi gambar sesuai kebutuhan Anda
            alt="Image Data"
            mb={2}
          />
          <Text fontSize="xs" color="black" bg={'blue.500'}>
            {item.nama}
          </Text>
          <Heading
            fontSize="sm"
            lineHeight="xs"
            ellipsizeMode="tail"
            numberOfLines={2}
            color="black"
            bg={'blue.500'}
          >
            {item.harga}
          </Heading>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>




        <HStack
          mt={7}
        >
          <VStack>
            <Box
              mx={20}
              alignItems={"center"}

            >
              <Ionicons as="IonIcons" name="car" size={30} color="black'"></Ionicons>
              <Text>Promot</Text>
            </Box>
          </VStack>
          <VStack>
            <Box
              alignItems={"center"}
              mx={20}
            >
              <Ionicons as="IonIcons" name="bookmark-outline" size={29} color="black'"></Ionicons>
              <Text>Promot</Text>
            </Box>
          </VStack>


        </HStack>





        <Box borderWidth={0.5} />


        <Heading p={5}
          style={{
            fontSize: 17,

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
                  fontSize: 19,
                  fontWeight: '900',
                  color: 'white',

                }}
              >
                Perpanjang Booking
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '900',
                  color: 'white',

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
        <Heading p={2}>Popular cars</Heading>
        <Box >
          {/* <FlatList
              data={datas}
              renderItem={renderGridItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2} // Set jumlah kolom menjadi 2
            /> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VStack space={4}>
              <HStack space={4}>
                {datas.slice(0, Math.ceil(datas.length / 2)).map((item, index) => renderGridItem({ item, index }))}
              </HStack>
              <HStack space={4}>
                {datas.slice(Math.ceil(datas.length / 2)).map((item, index) => renderGridItem({ item, index: index + Math.ceil(datas.length / 2) }))}
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;