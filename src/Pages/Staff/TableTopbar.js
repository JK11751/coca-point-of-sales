import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  Image,
  Input,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import images from '../../Constants/images';
import Reservation from '../../components/Staff/Reservation';
import RunningOrder from '../../components/Staff/RunningOrder';

const TableTopbar = () => {
  const [isRunningOrderDrawerOpen, setIsRunningOrderDrawerOpen] =
    useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleRunningOrderDrawer = () => {
    setIsRunningOrderDrawerOpen(!isRunningOrderDrawerOpen);
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
          <HStack spacing={2}>
            <Box w="12px" h="12px" bg="#3395F0" borderRadius="full" />
            <Text>Available</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="12px" h="12px" bg="#FF5C00" borderRadius="full" />
            <Text>Reserved</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="12px" h="12px" bg="#13C91B" borderRadius="full" />
            <Text>Billed</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="12px" h="12px" bg="#F0B433" borderRadius="full" />
            <Text>Available Soon</Text>
          </HStack>
        </HStack>
        <Flex gap="16px" alignItems="center" flex="1" justifyContent="flex-end">
        <Button
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
            All table
          </Button>
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

          <Button
            onClick={toggleRunningOrderDrawer}
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
            Running Order
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
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay
          position="absolute"
          top="146px"
          left="0"
          right="0"
          bottom="0"
        />
        <DrawerContent maxWidth="40vw" mt="146px">
          <DrawerBody p={0}>
            <Reservation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isRunningOrderDrawerOpen}
        placement="right"
        onClose={toggleRunningOrderDrawer}
      >
        <DrawerOverlay />
        <DrawerContent maxWidth="1108px">
          <DrawerHeader textColor="#19191C" fontSize="20px" fontWeight="600">
            Running Order
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <RunningOrder />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default TableTopbar;
