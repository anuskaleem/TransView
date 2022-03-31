import React from 'react';
import { NativeBaseProvider } from 'native-base'
import {RootContainer, Transactions} from '.';

export default function Home({navigation}){
    return(
        <NativeBaseProvider>
            <RootContainer/>
            <Transactions navigation={navigation} />
        </NativeBaseProvider>
    )
}