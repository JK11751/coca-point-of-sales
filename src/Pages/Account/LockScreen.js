import React, { useState } from 'react';
import images from '../../Constants/images';
import {
  Avatar,
  WrapItem,
  Wrap,
  VStack,
  Text,
  Link,
  HStack,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Input, SimpleGrid } from '@chakra-ui/react';

const LockScreen = () => {
  const [password, setPassword] = useState('');

  const handleKeyPress = key => {
    if (key === 'C') {
      setPassword('');
    } else if (key === 'X') {
      setPassword(password.slice(0, -1));
    } else {
      setPassword(password + key);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Box bgImage={images.clockin} bgSize="cover" w="100vw" h="100%">
      <Wrap justify="center" paddingTop={'150px'} spacing={'40px'}>
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
      <Container centerContent>
        <Box mt={8} p={4} borderRadius="lg">
          <Input
            mb={4}
            fontWeight="600"
            fontSize="28px"
            lineHeight="42px"
            textAlign="center"
            width="250px"
            height="42px"
            textColor={'white'}
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter your PIN"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
          <SimpleGrid columns={3} spacing={2}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'X'].map(
              key => (
                <Button
                  key={key}
                  borderRadius={'160px'}
                  textColor={'white'}
                  border={'1px'}
                  bgColor={'transparent'}
                  size="lg"
                  onClick={() => handleKeyPress(key)}
                  w="100%"
                  css={{
                    boxShadow: 'none', // Remove box shadow
                    background: 'transparent', // Make the background transparent
                    '&:focus': {
                      boxShadow: 'none', // Remove box shadow on focus
                      outline: 'none', // Remove the focus outline
                    },
                    '&:hover': {
                      background: 'transparent',
                    },
                    '&:active': {
                      background: 'transparent',
                    },
                  }}
                >
                  {key}
                </Button>
              )
            )}
            <Button
              key={<ViewIcon />}
              borderRadius={'160px'}
              textColor={'white'}
              border={'1px'}
              bgColor={'transparent'}
              size="lg"
              onClick={togglePasswordVisibility}
              w="100%"
              css={{
                boxShadow: 'none', // Remove box shadow
                background: 'transparent', // Make the background transparent
                '&:focus': {
                  boxShadow: 'none', // Remove box shadow on focus
                  outline: 'none', // Remove the focus outline
                },
                '&:hover': {
                  background: 'transparent', // Prevent background color change on hover
                },
                '&:active': {
                  background: 'transparent', // Prevent background color change on click
                },
              }}
            >
              {passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </SimpleGrid>
          <Button
            w={'260px'}
            h={'34px'}
            bgColor={'#FF5C00'}
            borderRadius={'60px'}
            textColor={'white'}
            padding={'12px'}
            mt={'40px'}
            fontWeight={600}
            fontSize={'16px'}
            lineHeight={'24px'}
          >
            Login
          </Button>
          <HStack mt={'20px'} justify={'center'} textColor={'white'}>
            <Link>Clock in</Link>
            <Text>/</Text>
            <Link>Clock in</Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default LockScreen;
