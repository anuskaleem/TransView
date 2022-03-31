import React from "react";
import { Colors, Fonts } from "../theme";
import { Box, Text, HStack,VStack, IconButton,Icon, Card } from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import { formatDate } from "../utils/Util";

export default function AppBar({navigation}){
    const details = useSelector((state)=>state.transaction.transaction);
    return <>
        <Box safeAreaTop bg={Colors.appBar} />
        {!navigation?
            <HStack bg={Colors.appBar} px="1" py="3" justifyContent={"center"} alignItems="center" w="100%">
                <HStack alignItems="center">
                    <Text color={Colors.white} fontSize={Fonts.size.size_15} fontWeight="bold">
                        {"Transactions History"}
                    </Text>
                </HStack>
            </HStack>:
            <VStack bg={Colors.appBar}>
                <HStack bg={Colors.appBar} px="1" py="3" justifyContent={"space-between"} alignItems="center" w="100%">
                    <HStack alignItems="center">
                        <IconButton onPress={()=>{navigation.navigate("home")}} icon={<Icon size="sm" as={<MaterialIcons name="arrow-back" />} name="menu" color="white" />}/>
                        <Text color={Colors.white} fontSize={Fonts.size.size_15} fontWeight="bold">
                            {"Transaction Details"}
                        </Text>
                    </HStack>
                </HStack>
                <Card background={Colors.white} style={{margin:20}} >
                    <VStack>
                        <HStack style={{paddingRight:25,borderBottomColor:"black", borderBottomWidth:1}} px="1" py="3" justifyContent={"space-between"}>
                            <VStack style={{paddingRight:25,borderRightColor:"black", borderRightWidth:1}}>
                                <Text fontSize={Fonts.size.size_10}>Transaction Reference Number</Text>
                                <Text color={Colors.name} fontSize={Fonts.size.size_15}>{details.reference_number}</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize={Fonts.size.size_10}>CE Number</Text>
                                <Text>{details.cf_number}</Text>
                            </VStack>
                        </HStack>
                        <VStack style={{paddingRight:25,borderBottomColor:"black", borderBottomWidth:1}} px="1" py="3" justifyContent={"space-between"}>
                            <Text fontSize={Fonts.size.size_10}>Beneficiary Name</Text>
                            <Text>{details.name.toUpperCase()}</Text>
                        </VStack>
                        <HStack style={{paddingRight:25,borderBottomColor:"black", borderBottomWidth:1}} px="1" py="3" justifyContent={"space-between"}>
                        <VStack style={{paddingRight:35,borderRightColor:"black", borderRightWidth:1}}>
                                <Text fontSize={Fonts.size.size_10}>Beneficiary Bank/Agent</Text>
                                <Text>{details.bank_name.toUpperCase()}</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize={Fonts.size.size_10}>Payout Location</Text>
                                <Text>{details.payout_location}</Text>
                            </VStack>
                        </HStack>
                        <HStack style={{paddingRight:25,borderBottomColor:"black", borderBottomWidth:1}} px="1" py="3" justifyContent={"space-between"}>
                            <VStack style={{paddingRight:30,borderRightColor:"black", borderRightWidth:1}}>
                                <Text fontSize={Fonts.size.size_10}>Account Number</Text>
                                <Text>{details.account_number}</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize={Fonts.size.size_10}>Payment Date</Text>
                                <Text>{formatDate(details.createdAt)}</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
        }
        
    </>;
}