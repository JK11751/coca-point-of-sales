import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import images from './images';

const MenuCard = () => {
  return (
    <Box
      width="219px"
      height="250px"
      bg='#FFFFFF'
      padding="12px 8px 16px 8px"
      gap="12px"
      borderRadius="16px"
    >
      <Image
        src={images.card}
        alt="card"
        width="203px"
        height="158px"
        borderRadius="12px"
      />
      <Box width="203px" height="52px" padding="0px 8px 0px 8px" gap="4px">
        <VStack>
          <Text
            fontFamily="sans-serif"
            fontSize="16px"
            color="#19191C"
            fontWeight="600"
            lineHeight="24px"
          >
            Steak sapi bakar
          </Text>
          <Text
            fontFamily="sans-serif"
            fontSize="16px"
            color="#F97316"
            fontWeight="600"
            lineHeight="24px"
          >
            $ 25.12
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
export default MenuCard;
