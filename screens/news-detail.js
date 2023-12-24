import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <Center flex={1} p={"4"}>
        <Heading>News Detail</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;
