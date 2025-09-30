'use client';

import { componentStyles } from "@/styles";
import { Box, CloseButton, VStack} from "@chakra-ui/react";
import { useState } from 'react';
import { Map } from "./map/Map";
import { Tab } from "./tab/Tab";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [selectedTab, setSelectedTab] = useState('roadmap');

  return (
    <Box
      {...componentStyles.sidebar.container}
      left={isOpen ? 0 : {base:'-100px',md:'-300px',lg:'-400px'}}
    >
      {/* ヘッダー部分 */}
      <Box {...componentStyles.sidebar.header}>
        <h2 style={{
          ...componentStyles.sidebar.title
        }}>
          海洋清
        </h2>
        <CloseButton {...componentStyles.sidebar.closeButton} onClick={onToggle}
        />
      </Box>

      {/* コンテンツエリア */}
      <VStack gap={0} align="stretch" p={4}>
        {/* ナビゲーションボタン */}
        <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {/* <Box>
          {selectedTab === 'map' && (
            <Map/>
          )}
          {selectedTab === 'data' && (
            <Date/>
          )}
        </Box>  */}
      </VStack>
    </Box>
  );
};
