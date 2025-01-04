import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import MenuCard from '../../Constants/MenuCard';


const Dashboard = () => {
  return (
    <Box
    bg='#F8F9FD'
    padding="12px"
     
    >
      <SimpleGrid columns={6} spacing={2}>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      </SimpleGrid>
      
    </Box>
  );
};

export default Dashboard;
