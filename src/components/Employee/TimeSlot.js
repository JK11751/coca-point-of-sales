import React, { useState } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const TimeSlot = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    '09:00 AM',
    '09:15 AM',
    '11:00 AM',
    '12:45 PM',
    '01:00 PM',
    '01:15 PM',
    '02:45 PM',
    '03:00 PM',
    '05:15 PM',
    '06:00 PM',
    '07:15 PM',
    '07:45 PM',
  ];

  const handleSelect = time => {
    setSelectedTime(time);
  };

  return (
    <Box >
      <Text  mb={2}
      fontSize="14px"
      fontFamily="sans-serif"
      lineHeight="19.6px"
      color="#828487"
      fontWeight="400"
      
      >
        Time slot available
      </Text>
      <Box border="1px solid #E4E4E4" borderRadius="16px" overflow="hidden">
        <Grid
          templateColumns="repeat(4, 1fr)"
          templateRows={`repeat(${Math.ceil(times.length / 4)}, 1fr)`}
          gap={0}
        >
          {times.map((time, index) => {
            const [hour, period] = time.split(' ');
            return (
              <GridItem
                key={index}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                h="56px"
                cursor="pointer"
                onClick={() => handleSelect(time)}
                bg={selectedTime === time ? '#FFF5EE' : 'transparent'}
                color={selectedTime === time ? '#FF5C00' : 'inherit'}
                borderRight={
                  (index + 1) % 4 === 0 ? 'none' : '1px solid #E4E4E4'
                }
                borderBottom={
                  index >= times.length - 4 ? 'none' : '1px solid #E4E4E4'
                }
              >
                <Text fontSize="16px" fontWeight="600">
                  {hour}
                </Text>
                <Text
                  fontSize="sm"
                  color={selectedTime === time ? '#FF5C00' : '#9C9C9C'}
                >
                  {period}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default TimeSlot;
