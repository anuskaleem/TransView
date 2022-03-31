import React, { useEffect } from "react";
import { Box } from "native-base";
import { useDispatch } from "react-redux";
import {AppBar} from "../Components";
import { getTransactions } from "../redux/ducks/transactions";


export default function RootContainer({navigation}){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTransactions());
    },[])

    return(
      <Box>
          <AppBar navigation={navigation}/>
      </Box>
        
    )
    
}