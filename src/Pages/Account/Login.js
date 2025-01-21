import React from 'react';
import {
  Box,
  FormControl,
  HStack,
  FormLabel,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Button,
  VStack,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import images from '../../Constants/images';
import { FaRegUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box bgImage={images.login} bgSize="cover" w="100vw" h="100vh" >
      <Box
        bgColor="#FFFFFF"
        width="35vw"
        height="90vh"
        top="30px"
        left="40px"
        bottom="30px"
        borderRadius="16px"
        paddingTop="20px"
        position="absolute"
      >
        <HStack paddingLeft={'200px'} boxShadow="sm" paddingBottom={'10px'} >
          <Image
            color={'#FF5C00'}
            src={images.logo}
            w={'46.46px'}
            h={'47.45px'}
          />
          <Text
            color={'#19191C'}
            h={'25px'}
            w={'83px'}
            fontWeight={600}
            fontSize={'32px'}
            lineHeight={'40px'}
          >
            Coca
          </Text>
        </HStack>
        <VStack paddingTop={'40px'} paddingLeft={'40px'} paddingRight={'40px'} >
          <Text
            fontFamily="sans-serif"
            fontWeight={600}
            fontSize={28}
            opacity={'0.999'}
            lineHeight={'42px'}
            align={'center'}
          >
            Login form
          </Text>
          <Text
          opacity={'0.5'}
           fontFamily="sans-serif"
            fontWeight={400}
            fontSize={'16px'}
            lineHeight={'24px'}
            align={'center'}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </Text>
          <FormControl paddingTop={30}>
            <FormLabel fontWeight={500} fontSize={'12px'} lineHeight={'18px'} opacity={'0.5'}>
              Username
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaRegUser color="gray.300" />
              </InputLeftElement>
              <Input
              opacity={'0.5'}
                w={'443px'}
                border={'1px'}
                borderRadius={'58px'}
                fontWeight={400}
                fontSize={'16px'}
                lineHeight={'24px'}
                type="text"
                placeholder="Enter username"
              />
            </InputGroup>
          </FormControl>
          <FormControl marginTop={'10px'}>
            <FormLabel fontWeight={500} fontSize={'12px'} lineHeight={'18px'} opacity={'0.5'}>
              Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="gray.300" />
              </InputLeftElement>
              <Input
                w={'443px'}
                border={'1px'}
                opacity={'0.5'}
                borderRadius={'58px'}
                fontWeight={400}
                fontSize={'16px'}
                lineHeight={'24px'}
                type="password"
                placeholder="Enter password"
              />
            </InputGroup>
          </FormControl>
          <Link
            marginTop={'10px'}
            alignSelf={'flex-start'}
            fontWeight={600}
            fontSize={'14px'}
            lineHeight={'20px'}
            color={'#FF5C00'}
          >
            Forgort password?
          </Link>
          <Button
           onClick={() => navigate('/dashboard')}
            marginTop={'10px'}
            marginBottom={'30px'}
            textColor={'white'}
            borderRadius={'60px'}
            bgColor={'#FF5C00'}
            width="400px"
            height="48px"
          >
           Login
          </Button>
          <Text
            fontWeight={400}
            fontSize={'16px'}
            lineHeight={'24px'}
            align={'center'}
            opacity={'0.5'}
          >
            End User Agreement
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
