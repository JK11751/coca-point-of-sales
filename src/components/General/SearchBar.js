import React from 'react';
import { Flex, Image, Input } from '@chakra-ui/react';
import images from '../../Constants/images';

const SearchBar = () => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      padding="4px 12px"
      gap={2}
      bg="#FFFFFF"
      borderRadius="8px"
      height="60px"
    >
      <Image src={images.search} alt="search" width={17} height={17} />
      <Input
        type="text"
        placeholder="Search menu..."
        variant="unstyled"
        height="100%" 
        fontSize="14px"
        _placeholder={{
          color: '#C2C2C2',
          fontFamily: 'Poppins',
          fontWeight: '400',
        }}
      />
    </Flex>
  );
};

export default SearchBar;
