import { Box, HStack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../General/Sidebar';
import TopBar from '../General/Topbar';
import Leftbar from '../General/Leftbar';
import Header from '../General/Header';
import TableDashboard from '../../Pages/Staff/TableDashboard';
import TableTopbar from '../../Pages/Staff/TableTopbar';

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isTableDashboardVisible, setIsTableDashboardVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <HStack
        justify="space-between"
        alignItems="stretch"
        spacing={0}
        height="100vh"
      >
        {!isTableDashboardVisible && isSidebarVisible && <Sidebar />}
        <Flex direction="column" flex="1">
          {isTableDashboardVisible ? <TableTopbar /> : <TopBar  />}
          <Box flex="1" overflowY="auto">
            {isTableDashboardVisible ? <TableDashboard /> : <Outlet   />}
          </Box>
        </Flex>
        {!isTableDashboardVisible && (
          <Leftbar setIsTableDashboardVisible={setIsTableDashboardVisible} />
        )}
      </HStack>
    </>
  );
};

export default Layout;
