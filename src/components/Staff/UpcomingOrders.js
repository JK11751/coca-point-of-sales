import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { RiMapPinRangeLine } from "react-icons/ri";

const UpcomingOrders = () => {
  const orders = [
    {
      id: '#256873',
      status: 'Unpaid',
      name: 'John Sparrow',
      address: 'Test 555, Alimps Campus, Binaker',
      time: '14 mins',
    },
    {
      id: '#256873',
      status: 'Paid',
      name: 'Chintya Lin',
      address: 'Test 555, Alimps Campus, Binaker',
      time: '14 mins',
    },
    {
      id: '#256873',
      status: 'Paid',
      name: 'Brandon Po',
      address: 'Test 555, Alimps Campus, Binaker',
      time: '14 mins',
    },
    {
      id: '#256873',
      status: 'Unpaid',
      name: 'Amanda',
      address: 'Test 555, Alimps Campus, Binaker',
      time: '14 mins',
    },
    {
      id: '#256873',
      status: 'Paid',
      name: 'Michael Luck',
      address: 'Test 555, Alimps Campus, Binaker',
      time: '14 mins',
    },
    
  ];

  return (
    <Box>
      <Text color='#828487' fontSize='16px' fontWeight="400"  mb={4}>
        Additional orders are almost ready. Would you like to take them with
        you?
      </Text>
      <Box align="stretch">
        {orders.map((order, index) => (
          <Box mb={4} key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Flex justifyContent="space-between">
              <VStack alignItems="flex-start" spacing={0}>
                <HStack justifyContent="space-between">
                  <Text color='#828487' fontSize='14px' fontWeight="400">Order ID {order.id}</Text>
                  <Badge
                    padding="4px 10x"
                    borderRadius="48px"
                    bg={order.status === 'Paid' ? '#EEFFEE' : '#FFF5EE'}
                    textColor={order.status === 'Paid' ? '#35C335' : '#FF5C00'}
                  >
                    {order.status}
                  </Badge>
                </HStack>
                <Text color='#19191C' fontSize='16px' fontWeight="600" mt={2}>{order.name}</Text>
              </VStack>
              <HStack mt={2} spacing={4}>
                <Button
                w='120px'
                  bg="#FFFFFF"
                  textColor="#FF5C00"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  variant="unstyled"
                  borderRadius="58px"
                  padding="8px 20px"
                  border="1px solid #FF5C00"
                  h="36px"
                >
                  Reject
                </Button>
                <Button
                  w='120px'
                  bg="#FF5C00"
                  textColor="#FFFFFF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  variant="unstyled"
                  borderRadius="58px"
                  padding="8px 20px"
                  border="1px solid #FF5C00"
                  h="36px"
                >
                  Delivery
                </Button>
              </HStack>
            </Flex>
            <Divider mt={2} />
            <Flex mt={2}  justifyContent="space-between">
                <HStack>
            <RiMapPinRangeLine />
              <Text color='#828487' fontSize='12px' fontWeight="500" >
                {order.address}
              </Text>
              </HStack>
              <Button color='#19191C' fontSize='12px' fontWeight="400" bg='#F8F9FD' h='30px' borderRadius='40px' padding='6px 12px' variant='unstyled' leftIcon={<TimeIcon  color='#828487' />}> {order.time}</Button>
              
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingOrders;
