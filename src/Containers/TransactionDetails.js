import { Card, NativeBaseProvider, HStack,VStack, Text, Button } from 'native-base';
import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootContainer } from '.';
import { getTransactionDetails } from '../redux/ducks/transactionDetail';
import { Avatar } from '../Common';
import { Fonts, Images, Metrics,Colors } from '../theme';

export default function TransactionDetails({route}){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTransactionDetails(route.params.id));
    },[])
    const details = useSelector((state)=>state.transaction.transaction);
    
    return(
        <NativeBaseProvider>
            <RootContainer navigation={route.params.navigation}/>
            <Card>
                <VStack justifyContent={"center"} alignItems="center">
                    <VStack>
                        <Avatar source={!details.status?Images.transactions.declined:Images.transactions.accepted} size={Metrics.ratio(45)} />
                        <Text style={{marginTop:10}} color={!details.status?"#FF0000":"#00FF00"}>{!details.status?"Transaction Declined" : "Transaction Completed"}</Text>
                    </VStack>
                    <HStack justifyContent={"space-between"} alignItems="space-between">
                        <VStack width="50%">
                            <Text fontSize={Fonts.size.size_20} color={"#00FF00"}>{details.receiving_amount} <Text color="#000" sub>PKR</Text>
                                </Text>
                            <Text fontSize={Fonts.size.size_10}>Receiving Amount</Text>
                        </VStack>
                        <VStack>
                            <Text fontSize={Fonts.size.size_20} color={"#FF0000"}>{details.paid_amount} <Text color="#000" sub>AED</Text></Text>
                            <Text fontSize={Fonts.size.size_10}>Total Paid</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{marginTop:20}} justifyContent="space-between">
                        <Button style={{marginRight:50}} size="sm" variant="subtle" colorScheme="secondary">
                            New Transaction
                        </Button>
                        <Button color={Colors.lightGrey} size="sm" variant="subtle">
                            Send Receipt
                        </Button>
                    </HStack>
                </VStack>
            </Card>
        </NativeBaseProvider>
    );
}