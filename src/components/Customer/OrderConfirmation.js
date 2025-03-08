import React from 'react';
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
  Divider,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react';
import { HiOutlineCash  } from "react-icons/hi";

const OrderConfirmation = () => {
  return (
    <Box bg="#FFFFFF" p="24px" borderRadius="16px">
      <VStack spacing="4" align="stretch" mb="6">
        <Text
          color="#19191C"
          fontWeight="600"
          fontSize="20px"
          textAlign="center"
        >
          Order confirmation
        </Text>
        <Text
          color="#828487"
          fontWeight="500"
          fontSize="14px"
          textAlign="center"
        >
          Please confirm the order below to complete payment
        </Text>
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
          <Tr>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              Steak sapi bakar
            </Td>
            <Td>1</Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 25.12
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 0.33
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 25.12
            </Td>
          </Tr>
          <Tr>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              Ayam kentang
            </Td>
            <Td>1</Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 15.40
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 0.32
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 15.40
            </Td>
          </Tr>
          <Tr>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              Mie kuah pedas
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              1
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 11.21
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 0.42
            </Td>
            <Td color="#19191C" fontWeight="400" fontSize="14px">
              $ 11.21
            </Td>
          </Tr>
        </Tbody>
      </Table>

     

      <Flex justifyContent="space-between" mb="4">
        <Box
          borderRadius="4px"
          border="1px solid #E4E4E4"
          w="330px"
          bg="#E4E4E4"
          padding="16px"
        >
          <Text fontWeight="600" fontSize="14" mb="2" color="#19191C">
            NOTES
          </Text>
          <Text fontSize="12px" fontWeight="400" color="#828487">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
        </Box>

        <Box w="330px" pr="24px" pl="24px">
          <VStack spacing="2" align="stretch">
            <Flex justifyContent="space-between">
              <Text color="#9C9C9C" fontWeight="400" fontSize="14px">
                Subtotal
              </Text>
              <Text color="#19191C" fontWeight="400" fontSize="14px">
                $ 51.73
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="#9C9C9C" fontWeight="400" fontSize="14px">
                Surcharge
              </Text>
              <Text color="#19191C" fontWeight="400" fontSize="14px">
                $ 0
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="#9C9C9C" fontWeight="400" fontSize="14px">
                Order Discount
              </Text>
              <Text color="#19191C" fontWeight="400" fontSize="14px">
                $ 0
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text color="#9C9C9C" fontWeight="400" fontSize="14px">
                Tax
              </Text>
              <Text color="#19191C" fontWeight="400" fontSize="14px">
                $ 0
              </Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between" fontWeight="bold">
              <Text color="#19191C" fontWeight="600" fontSize="14px">
                Bill Amount
              </Text>
              <Text color="#19191C" fontWeight="600" fontSize="14px">
                $ 51.73
              </Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" width="full">
        <VStack align='flex-start'>
        <Text width="388px" fontSize="sm" mb="0">
          Payment method
          </Text>
          <HStack spacing="2">
          <HiOutlineCash height="24px" width="24px" color="#55E466" />
          <Text as="span" fontWeight="bold">
            Cash
          </Text>
          </HStack>
        </VStack>

       
        <HStack spacing="4" flex={1}>
          <Button width='100px' textColor='#FF5C00' bg='#FFFFFF' borderRadius='58px' variant="unstyled" border='1px solid #FF5C00'>
            Cancel
          </Button>
          <Button width='100px' textColor='#FFFFFF' bg='#FF5C00' borderRadius='58px' variant="unstyled" border='1px solid #FF5C00' >Confirm</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default OrderConfirmation;
