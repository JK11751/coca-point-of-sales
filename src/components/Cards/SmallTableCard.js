import { Box, Button } from '@chakra-ui/react';
import React from 'react';


const SmallTableCard = ({ isSelected, onClick }) => {
  return (
    <Box m={4} w="170px" h="170px"  borderRadius={16} position="relative">
    <Box
      w="130px"
      h="130px"
      bg="#FFFFFF"
      borderRadius={16}
      border={isSelected ? "2px solid #FF5C00" : "1px solid #E4E4E4"}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <Button
        variant="unstyled"
        width="86px"
        height="86px"
        bg="#ECF6FF"
        borderRadius="50px"
      ></Button>
    </Box>

    {/* Top Box */}
    <Box
     bg="#FFFFFF"
      w="50px"
      h="14px"
      borderRadius={30}
      border="1px solid #E4E4E4"
      position="absolute"
      top="0"
      left="50%"
      transform="translate(-50%, -50%)"
    ></Box>

    {/* Bottom Box */}
    <Box
       bg="#FFFFFF"
      w="50px"
      h="14px"
      borderRadius={30}
      border="1px solid #E4E4E4"
      position="absolute"
      bottom="0"
      left="50%"
      transform="translate(-50%, 50%)"
    ></Box>

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
  )
}

export default SmallTableCard