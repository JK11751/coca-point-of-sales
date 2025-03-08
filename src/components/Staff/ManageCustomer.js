import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Thead,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import images from "../../Constants/images";

const ManageCustomer = () => {
  return (
    <Box
      
      borderRadius="16px"
        bg="#FFFFFF"
    >
<Flex
          alignItems="center"
          //borderRight='1px solid #E4E4E4'
      
          h="68px"
          flex="1"
          padding="22px 24px 22px 24px"
          gap={2}
        >
          <Image src={images.search} alt="search" width={17} height={17} />
          <Input
            type="text"
            placeholder="search menu.."
            variant="unstyled"
            bg="#FFFFFF"
            w='1,096px'
            h="24px"
            _placeholder={{
              color: '#C2C2C2',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
            }}
          />
        </Flex>
      
      

      <Table variant="simple" >
        <Thead>
          <Tr>
            <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>CUSTOMER NAME</Th>
            <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>PHONE NUMBER</Th>
            <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>EMAIL ADDRESS</Th>
            <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>REF CODE</Th>
            <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>CITY LOCATION</Th>
          
          </Tr>
        </Thead>
        <Tbody>
  {[
    {
      name: "John Sparrow",
      phone: "083894771983",
      email: "john.sparrow@mail.com",
      refCode: "-",
      city: "Sleman, Yogyakarta",
    },
    {
      name: "Bella Anisa",
      phone: "081829748835",
      email: "bella.anisa27@mail.com",
      refCode: "-",
      city: "",
    },
    {
      name: "Minimo Masasi",
      phone: "087837892837",
      email: "minimo45@mail.com",
      refCode: "-",
      city: "Sleman, Yogyakarta",
    },
  ].map((customer, index) => (
    <Tr key={index}>
      <Td fontWeight='400' fontSize='14px' textColor='#19191C'>{customer.name}</Td>
      <Td>{customer.phone}</Td>
      <Td>{customer.email}</Td>
      <Td>
        {/* Conditionally render refCode or button */}
        {customer.city === "" && customer.refCode === "-" ? (
          <Button
            w="124px"
            h="36px"
            textColor="#FF5C00"
            bg="#FFFFFF"
            borderRadius="58px"
            variant="unstyled"
            border="1px solid #FF5C00"
            mt="8px"
          >
            Display order
          </Button>
        ) : (
          customer.refCode
        )}
      </Td>
      <Td>
        <Box>
          <Text>{customer.city}</Text>
          {/* Spread the remaining buttons here */}
          {customer.city === "" && customer.refCode === "-" && (
            <Flex gap="2" mt="8px">
              <Button
                w="124px"
                h="36px"
                textColor="#FF5C00"
                bg="#FFF5EE"
                borderRadius="58px"
                variant="unstyled"
                border="1px solid #FF5C00"
              >
                Edit info
              </Button>
              <Button
                w="126px"
                h="36px"
                textColor="#FFFFFF"
                bg="#FF5C00"
                borderRadius="58px"
                variant="unstyled"
              >
                Add to order
              </Button>
            </Flex>
          )}
        </Box>
      </Td>
    </Tr>
  ))}
</Tbody>



      </Table>

      
    
    </Box>
  );
};

export default ManageCustomer;
