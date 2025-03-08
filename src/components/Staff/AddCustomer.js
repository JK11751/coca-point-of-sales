import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
  Radio,
  RadioGroup,
  HStack,
} from '@chakra-ui/react';

const AddCustomer = () => {
  return (
    <Box p={4}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter name" />
        </FormControl>

        <FormControl>
          <FormLabel>Delivery area</FormLabel>
          <Input placeholder="Enter delivery area" />
        </FormControl>

        <FormControl>
          <FormLabel>Phone number</FormLabel>
          <Input placeholder="Enter phone number" />
        </FormControl>

        <FormControl>
          <FormLabel>Select Location/Branch</FormLabel>
          <Select placeholder="Select location/Branch">
            {/* Options would go here */}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter email address" />
        </FormControl>

        <FormControl>
          <FormLabel>Building</FormLabel>
          <Input placeholder="Enter building" />
        </FormControl>

        <FormControl>
          <FormLabel>Sex</FormLabel>
          <RadioGroup defaultValue="Male">
            <HStack spacing={4}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Street</FormLabel>
          <Input placeholder="Enter street" />
        </FormControl>

        <FormControl>
          <FormLabel>Date of birth</FormLabel>
          <HStack spacing={4}>
            <Input placeholder="Day" />
            <Input placeholder="Month" />
            <Input placeholder="Year" />
          </HStack>
        </FormControl>

        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="Enter city" />
        </FormControl>

        <FormControl>
          <FormLabel>Customer group</FormLabel>
          <Select placeholder="Select customer group">
            {/* Options would go here */}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            {/* Options would go here */}
          </Select>
        </FormControl>

        <HStack spacing={4} justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button colorScheme="blue">Save</Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default AddCustomer;