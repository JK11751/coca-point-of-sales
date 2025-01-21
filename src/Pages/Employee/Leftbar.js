import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'

const Leftbar = () => {
  return (
    <Box
      width="125px"
      height="50vh"
      border="1px solid #E4E4E4"
      
     
    > 
    <VStack pt={4}>
    <Button
        variant="unstyled"
        width="77px"
        height="77px"
       bgGradient="linear-gradient(220.09deg, #F97316 -1.39%, #FFA76A 112.82%)"
        borderRadius="50px"
      ></Button>
       <Button
        variant="unstyled"
        width="77px"
        height="77px"
       bgGradient="linear-gradient(220.09deg, #F97316 -1.39%, #FFA76A 112.82%)"
        borderRadius="50px"
      ></Button>
       <Button
        variant="unstyled"
        width="77px"
        height="77px"
       bgGradient="linear-gradient(220.09deg, #F97316 -1.39%, #FFA76A 112.82%)"
        borderRadius="50px"
      ></Button>
       <Button
        variant="unstyled"
        width="77px"
        height="77px"
       bg="#FFF5EE"
        borderRadius="50px"
      ></Button>

      
      
      </VStack>
    </Box>
  )
}

export default Leftbar