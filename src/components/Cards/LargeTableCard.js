import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';

const LargeTableCard = () => {
  return (
    <Box m={4} w="341px" h="170px" borderRadius={16} position="relative">
      <Box
        w="301px"
        h="130px"
        bg="#FFFFFF"
        borderRadius={16}
        border="1px solid #E4E4E4"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="unstyled"
          width="86px"
          height="86px"
          bg="#ECF6FF"
          borderRadius="50px"
        ></Button>
      </Box>

      {/* Top Boxes */}
      <Flex
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        justifyContent="space-between"
        w="236px" // Adjusted width for spacing
        gap="10px" // Added spacing between boxes
      >
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Box
              key={`top-box-${index}`}
              bg="#FFFFFF"
              w="50px"
              h="14px"
              borderRadius={30}
              border="1px solid #E4E4E4"
            ></Box>
          ))}
      </Flex>

      {/* Bottom Boxes */}
      <Flex
        position="absolute"
        bottom="0"
        left="50%"
        transform="translate(-50%, 50%)"
        justifyContent="space-between"
        w="236px" // Adjusted width for spacing
        gap="10px" // Added spacing between boxes
      >
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Box
              key={`bottom-box-${index}`}
              bg="#FFFFFF"
              w="50px"
              h="14px"
              borderRadius={30}
              border="1px solid #E4E4E4"
            ></Box>
          ))}
      </Flex>

      {/* Left Box */}
      <Box
        bg="#FFFFFF"
        w="14px"
        h="50px"
        borderRadius={30}
        border="1px solid #E4E4E4"
        position="absolute"
        left="0"
        top="50%"
        transform="translate(-50%, -50%)"
      ></Box>

      {/* Right Box */}
      <Box
        bg="#FFFFFF"
        w="14px"
        h="50px"
        borderRadius={30}
        border="1px solid #E4E4E4"
        position="absolute"
        right="0"
        top="50%"
        transform="translate(50%, -50%)"
      ></Box>
    </Box>
  );
};

export default LargeTableCard;
