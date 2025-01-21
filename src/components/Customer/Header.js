import React from 'react';
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
  Divider
} from '@chakra-ui/react';
import {  ArrowBackIcon } from '@chakra-ui/icons';

import { HiHome, HiOutlineClock } from 'react-icons/hi';
import { BiNote } from 'react-icons/bi';
import { RiBillLine } from 'react-icons/ri';
const linkStyles = {
  textDecoration: 'none',
};

const Header = ({ toggleSidebar }) => {
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
          >
            Bills
          </Link>
        </HStack>
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
    </Flex>
  );
};

export default Header;
