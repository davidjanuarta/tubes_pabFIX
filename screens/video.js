import { Heading, Center, Button, View, Box,HStack } from "native-base";
import React, {Component} from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { Header } from "../components/";

const Video = () => {
  return (
    <View>
      <Box>
        
      <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
      <HStack justifyContent="center" py={300} w="full" h="full"
>
        <Button>Login Terlebih dahulu</Button>
        
      </HStack>
      </TouchableOpacity>
      
    </Box>
    </View>
  );
};

export default Video;