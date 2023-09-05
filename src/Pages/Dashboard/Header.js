import React, { useState } from 'react';
import images from '../../Constants/images';
import {
  Flex,
  Text,
  Image,
  Box,
  Link,
  HStack,
  VStack,
  Avatar,
  Divider,
  IconButton,
  useMediaQuery
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';

import { HiHome, HiOutlineClock } from 'react-icons/hi';
import { BiNote } from 'react-icons/bi';
import { RiBillLine } from 'react-icons/ri';
const linkStyles = {
  textDecoration: 'none',
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSmallScreen] = useMediaQuery('(max-width: 420px)');

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Flex
      as="header"
      align="center"
      p={4}
      width={'100%'}
      height={'100%'}
      bg="#FFFFFF"
      black="white"
      borderBottom={'1px'}
      borderBottomColor={'#E4E4E4'}
    >
        
         <ArrowBackIcon
        width={'36px'}
        h={'36px'}
        borderRadius={'58px'}
        border={'1px'}
        p={'8px'}
        mr={'40px'}
  /> 
   {isSmallScreen ? (
      <IconButton
        ml={'120px'}
        style={linkStyles}
        icon={<ArrowBackIcon />}
        display={{ base: 'block', md: 'none' }}
        onClick={openDrawer}
        aria-label="Open Menu"
        mr={'20px'}
        css={{
            border: 'none', // Remove border
            boxShadow: 'none', // Remove box shadow
            background: 'transparent', // Make the background transparent
            '&:focus': {
              boxShadow: 'none', // Remove box shadow on focus
              border: 'none', // Remove border on focus
            },
          }}
      />
        ) : (
       
        <>
      <Divider
        mr={'40px'}
        border={'1px'}
        color={'#E4E4E4'}
        orientation="vertical"
      />
      <HStack>
        <Image color={'#FF5C00'} src={images.logo} w={'44px'} h={'44px'} />
        <VStack ml={'20px'} align={'flex-start'}>
          <Text
            color={'#19191C'}
            h={'24px'}
            w={'165px'}
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
      
      </>
          )}
      <Flex align="center" ml={'200px'}>
        <HStack>
          <HiHome height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            display={{ base: 'none', md: 'block' }}
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
        <HStack ml={'20px'}>
          <BiNote height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            display={{ base: 'none', md: 'block' }}
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
        <HStack ml={'20px'}>
          <HiOutlineClock height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            display={{ base: 'none', md: 'block' }}
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
        <HStack ml={'20px'}>
          <RiBillLine height={'24px'} width={'24px'} color={'#828487'} />
          <Link
            display={{ base: 'none', md: 'block' }}
            h={'24px'}
            w={'48px'}
            fontWeight={500}
            fontSize={'16px'}
            lineHeight={'24px'}
            color={'#828487'}
            style={linkStyles}
          >
            Bills
          </Link>
        </HStack>
        <Box
          ml={'20px'}
          alignContent={'center'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          w={'144px'}
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
        <Box
          ml={'20px'}
          alignContent={'center'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          w={'182px'}
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
          ml={'20px'}
        />
      </Flex>
      <Drawer placement="left" onClose={closeDrawer} isOpen={isDrawerOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <IconButton
              icon={<CloseIcon />}
              onClick={closeDrawer}
              aria-label="Close Menu"
              css={{
                border: 'none', // Remove border
                boxShadow: 'none', // Remove box shadow
                background: 'transparent', // Make the background transparent
                '&:focus': {
                  boxShadow: 'none', // Remove box shadow on focus
                  border: 'none', // Remove border on focus
                },
              }}
            />
          </DrawerHeader>
          <DrawerBody>
            <HStack>
              <Image px={4} color={'#FF5C00'} src={images.logo}  h={'44px'} />
              <VStack ml={'20px'} align={'flex-start'}>
                <Text
                  color={'#19191C'}
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
                >
                  Coca CoffeeTalk
                </Text>
              </VStack>
            </HStack>
            <HStack py={2} >
              <HiHome height={'24px'} width={'24px'} color={'#828487'} />
              <Link
                display="block"
                py={2}
                onClick={closeDrawer}
                fontWeight={500}
                fontSize={'16px'}
                lineHeight={'24px'}
                color={'#828487'}
                style={linkStyles}
              >
                Home
              </Link>
            </HStack>
            <HStack py={1}>
              <BiNote height={'24px'} width={'24px'} color={'#828487'} />
              <Link
                display="block"
                py={2}
                onClick={closeDrawer}
                fontWeight={500}
                fontSize={'16px'}
                lineHeight={'24px'}
                color={'#828487'}
                style={linkStyles}
              >
                Order
              </Link>
            </HStack>
            <HStack py={1}>
              <HiOutlineClock
                height={'24px'}
                width={'24px'}
                color={'#828487'}
              />
              <Link
                display="block"
                py={2}
                onClick={closeDrawer}
                fontWeight={500}
                fontSize={'16px'}
                lineHeight={'24px'}
                color={'#828487'}
                style={linkStyles}
              >
                History
              </Link>
            </HStack>
            <HStack py={1}>
              <RiBillLine height={'24px'} width={'24px'} color={'#828487'} />
              <Link
                display="block"
                py={2}
                onClick={closeDrawer}
                fontWeight={500}
                fontSize={'16px'}
                lineHeight={'24px'}
                color={'#828487'}
                style={linkStyles}
              >
                Bills
              </Link>
            </HStack>

            <Box
              mt={'20px'}
              onClick={closeDrawer}
              alignContent={'center'}
              justifyContent={'center'} /* Horizontally center the content */
              alignItems={'center'} /* Vertically center the content */
              display={'flex'} /* Make the Box a flex container */
              h={'36px'}
              w={'200px'}
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
            <Box
            w={'200px'}
            onClick={closeDrawer}
              mt={'20px'}
              alignContent={'center'}
              justifyContent={'center'} /* Horizontally center the content */
              alignItems={'center'} /* Vertically center the content */
              display={'flex'} /* Make the Box a flex container */
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
              mt={'20px'}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              h={'44px'}
              w={'44px'}
              ml={'80px'}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
