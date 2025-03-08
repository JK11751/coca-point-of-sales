import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import images from '../../Constants/images';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      padding="24px"
      gap="12px"
      border="1px solid #E4E4E4"
      opacity="0px"
      bg="#FFFFFF"
      color="#828487"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/coffee')}
      >
        <Image
          src={images.coffee}
          alt="beverages"
          width="20px"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Coffee
        </Text>
      </Flex>

      <Flex
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/beverages')}
      >
        <Image
          src={images.beverages}
          alt="beverages"
          width="20px"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Beverages
        </Text>
      </Flex>
      <Flex
   
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/food')}
      >
        <Image
          src={images.food}
          alt="beverages"
          width="20px"
          bgColor="#828487"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Food
        </Text>
      </Flex>

      <Flex
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/appetizer')}
      >
        <Image
          src={images.appetizer}
          alt="beverages"
          width="20px"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Appetizer
        </Text>
      </Flex>
      <Flex
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/bread')}
      >
        <Image
          src={images.bread}
          alt="beverages"
          width="20px"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Bread
        </Text>
      </Flex>
      <Flex
        width="77px"
        height="78px"
        padding="12px 6px 12px 6px"
        gap="8px"
        border-radius="8px 0px 0px 0px"
        opacity=" 0px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        _active={{
          bg: 'linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%)',
          borderRadius: '8px',
          color: '#FFFFFF',
        }}
        onClick={() => navigate('/snack')}
      >
        <Image
          src={images.snack}
          alt="beverages"
          width="20px"
          height="28px"
          top={2}
          left={6}
        />

        <Text fontSize="sm" mt={2}>
          Snack
        </Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
