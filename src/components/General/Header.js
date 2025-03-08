import React, { useState } from 'react';
import images from '../../Constants/images';
import {
  Flex,
  Text,
  Image,
  Box,
  Link,
  HStack,
  Button,
  VStack,
  Avatar,
  Divider,
  Checkbox,
  Radio,
  useDisclosure,
  Badge,
} from '@chakra-ui/react';
import { MdLocalDining } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { HiHome, HiOutlineClock } from 'react-icons/hi';
import { BiNote } from 'react-icons/bi';
import { RiBillLine } from 'react-icons/ri';
import OrderPayment from '../Customer/OrderPayment';
import UpcomingOrders from '../Staff/UpcomingOrders';

const linkStyles = {
  textDecoration: 'none',
};

const Header = ({ toggleSidebar }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      align="center"
      p={4}
      width="100%"
      height="78px"
      bg="#FFFFFF"
      black="white"
      borderBottom="1px"
      borderBottomColor="#E4E4E4"
      justify="space-between"
    >
      <HStack>
        <ArrowBackIcon
          onClick={toggleSidebar}
          width={'36px'}
          h={'36px'}
          borderRadius={'58px'}
          border={'1px'}
          p={'8px'}
        />
        <Divider
          mr={'40px'}
          border={'1px'}
          color={'#E4E4E4'}
          orientation="vertical"
        />

        <HStack>
          <Image color={'#FF5C00'} src={images.logo} w={'44px'} h={'44px'} />
          <VStack align={'flex-start'}>
            <Text
              color={'#19191C'}
              h={'24px'}
              fontWeight={600}
              fontSize={'16px'}
              lineHeight={'24px'}
            >
              Walk-In
            </Text>
            <Text
              fontWeight={400}
              fontSize={'14px'}
              lineHeight={'20px'}
              h={'20px'}
              w={'165px'}
            >
              Coca CoffeeTalk
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <Flex gap={10} align="center" justify="space-between">
        <HStack>
          <HiHome height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            h={'24px'}
            w={'48px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
          >
            Home
          </Link>
        </HStack>
        <HStack>
          <BiNote height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            h={'24px'}
            w={'48px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
           
          >
            Order
          </Link>
        </HStack>
        <HStack>
          <HiOutlineClock height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            h={'24px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
          >
            History
          </Link>
        </HStack>
        <HStack>
          <RiBillLine height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            h={'24px'}
            w={'48px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
            onClick={onOpen}
          >
            Bills
          </Link>
        </HStack>
        <HStack>
          <FaRegUser ine height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            h={'24px'}
            w={'48px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
          >
            Customers
          </Link>
        </HStack>
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Box
              alignContent={'center'}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
              h={'36px'}
              borderRadius={'60px'}
              p={'8px'}
              bgColor={'#FFF5EE'}
            >
              <Text
                color={'#FF5C00'}
                fontWeight={600}
                fontSize={'14px'}
                lineHeight={'20px'}
              >
                Dining Option
              </Text>
            </Box>
          </PopoverTrigger>
          <PopoverContent padding="16px" width="300px" borderRadius="16px">
            <PopoverArrow />

            <PopoverBody>
              <VStack align="flex-start" spacing={4}>
                <Box
                  bg="#FF5C00"
                  textColor="#FFFFFF"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  variant="unstyled"
                  borderRadius="58px"
                  padding="8px 20px"
                  border="1px solid #FF5C00"
                  w="100%"
                  h="36px"
                >
                  <HStack>
                    <Image
                      src={images.dine}
                      color="#FF5C00"
                      w={'20px'}
                      h={'20px'}
                    />
                    <Text textAlign="center">Dine in</Text>
                  </HStack>
                  <Radio variant="none" colorScheme="white" h="12px" w="12px" />
                </Box>

                <Box
                  bg="#FF5C00"
                  textColor="#FFFFFF"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  variant="unstyled"
                  borderRadius="58px"
                  padding="8px 20px"
                  border="1px solid #FF5C00"
                  w="100%"
                  h="36px"
                >
                  <HStack>
                    <Image
                      src={images.takeaway}
                      color="#FF5C00"
                      w={'20px'}
                      h={'20px'}
                    />
                    <Text textAlign="center">Take away</Text>
                  </HStack>
                  <Radio colorScheme="white" h="12px" w="12px" />
                </Box>
                <Box
                  bg="#FF5C00"
                  textColor="#FFFFFF"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  variant="unstyled"
                  borderRadius="58px"
                  padding="8px 20px"
                  border="1px solid #FF5C00"
                  w="100%"
                  h="36px"
                >
                  <HStack>
                    <Image
                      src={images.reservation}
                      color="#FF5C00"
                      w={'22px'}
                      h={'20px'}
                    />
                    <Text textAlign="center">Dine in</Text>
                  </HStack>
                  <Radio colorScheme="white" h="12px" w="12px" />
                </Box>
              </VStack>
              <Flex mt={8} justify="space-between">
                <Button
                  width="100px"
                  textColor="#FF5C00"
                  bg="#FFFFFF"
                  borderRadius="58px"
                  variant="unstyled"
                  border="1px solid #FF5C00"
                >
                  Cancel
                </Button>
                <Button
                  width="100px"
                  textColor="#FFFFFF"
                  bg="#FF5C00"
                  borderRadius="58px"
                  variant="unstyled"
                  border="1px solid #FF5C00"
                >
                  Apply
                </Button>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Box
          alignContent={'center'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          h={'36px'}
          borderRadius={'60px'}
          p={'8px'}
          bgColor={'#F8F9FD'}
        >
          <Text
            color={'#19191C'}
            fontWeight={400}
            fontSize={'14px'}
            lineHeight={'20px'}
          >
            Time
          </Text>
        </Box>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          h={'44px'}
          w={'44px'}
        />
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent h="100vh" maxW="630px">
          <DrawerCloseButton />

          <DrawerHeader>
            <HStack spacing={4}>
              <Text>Upcoming orders</Text>
              <Badge textColor="#FF5C00" bg="#FFF5EE" borderRadius="48px">
                10
              </Badge>
            </HStack>
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <UpcomingOrders />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
        <DrawerOverlay />
        <DrawerContent maxW="536px">
          <DrawerCloseButton />

          <DrawerHeader>Order Payment</DrawerHeader>
          <Text ml={6} fontWeight="400" textColor="#19191C" fontSize="16px">
            Order #102
          </Text>

          <Divider mt={4} />

          <DrawerBody>
            <OrderPayment />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
