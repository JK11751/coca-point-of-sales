import { Box, HStack, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const DashboardNav = () => {
  const location = useLocation();
  const pageTitleMap = {
    '/food': 'Food',
    '/beverages': 'Beverages',
    '/coffee': 'Coffee',
    '/appetizer': 'Appetizer',
    '/bread': 'Bread',
    '/snack': 'Snack',
  };

  const currentPage = pageTitleMap[location.pathname] || 'Dashboard';

  return (
    <Box
      color="#828487"
      fontSize="12px"
      fontWeight="500"
      lineHeight="18px"
      height="34px"
      borderBottom="1px solid #E4E4E4"
      padding="8px 16px"
    >
      <HStack spacing={1}>
        <Text color='#FF5C00'>Dashboard</Text>
        <Text> / {currentPage}</Text>
      </HStack>
    </Box>
  );
};

export default DashboardNav;
