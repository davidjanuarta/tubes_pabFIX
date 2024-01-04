import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Box, Heading, Text, VStack, Image, NativeBaseProvider, ScrollView, HStack, FlatList } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;


const Home = () => {
  const navigation = useNavigation();
  const [typesData, setTypesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'types'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTypesData(data);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchData();
  }, []);

  const renderGridItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", {
          ProductImg: item.image,
          ProductNama: item.name,
          ProductHarga: item.price,
          ProductSpek: item.spek,
        })}
        activeOpacity={0.5}
        key={index}
      >
        <Box
          width={180}
          mb={3}
          mr={index % 3 === 2 ? 0 : 4}
          ml={index % 3 === 0 ? 4 : 4}
          borderWidth={2}
          borderColor="gray.200"
          borderRadius={6}
          overflow="hidden"
        >
          <Image
            source={{ uri: item.image }}
            width={'100%'}
            height={120}
            alt="Image Data"
            
          />
          <Text fontSize="xs" color="black" bg={'blue.500'}>
            {item.name}
          </Text>
          <Heading
            fontSize="sm"
            lineHeight="xs"
            ellipsizeMode="tail"
            numberOfLines={2}
            color="black"
            bg={'blue.500'}
          >
           Rp.{item.price} / Day
          </Heading>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <HStack mt={5}>
            <VStack>
              <TouchableOpacity onPress={() => navigation.navigate("Kategori")}>
              <Box
                mx={20}
                alignItems={"center"}
                
              >
                <Ionicons as="IonIcons" name="car" size={30} color="black'"></Ionicons>
                <Text>Promot</Text>
              </Box>
              </TouchableOpacity>
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

          <Heading p={3}>Dapatkan harga sewa terbaik disini</Heading>
          <HStack
            backgroundColor={'#5997E0'} justifyContent="space-between"
            borderRadius={18}>
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

          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
          <FlatList
            horizontal
            data={Array.from({ length: Math.ceil(typesData.length / numColumns) })}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <HStack>
                <FlatList
                  horizontal
                  data={typesData.slice(index * numColumns, (index + 1) * numColumns)}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) => renderGridItem({ item, index })}
                  showsHorizontalScrollIndicator={false}
                />
              </HStack>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
