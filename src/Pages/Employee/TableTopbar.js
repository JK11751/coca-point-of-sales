import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { Box, Flex, HStack, Text, Button, Image, Input } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import images from '../../Constants/images';
import Reservation from '../../components/Employee/Reservation';


const TableTopbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 
  return (
    <Box
      width="100vw"
      height="68px"
      display="flex"
      borderBottom="1px solid #E4E4E4" 
      justifyContent="space-between"
      background="#FFFFFF" 
    >
      <Flex flex="1" alignItems="center" padding="0 16px">
        <ArrowBackIcon w="16px" h="12px" mr="16px" />
        <HStack spacing={4} flex="1">
         
            <HStack  spacing={2}>
              <Box w="12px" h="12px" bg="#3395F0" borderRadius="full" />
              <Text>Available</Text>
            </HStack>
          
        </HStack>
        <Flex gap="16px" alignItems="center" flex="1" justifyContent="flex-end">
         
            <Button
             onClick={toggleDrawer}
              h="36px"
              variant="unstyled"
              textColor="#19191C"
              fontSize="14px"
              fontWeight="400"
              lineHeight="19.6px"
              border="1px"
              borderColor="#E4E4E4"
              gap="10px"
              padding="8px 16px"
              borderRadius="40px"
              _hover={{
                bg: '#FFF5EE',
                color: '#FF5C00',
                borderColor: '#FF5C00',
              }}
              _active={{
                bg: '#FFF5EE',
                color: '#FF5C00',
                borderColor: '#FF5C00',
              }}
            >
              Reservation
            </Button>

          
        </Flex>
        <Flex
          alignItems="center"
          padding="0 16px"
          gap={2}
          width="320px"
          justifyContent="flex-end"
        >
          <Image src={images.search} alt="search" width={17} height={17} />
          <Input
            type="text"
            placeholder="search menu.."
            variant="unstyled"
            bg="#FFFFFF"
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
      </Flex>
      <Drawer
        
        isOpen={isDrawerOpen}
        placement="right"
        onClose={toggleDrawer}
      >
        <DrawerOverlay
          position="absolute"
          top="146px" 
          left="0"
          right="0"
          bottom="0"
           
        />
        <DrawerContent maxWidth="40vw" mt='146px'>
        
          <DrawerBody p={0} >
          <Reservation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>
  );
};

export default TableTopbar;
