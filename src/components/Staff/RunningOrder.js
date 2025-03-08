import React from 'react';
import {
  Box,
  Flex,
  Text,
  Badge,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,

} from '@chakra-ui/react';
import { FaPrint} from 'react-icons/fa';
import { IoMdCash } from "react-icons/io";
//import { useNavigate } from 'react-router-dom';

const RunningOrder = () => {

 // const navigate = useNavigate();
  
  const orders = [
    {
      tableNumber: 'T-06',
      orderNumber: '#46',
      description: 'Steak sapi bakar x 1',
      statusTextColor: '#3071FF',
      amount: '25.12',
      status: 'Running order',
      statusColor: '#E5EDFE',
      diningFor: '35 minutes',
      actions: ['Print bill'],
    },
    {
      tableNumber: 'T-06',
      orderNumber: '#46',
      statusTextColor: '#FF5C00',
      description: 'Steak sapi bakar x 1',
      amount: '25.12',
      status: 'Done soon',
      statusColor: '#FFF5EE',
      diningFor: '5 minutes',
      actions: ['Re-print', 'Pay now'],
    },
    {
      tableNumber: 'T-06',
      orderNumber: '#46',
      statusTextColor: '#35C335',
      description: 'Steak sapi bakar x 1',
      amount: '25.12',
      status: 'Done',
      statusColor: '#EEFFEE',
      diningFor: '5 minutes',
      actions: [],
    },
  ];

  return (
    <Box p={5} bg="white">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              TABLE NUMBER
            </Th>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              ORDER NUMBER
            </Th>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              AMOUNT
            </Th>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              STATUS
            </Th>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              DINING FOR
            </Th>
            <Th fontWeight="500" fontSize="12px" textColor="#9C9C9C">
              ACTIONS
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>
                <Flex align="center" gap={2}>
                  <Badge
                    bg="#FFF5EE"
                    fontSize="14px"
                    fontWeight="600"
                    textColor="#FF5C00"
                    h="54px"
                    w="54px"
                    borderRadius="120px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {order.tableNumber}
                  </Badge>
                </Flex>
              </Td>
              <Td>
                <Text fontSize="14px" fontWeight="600" color="#19191C">
                  {order.orderNumber}
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="#828487"
                  isTruncated
                >
                  {order.description}
                </Text>
              </Td>
              <Td
                fontSize="14px"
                fontFamily="sans-serif"
                fontWeight="600"
                color="#19191C"
              >
                $ {order.amount}
              </Td>
              <Td>
                <Badge
                  textColor={order.statusTextColor}
                  bg={order.statusColor}
                  fontSize="12px"
                  fontWeight="500"
                  padding="6px 12px"
                  h="30px"
                  borderRadius="48px"
                >
                  {order.status}
                </Badge>
              </Td>
              <Td textColor="#19191C" fontWeight="400" fontSize="14px">
                {order.diningFor}
              </Td>
              <Td>
                <Flex gap={2}>
                  {order.actions.map((action, actionIndex) => {
                    if (action === 'Print bill' || action === 'Re-print') {
                      return (
                        <Button
                          bg="#FFFFFF"
                          textColor='#FF5C00'
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          variant="unstyled"
                          borderRadius="58px"
                          padding="8px 20px"
                          border="1px solid #FF5C00"
                          h="36px"
                          key={actionIndex}
                          leftIcon={<FaPrint color='#FF5C00' />}
                        >
                          {action}
                        </Button>
                      );
                    } else if (action === 'Pay now') {
                      return (
                        <Button
                       
                        bg="#FF5C00"
                          textColor='#FFFFFF'
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          variant="unstyled"
                          borderRadius="58px"
                          padding="8px 20px"
                          border="1px solid #FF5C00"
                          h="36px"
                          key={actionIndex}
                          
                          leftIcon={<IoMdCash color='#FFFFFF' />}
                          
                        >
                          {action}
                        </Button>
                      );
                    }
                    return null;
                  })}
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RunningOrder;
