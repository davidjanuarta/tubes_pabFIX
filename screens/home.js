import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Box, Heading, Text, VStack, Image, NativeBaseProvider, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

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
          mr={index % 3 === 2 ? 0 : 4}
          ml={index % 3 === 0 ? 4 : 0}
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
            mb={2}
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
            {item.price}
          </Heading>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
        <Heading p={5}>Discover the latest deals and updates</Heading>

        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
          <VStack space={4}>
            {typesData.map((item, index) => renderGridItem({ item, index }))}
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
