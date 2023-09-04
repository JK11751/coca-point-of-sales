import React from 'react';
import images from '../../Constants/images';
import { Box, Text, Avatar, HStack, VStack } from '@chakra-ui/react';

const LoggedIn = () => {
  return (
    <Box bgImage={images.clockin} bgSize="cover" w="100vw" h="100vh">
      <Box pl={'500px'}  textColor={'white'}>
        <Text
          width={'411px'}
          height="160px"
          fontFamily="Poppins"
          fontSize="160px"
          fontWeight="275"
          lineHeight="160px"
        >
          09:40
        </Text>
        <Text
          width={'487px'}
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="400"
          height="36px"
          pl={'70px'}
        >
          Monday, 06 Mar 2023
        </Text>
      </Box>
      <HStack pl={'600px'} pt={'300px'}>
        <Avatar
          width="80px"
          height="80px"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
          border={'4px'}
        />
        <VStack align={'flex-start'} pl={'20px'}>
          <Text
            width="226px"
            height="42px"
            fontWeight={600}
            fontSize="28px"
            lineHeight="42px"
            color={'white'}
          >
            Coca Coffeetalk
          </Text>
          <Text
            color={'white'}
            fontWeight={600}
            fontSize="18px"
            lineHeight="27px"
            w={'216px'}
            h={'27px'}
          >
            Logged in as, Bean Kean
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default LoggedIn;
