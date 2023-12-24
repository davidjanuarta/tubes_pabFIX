import { Heading, Center, HStack, Text, Divider, Box, Button } from "native-base";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const ForYou = () => {
  return (
    <SafeAreaView>
      <Heading p={3}>Sewa</Heading>
      <HStack justifyContent="space-between" p={3}>
        <Heading>Active</Heading>
        <Heading>Upcoming</Heading>
        <Heading>History</Heading>
       
      </HStack>
      <Divider/>
      <HStack justifyContent="center" py={300} w="full" h="full"
>
        <Heading>No upcoming bookings</Heading>
        
      </HStack>

      


    </SafeAreaView>
  );
};

export default ForYou;
