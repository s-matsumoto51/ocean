import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { DateInput } from "./DateInput"

type PropsType ={
    valueCalender2: string, 
    valueCalender3: string,
    setValueCalender2:(value:string) =>void;
    setValueCalender3:(value:string) =>void;
}
export const RangeDate=({valueCalender2,valueCalender3,setValueCalender2,setValueCalender3}:PropsType)=>{
    return(
        <VStack w={"full"}>
            <Box w={"full"} marginLeft={5}>
                <Text color={"black"}>From:</Text>
            </Box>
            <DateInput />
            <Box w={"full"} marginLeft={5}>
                <Text color={"black"}>untill:</Text>
            </Box>
            <DateInput />
        </VStack>
    )
}