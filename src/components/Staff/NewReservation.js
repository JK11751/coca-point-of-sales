import { Box, Flex, Button, VStack } from '@chakra-ui/react';
import TimeSlot from './TimeSlot';
import PartySize from './PartySize';
import Calendar from './Calendar';

const NewReservation = () => {
  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <PartySize />

        <Calendar />

        <TimeSlot />
      </VStack>

      <Flex mt={4} justify="space-between" gap={4}>
        <Button
          textColor="#FF5C00"
          bg="#FFFFFF"
          variant="none"
          border='1px solid #FF5C00'
          borderRadius="58px"
          padding="12px"
          flex="1"
        >
        Cancel
        </Button>
        <Button
          bg="#FF5C00"
          textColor="#FFFFFF"
          variant="none"
          borderRadius="58px"
          padding="12px"
           flex="1"
        >
            Continue
        </Button>
      </Flex>
    </Box>
  );
};

export default NewReservation;
