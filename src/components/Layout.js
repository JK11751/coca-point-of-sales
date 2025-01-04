import { Box, HStack, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './Topbar';
import Leftbar from './Leftbar';

const Layout = () => {
  return (
    <HStack  justifyContent="space-between"  alignItems="stretch" spacing={0}height="100vh">
      <Sidebar />
      <Flex  direction="column" flex="1">
        <TopBar />
        <Box flex="1"  overflowY="auto"  >
          <Outlet />
        </Box>
      </Flex>
      <Leftbar />
    </HStack>
  );
};

export default Layout;
