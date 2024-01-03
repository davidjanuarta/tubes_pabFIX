import React, { useEffect, useState } from 'react';
import { Heading, Image, Text, VStack, Box, ScrollView, HStack, Button, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();

  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState(null);

  const image = route.params ? route.params.ProductImg : '';
  const productName = route.params ? route.params.ProductNama : '';
  const productPrice = route.params ? route.params.ProductHarga : '';
  const productSpec = route.params ? route.params.ProductSpek : '';

  const FetchData = async () => {
    try {
      const userData = await AsyncStorage.getItem('memori');
      if (userData !== null) {
        const parsedData = JSON.parse(userData);
        setUserData(parsedData);
      }
    } catch (error) {
      console.error('Error Fetching data', error);
    }
  };

  const fetchProductData = async () => {
    try {
      const productDocRef = doc(db, 'types', productName); // Assuming productName is the unique identifier
      const productDocSnapshot = await getDoc(productDocRef);
      if (productDocSnapshot.exists()) {
        setProductData({
          id: productDocSnapshot.id,
          ...productDocSnapshot.data(),
        });
      } else {
        console.log('Product not found in Firestore');
      }
    } catch (error) {
      console.error('Error fetching product data from Firestore: ', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      FetchData();
      fetchProductData();
    }
  }, [isFocused]);

  const bookProduct = () => {
    // Logic for booking the product
    console.log('Booking the product:', productName);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Heading marginTop={8} mx={4} mb={10}>
          Livik
        </Heading>
        <VStack p={3}>
          <Box width={330} borderWidth={2} borderColor="gray.300" borderRadius={5} overflow="hidden">
            <Image alt="Product" source={{ uri: image }} w={300} h={190} />
          </Box>
          <Box mt={2}>
            <Text fontSize={27} bold>
              {productName}
            </Text>
          </Box>
          <Box mt={2}>
            <Text fontSize={17}> Tarif / Hari Rp.{productPrice}</Text>
          </Box>
          <Box>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
          </Box>
          <Box>
            <Text bold fontSize={27}>
              Specification
            </Text>
            <Text bold fontSize={17}>{productSpec}</Text>
          </Box>
          <Box>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
          </Box>
          <Box>
            <Text bold fontSize={27}>
              Description
            </Text>
            <VStack mt={5}>
              <Text fontSize={17}>Layanan lepas kunci</Text>
              <Text fontSize={17}>Mobil Bersih dan wangi</Text>
              <Text fontSize={17}>Cocok Digunakan bersama keluarga</Text>
              <Text fontSize={17}>Mobil sehat dan terjaga mesinnya</Text>
            </VStack>
          </Box>
        </VStack>
        <HStack ml={295} mt={6}>
          <TouchableOpacity onPress={bookProduct}>
            <Button width={20}>Book</Button>
          </TouchableOpacity>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
