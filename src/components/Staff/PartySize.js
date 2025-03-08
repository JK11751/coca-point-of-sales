import React from 'react';
import { Box, Grid, Text, Button } from '@chakra-ui/react';

const PartySize = () => {
  return (
    <Box>
      <Text>Select Party Size</Text>
      <Grid
        templateColumns="repeat(8, 1fr)"
        h="56px"
        textAlign="center"
        border="1px solid #E4E4E4"
        borderRadius="16px"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <Box
            key={i}
            borderRight={i < 7 ? '1px solid #E4E4E4' : 'none'}
            alignItems="center"
             display="flex"
            justifyContent="center"
            w="56px"
            h="56px"
          >
            <Button alignItems="center" justifyContent="center" variant="none">
              {i === 7 ? '8+' : i + 1}
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PartySize;
