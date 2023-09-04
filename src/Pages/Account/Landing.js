import React from 'react';
import images from '../../Constants/images';
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Avatar, WrapItem, Wrap } from '@chakra-ui/react';

const Landing = () => {
  return (
    <Box bgImage={images.clockin} bgSize="cover" w="100vw" h="100vh">
      <Wrap justify="center" paddingTop={'200px'} spacing={'40px'}>
        <WrapItem>
          <VStack>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              h={'100px'}
              w={'100px'}
              border={'4px'}
            />
            <Text color={'white'}>Name</Text>
          </VStack>
        </WrapItem>
      </Wrap>
      <VStack mt={'40px'}>
        <HStack justify={'center'}>
          <ButtonGroup spacing={'40px'}>
            <Button
              textColor={'#FFF5EE'}
              bgColor={'#FF5C00'}
              w={'180px'}
              h={'50px'}
              borderRadius={'60px'}
              padding={'12px'}
            >
              Clock in
            </Button>
            <Button
              textColor={'#FF5C00'}
              bgColor={'#FFF5EE'}
              w={'180px'}
              h={'50px'}
              borderRadius={'60px'}
              padding={'12px'}
            >
              Clock out
            </Button>
          </ButtonGroup>
        </HStack>
        <Button
          w={'360px'}
          h={'50px'}
          textColor={'#FF5C00'}
          borderRadius={'60px'}
          border={'1px'}
          padding={'12px'}
          mt={'40px'}
          fontWeight={600}
          fontSize={'16px'}
          lineHeight={'24px'}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Landing;
