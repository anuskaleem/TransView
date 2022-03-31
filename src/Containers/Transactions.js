import React from "react";
import { Dimensions,Animated } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { Center,Box, useColorModeValue, Pressable,FlatList,View } from "native-base";
import { useSelector } from "react-redux";
import { TransactionItem } from "../Common";

export default function Transactions({navigation}){
    const transactions = useSelector((state)=>state.transactions.transactions);

    const FirstRoute = () => {
        if(transactions && transactions.length) {
            return (
                <View style={{flex: 1}}>
                  <FlatList
                    data={transactions}
                    renderItem={ (transaction) => <TransactionItem navigation={navigation} transaction={transaction}/> }
                  />
                </View>
              );    
        }
        return(
            <Center flex={1} my="4">
                No Transactions To Show{" "}
            </Center>
        )
    }
    
    const SecondRoute = () => {
        return(
            <Center flex={1} my="4">
                No Transactions To Show{" "}
            </Center>
        )
    }
    
    const ThirdRoute = () => {
        return(
            <Center flex={1} my="4">
                No Transactions To Show{" "}
            </Center>
        )
    }
    
    const FourthRoute = () => {
        return(
            <Center flex={1} my="4">
                No Transactions To Show{" "}
            </Center>
        )
    }
    
    const initialLayout = {
        width: Dimensions.get("window").width
    };
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([{
        key: "first",
        title: "Remittance"
    }, {
        key: "second",
        title: "Credit Card Payment"
    }, {
        key: "third",
        title: "Travel Card Reload"
    }, {
        key: "fourth",
        title: "Bill Payments"
    }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue("#000", "#e5e5e5") : useColorModeValue("#1f2937", "#a1a1aa");
        const borderColor = index === i ? "cyan.500" : useColorModeValue("coolGray.200", "gray.400");
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
              <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
                <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>;
      })}
      </Box>;
  };
  return <TabView navigationState={{
        index,
        routes
    }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
        //marginTop: 200
    }} />;
}