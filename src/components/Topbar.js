import React from 'react';
import images from '../Constants/images';
import { Box, Flex, Input, Image, Button, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <Box
      bg="#FFFFFF"
      color="#E4E4E4"
      border="1px solid #E4E4E4"
       mt="78px"
      
    >
      <Flex
        
        color="#828487"
        fontSize="12px"
        fontWeight="500"
        lineHeight="18px"
        height="34px"
        borderBottom="1px solid #E4E4E4"
        padding=" 8px 16px 8px 16px"
        gap="10px"
      >
        <Link> Dashboard/food</Link>
      </Flex>
      <Flex
        alignItems="center"
        bg="#FFFFFF"
        color="#E4E4E4"
        justifyContent="space-between"
        width="100%" // Take up the full width of the TopBar
        height="68px"
        padding="0px 24px 0px 0px"
        gap="24px"
      >
        <Flex
          alignItems="center"
        
          h="68px"
          flex="1"
          padding="22px 24px 22px 24px"
          gap={2}
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
        <Divider
          orientation="vertical"
          h="100%" // Make it take full height of the container
        />

        <Flex alignItems="center" width="430px" height="36px" gap={8}>
          <Button
            h="36px"
            variant='unstyled'
            textColor="#19191C"
            fontSize="14px"
            fontWeight="400"
            lineHeight="19.6px"
            border="1px"
            borderColor="#E4E4E4"
            gap="10px"
            padding="8px 16px"
            borderRadius="40px"
            display="flex"
                    alignItems="center"
                    justifyContent="center"
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
            All
          </Button>
          <Button
            h="36px"
            variant='unstyled'
            textColor="#19191C"
            fontSize="14px"
            fontWeight="400"
            lineHeight="19.6px"
            border="1px"
            borderColor="#E4E4E4"
            gap="10px"
            padding="8px 16px"
            borderRadius="40px"
            display="flex"
                    alignItems="center"
                    justifyContent="center"
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
            Chicken
          </Button>
          <Button
            h="36px"
          variant='unstyled'
            textColor="#19191C"
            fontSize="14px"
            fontWeight="400"
            lineHeight="19.6px"
            border="1px"
            borderColor="#E4E4E4"
            gap="10px"
            padding="8px 16px"
            borderRadius="40px"
            display="flex"
                    alignItems="center"
                    justifyContent="center"
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
            Seafood
          </Button>
          <Button
            h="36px"
          variant='unstyled'
            textColor="#19191C"
            fontSize="14px"
            fontWeight="400"
            lineHeight="19.6px"
            border="1px"
            borderColor="#E4E4E4"
            gap="10px"
            padding="8px 16px"
            borderRadius="40px"
            display="flex"
                    alignItems="center"
                    justifyContent="center"
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
            Pasta
          </Button>
          <Button
            h="36px"
            variant='unstyled'
            textColor="#19191C"
            fontSize="14px"
            fontWeight="400"
            lineHeight="19.6px"
            border="1px"
            borderColor="#E4E4E4"
            gap="10px"
            padding="8px 16px"
            borderRadius="40px"
            display="flex"
                    alignItems="center"
                    justifyContent="center"
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
            Rice bowl
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;
