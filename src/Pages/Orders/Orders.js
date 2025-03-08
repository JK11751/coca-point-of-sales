import React  from 'react';
import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
} from '@chakra-ui/react';



const Orders = () => {
  const orders = [
    {
      id: 'ORD123',
      date: '2025-01-26',
      items: [
        { name: 'Steak sapi bakar', qty: 1, price: 25.12, tax: 0.33 },
        { name: 'Ayam kentang', qty: 1, price: 15.4, tax: 0.32 },
      ],
      subtotal: 51.73,
      paymentMethod: 'Cash',
    },
    {
      id: 'ORD124',
      date: '2025-01-25',
      items: [
        { name: 'Mie kuah pedas', qty: 2, price: 22.42, tax: 0.84 },
      ],
      subtotal: 22.42,
      paymentMethod: 'Card',
    },
  ];

  return (
    <Box p="24px">
      <Text fontSize="24px" fontWeight="bold" mb="6">
        Orders
      </Text>
      {orders.map((order) => (
        <Box
          key={order.id}
          bg="#FFFFFF"
          p="24px"
          borderRadius="16px"
          mb="6"
          border="1px solid #E4E4E4"
        >
          <VStack align="stretch" spacing="4" mb="6">
            <Flex justifyContent="space-between">
              <Text fontSize="16px" fontWeight="600">
                Order ID: {order.id}
              </Text>
              <Text fontSize="14px" color="#828487">
                Date: {order.date}
              </Text>
            </Flex>
          </VStack>

          <Table variant="simple" mb={4}>
            <Thead>
              <Tr>
                <Th color="#9C9C9C" fontWeight="500" fontSize="12px">
                  Item Name
                </Th>
                <Th color="#9C9C9C" fontWeight="500" fontSize="12px">
                  Qty
                </Th>
                <Th color="#9C9C9C" fontWeight="500" fontSize="12px">
                  Price
                </Th>
                <Th color="#9C9C9C" fontWeight="500" fontSize="12px">
                  Tax
                </Th>
                <Th color="#9C9C9C" fontWeight="500" fontSize="12px">
                  Subtotal
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {order.items.map((item, index) => (
                <Tr key={index}>
                  <Td color="#19191C" fontWeight="400" fontSize="14px">
                    {item.name}
                  </Td>
                  <Td>{item.qty}</Td>
                  <Td color="#19191C" fontWeight="400" fontSize="14px">
                    $ {item.price.toFixed(2)}
                  </Td>
                  <Td color="#19191C" fontWeight="400" fontSize="14px">
                    $ {item.tax.toFixed(2)}
                  </Td>
                  <Td color="#19191C" fontWeight="400" fontSize="14px">
                    $ {(item.price + item.tax).toFixed(2)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="600" fontSize="14px">
              Total Amount: $ {order.subtotal.toFixed(2)}
            </Text>
            <Text fontSize="14px" color="#828487">
              Payment Method: {order.paymentMethod}
            </Text>
          </Flex>
         
        </Box>
      ))}


    </Box>
  );
};

export default Orders;
