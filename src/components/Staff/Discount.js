import React from 'react';
import { Box, VStack, Checkbox, Text, Button, HStack } from '@chakra-ui/react';

const Discount = () => {
  const discounts = [
    { label: 'Broccoli Staff (on total)', value: '50%' },
    { label: 'Fly Dubai (on total)', value: '50%' },
    { label: 'Better homes (on total)', value: '50%' },
    { label: 'Broccoli Staff (on total)', value: '50%' },
    { label: 'Fly Dubai (on total)', value: '50%' },
    { label: 'Better homes (on total)', value: '50%' },
  ];

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Select discount</Text>
      <VStack align="stretch" spacing={4}>
        {discounts.map((discount, index) => (
          <HStack key={index} justifyContent="space-between">
            <Checkbox>
              <Text>{discount.label}</Text>
            </Checkbox>
            <Text>{discount.value}</Text>
          </HStack>
        ))}
      </VStack>
      <HStack mt={4} spacing={4}>
        <Button colorScheme="red" variant="outline">Cancel</Button>
        <Button colorScheme="teal">Apply</Button>
      </HStack>
    </Box>
  );
};

export default Discount;