import React, { useState, useMemo } from "react";
import { Text, ScrollView, HStack, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";

const Kategori = () => {
  const [category, setCategory] = useState("NONE");
  const [products, setProducts] = useState([]);
  const [typesData, setTypesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "types"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTypesData(data);
      } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
      }
    };

    fetchData();
  }, []);

  const filteredList = useMemo(() => {
    if (category === "NONE") return typesData;

    const filteredData =
      category === "Murah"
        ? typesData.filter((item) => item.price < 350000)
        : typesData.filter((item) => item.price >= 350000);

    return filteredData;
  }, [category, typesData]);

  const onClick = (category) => () => {
    setCategory(category);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <HStack p={2} justifyContent={"space-between"} space={2}>
          <TouchableOpacity onPress={onClick("NONE")}>
            <Center
              backgroundColor={"blue.500"}
              height={10}
              p={2}
              borderRadius={5}
              shadow={3}
            >
              <Text color={"white"}>Paling Diminati</Text>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClick("Murah")}>
            <Center
              backgroundColor={"blue.500"}
              height={10}
              p={2}
              borderRadius={5}
              shadow={3}
            >
              <Text color={"white"}>Best Deal!</Text>
            </Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClick("Best Choice")}>
            <Center
              backgroundColor={"blue.500"}
              height={10}
              width={20}
              p={2}
              borderRadius={5}
              shadow={3}
            >
              <Text color={"white"}>Best Choice</Text>
            </Center>
          </TouchableOpacity>
        </HStack>
        <HStack flexWrap={"wrap"} justifyContent={"space-between"} p={3}>
          {filteredList.map((category) => {
            return <ProductCard category={category} key={category.id} />;
          })}
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Kategori;