import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg={"trueGray.900"} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"white"}>{title}</Heading>
          </HStack>

          <HStack space={"2xl"}>
           
          
    
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
