import { Box, HStack, Input } from "@chakra-ui/react"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/style.css'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDate } from "../hooks/useDate";

type TProps ={
    valueCalender: string;
    setValueCalender:(value:string) =>void;
}
    
export const SingleDate = ({valueCalender,setValueCalender}:TProps) => {
    //   const handleChangeDate=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setValueCalender(e.target.value);
    //   }
    
    //   const goToPrevDay = ()=>{
    //     if (valueCalender==="") return;
    //     const preDate = new Date(valueCalender);
    //     preDate.setDate(preDate.getDate()-1);
    //     setValueCalender(preDate.toISOString().split("T")[0]);
    //   }
    //   const goToNextDay = ()=>{
    //     if (valueCalender==="") return;
    //     const nextDate = new Date(valueCalender);
    //     nextDate.setDate(nextDate.getDate()+1);
    //     setValueCalender(nextDate.toISOString().split("T")[0]);
    //   }
    const {handleChangeDate,goToPrevDay,goToNextDay} = useDate(valueCalender,setValueCalender);

    return (
        <HStack w="full"  gap={1} marginLeft={9}>
            <Box 
                boxShadow={'lg'} 
                h="40px"
                w="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={goToPrevDay}
                >
                <ChevronLeftIcon boxSize={6} color={'#0a4393'}/>
            </Box>
            <Box
                boxShadow={'lg'} 
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Input
                placeholder="YYYY-MM-DD"
                type="date"
                color={'#0a4393'}
                onChange={handleChangeDate}
                value={valueCalender}
                />
            </Box>
            <Box
                boxShadow={'lg'} 
                h="40px"
                w="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={goToNextDay}
            >
                <ChevronRightIcon boxSize={6} color={'#0a4393'}/>
            </Box>
        </HStack> 
    )
}