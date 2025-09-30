import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react"

export const RangeDate=()=>{
    return(
        <VStack w={"full"}>
            <Box w={"full"} marginLeft={5}>
                <Text color={"black"}>From:</Text>
            </Box>
            <HStack w="full"  gap={1} marginLeft={9}>
                <Box 
                    boxShadow={'lg'} 
                    h="40px"
                    w="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
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
                    />
                </Box>
                <Box
                    boxShadow={'lg'} 
                    h="40px"
                    w="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ChevronRightIcon boxSize={6} color={'#0a4393'}/>
                </Box>
            </HStack> 
            <Box w={"full"} marginLeft={5}>
                <Text color={"black"}>untill:</Text>
            </Box>
            <HStack w="full"  gap={1} marginLeft={9}>
                <Box 
                    boxShadow={'lg'} 
                    h="40px"
                    w="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
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
                    />
                </Box>
                <Box
                    boxShadow={'lg'} 
                    h="40px"
                    w="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ChevronRightIcon boxSize={6} color={'#0a4393'}/>
                </Box>
            </HStack> 
        </VStack>
    )
}