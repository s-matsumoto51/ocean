import { Box, Button, HStack, IconButton, Input, Stack, Text, VStack } from "@chakra-ui/react"
import { componentStyles } from "@/styles";
import { AddIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons"
import { useState } from "react";
import { exit } from "process";
import { SingleDate } from "../date/singleDate";
import { RangeDate } from "../date/rangeDate";

type TabType ={
    selectedTab:string;
    setSelectedTab:(value:string)=>void
}
interface DatesState {
  date1: string  ;
  date2: string  ;
  date3: string  ;
}
export const Tab =({selectedTab,setSelectedTab}:TabType)=>{
  const [activeButton,setActiveButton] = useState<string | null>("time");
  const [valueCalender,setValueCalender] = useState<DatesState>({
    date1: '',
    date2: '',
    date3: ''
  });

  const buttons =[
    {name:"time",component:TimeIcon},
    {name:"add",component:AddIcon},
    {name:"view",component:ViewIcon}
  ]
    return(
      <Stack>
        <Box mb={6} boxShadow={'lg'}>
          <VStack>
            <HStack justify={'space-between'} w={'full'} p={2}>
              {activeButton=="time"&&(
                <Text color={"black"}> DATE:SINGLE</Text>
                )
              }
              { activeButton=="view"&&(
                <Text color={"black"}> DATE:TIME RANGE</Text>
                )
              }
              <HStack gap={1} >
                {buttons.map((buttonName,index)=>{
                  const IconName=buttonName.component;
                  return(
                    <Box 
                    key={index} 
                    padding={1} 
                    boxShadow={"lg"}
                    onClick={()=>setActiveButton(buttonName.name)}
                    bgColor={buttonName.name==activeButton?"#0a4393":"white"}
                    cursor={"pointer"}
                    >
                    <IconName boxSize={5} color="blue.500"/>
                  </Box>
                  )
                })}
              </HStack>
            </HStack>
            {activeButton=="time" &&(
              <SingleDate
                valueCalender={valueCalender.date1}
                setValueCalender={(value: string) => setValueCalender(prev => ({...prev, date1: value}))}
              />
            )
            }
            {activeButton=="view" &&(
              <RangeDate
               valueCalender2={valueCalender.date2}
               valueCalender3={valueCalender.date3}
               setValueCalender2 = {(value: string)=>(setValueCalender((prev)=>({...prev,date2:value})))}
               setValueCalender3 = {(value: string)=>(setValueCalender((prev)=>({...prev,date3:value})))}
              />
            )
            }
            
                
            <Box w={"full"} p={4} >
              <Button bgColor={'#77cc0980'} w={'100%'}  >
                Show Latest Data
              </Button>
            </Box>
          </VStack>
        </Box>
        <Box boxShadow={"lg"}>
          <Box p={4}>
            <Text color={"black"}>Default</Text>
          </Box>
        </Box>
      </Stack>
      // <Box mb={6} boxShadow={'lg'}>
      //   <Box p={'1'}>
      //     <HStack justify={'space-between'}>
      //       <Text> DATE:SINGLE</Text>
      //       <HStack gap={1} >
      //         <Box padding={1} boxShadow={'lg'}>
      //           <CalendarIcon boxSize={5} color="blue.500" />
      //         </Box>
      //         <Box padding={1} boxShadow={'lg'}>
      //           <CalendarIcon boxSize={5} color="blue.500" />
      //         </Box>
      //         <Box padding={1} boxShadow={'lg'}>
      //           <CalendarIcon boxSize={5} color="blue.500" />
      //         </Box>
      //       </HStack>
      //     </HStack>
      //   </Box>
      //   <Box>
      //     <Box p={'1 1 1 2'}>
            
      //     </Box>
      //   </Box>
      // </Box>
        // <VStack gap={2} align="stretch" mb={6}>
        //   <Button
        //     {...componentStyles.sidebar.navButton}
        //     {...(selectedTab === 'map' ? componentStyles.sidebar.navButtonBlue : { bg: 'transparent' })}
        //     variant={selectedTab === 'map' ? 'solid' : 'ghost'}
        //     colorScheme="blue"
        //     onClick={() => setSelectedTab('map')}
        //   >
        //     地図表示
        //   </Button>

        //   <Button
        //     {...componentStyles.sidebar.navButton}
        //     {...(selectedTab === 'data' ? componentStyles.sidebar.navButtonGreen : { bg: 'transparent' })}
        //     variant={selectedTab === 'data' ? 'solid' : 'ghost'}
        //     colorScheme="green"
        //     onClick={() => setSelectedTab('data')}
        //   >
        //     日時選択
        //   </Button>
        // </VStack>
    )
}