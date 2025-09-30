import { Box, HStack, Input } from "@chakra-ui/react"
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/style.css'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type TProps ={
    valueCalender:string;
    handleChangeDate:(e: React.ChangeEvent<HTMLInputElement>)=> void;
    goToPrevDay : () => void;
    goToNextDay : () => void;
}
    
export const SingleDate = ({valueCalender,handleChangeDate,goToPrevDay,goToNextDay}:TProps) => {
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