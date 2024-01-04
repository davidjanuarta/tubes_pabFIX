// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Home from "./screens/home";
import Profile from "../screens/profile";
import Menu from "../screens/menu"
// import Sewa from "./screens/for-you";
// import NewsDetail from "./screens/news-detail";
import Register from "../screens/register";
import login from "../screens/login";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/login";
import ProductDetailScreen from "../screens/ProductDetail";
import PromoScreen from "../screens/promo";
import Contact from "../screens/contact";
import About from "../screens/about";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    switch (route.name) {
                        case "Home":
                            iconName = "home-outline";
                            break;
                        case "Book":
                            iconName = "car-outline";
                            break;
                        case "About":
                            iconName = "home-outline";
                            break;
                        case "Profile":
                            iconName = "person-circle-outline";
                            break;
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={15}
                            color={focused ? "black" : color}
                        />
                    );

                },

                tabBarIconStyle: { marginTop: 5 },
                tabBarStyle: {
                    height: 80,
                    borderTopWidth: 0,
                },
                tabBarLabel: ({ children, color, focused }) => {
                    return (
                        <Text color={focused ? "black" : color} mb={2}>
                            {children}
                        </Text>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Book" component={Menu} options={{ headerShown: false }} />
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
};

const Appstack = () => {
    return (



        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                options={{ headerShown: false, headerTitle: 'login screen ', headerTitleAlign: "center" }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false, headerTitle: 'login screen ', headerTitleAlign: "center" }}
            />
            <Stack.Screen
                name="PromoScreen"
                component={PromoScreen}
                options={{ headerShown: false, headerTitle: 'promo screen ', headerTitleAlign: "center" }}
            />
            <Stack.Screen
                name="Contact"
                component={Contact}
                options={{ headerShown: false, headerTitle: 'Contact ', headerTitleAlign: "center" }}
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={({ route }) => ({
                    headerShown: false, headerTitle: 'Product Detail', headerTitleAlign: "center"
                })}
                initialParams={{
                    ProductImg: null,
                    ProductNama: "",
                    ProductHarga: "",
                    ProductSpek: "",
                }}
            />

            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />


        </Stack.Navigator>



    );

};




export default Appstack;