import React from 'react'
import { Avatar } from '.';
import { Box, Text, VStack, HStack, Spacer } from 'native-base';
import { Images, Metrics,Colors } from '../theme';
import { formatDate } from '../utils/Util';
import { TouchableOpacity } from 'react-native';

export default function TransactionItem({navigation,transaction}){
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("transactionDetails",{id:transaction.item.id,navigation:navigation})}}>
            <Box background={Number(transaction.item.id)%2!=0?Colors.white:Colors.lightGrey}
                pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                <Avatar source={Images.transactions.bank} size={Metrics.ratio(45)} />
                <VStack>
                    <Text color={Colors.name}>
                    {transaction.item.name.toUpperCase()}
                    </Text>
                    <Text color={Colors.bankName} bold>
                    {transaction.item.bank_name.toUpperCase()}
                    </Text>
                    <HStack>
                    <Text color={Colors.transferType}>
                        {transaction.item.transfer_type}
                    </Text>
                    </HStack>
                </VStack>
                <Spacer />
                <VStack>
                    <Text alignSelf="flex-start" color={Colors.amount} bold>
                        { transaction.item.paid_amount } <Text sub>PKR</Text>
                    </Text>
                    <Text  color={Colors.transferType} alignSelf="flex-start">
                        { formatDate(transaction.item.createdAt) }
                    </Text>
                    <Avatar source={!transaction.item.status?Images.transactions.declined:Images.transactions.accepted} size={Metrics.ratio(45)} />
                </VStack>
                </HStack>
            </Box>
        </TouchableOpacity>
    );
}