import { Heading, Image, Text, FlatList, Center, View, Container, Button, } from "native-base";
import { Box, ScrollView,SafeAreaView,Avatar } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const cart = () => {
  const navigation = useNavigation();
    return (
      <ScrollView
      backgroundColor="white"
      >
        <Heading
        marginTop="60"
        w="full"
        marginleft="20"
        background="white"
        px="9"

        >
          LIVIK</Heading>
      <Box
  marginTop="-33"
      w="full"
      h="20"
      px="2"
      >

      <Image
        source={require('../assets/hrv.png')}
      />        
      </Box>

      <Box
      w="full"
      marginTop="300"
      backgroundColor="white"
      px="10"
      shadow="3"
      >
        <Text>HRV 2023</Text>
        <Text>Banyu Urip , Surabaya</Text>
        <Text
        color="pink.700" marginBottom="2">Rp.150.000,- / day</Text>
        <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}></Avatar>
    <Text>Rating 90/100% Complete Orders</Text>
      </Box>
      <Box
        px="8"
        py="5"
        mt="2"
        borderY="2"
        tr
        >
          <Heading>Spek</Heading>
        <Text>-2 WD</Text>
        <Text>-4 Seater</Text>
        <Text>-Minimum Ron 92</Text>
      </Box>
      <Box
        px="8"
        py="5"
        borderY="2"
        >
          <Heading>Description</Heading>
        <Text>-Honda Hrv Terbaru</Text>
        <Text>-Layanan lepas kunci </Text>
        <Text>-Kendaraan Bersih Dan wangi</Text>
        <Text>-Batas penggunaan 250Km</Text>
        <Text>-Detail Informasi mobil bisa hub  +6287853546715</Text>
        
      </Box>
      <Box 
      backgroundColor="amber.800"
      flexDirection="row"
      w="full"
      h="50"
      > 
<Box 
w="40"
      backgroundColor="amber.100"
      >
      <Button size="md" variant="ghost" colorScheme="secondary" shadow="2">
            Contact
          </Button>      
          </Box>
          <Box 

      backgroundColor="amber.400"
      >
      <Button size="md" variant="ghost" colorScheme="secondary" shadow="2">
            Contact
          </Button>      
          </Box>


          </Box>
          
      </ScrollView>
  );
  
};




export default cart;
