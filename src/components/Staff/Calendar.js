import React, { useState } from 'react';
import {
  Box,
  Select,
  Text,
  Grid,
  VStack,
  Flex,
} from '@chakra-ui/react';


import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    return startOfWeek;
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getWeekDates = () => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(currentWeekStart);
      currentDate.setDate(currentWeekStart.getDate() + i);
      weekDates.push(currentDate);
    }
    return weekDates;
  };

  const weekDates = getWeekDates();

  const handleMonthChange = e => setSelectedMonth(Number(e.target.value));
  const handleYearChange = e => setSelectedYear(Number(e.target.value));

  const handlePreviousWeek = () => {
    const previousWeek = new Date(currentWeekStart);
    previousWeek.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(previousWeek);
    setSelectedMonth(previousWeek.getMonth());
    setSelectedYear(previousWeek.getFullYear());
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeek);
    setSelectedMonth(nextWeek.getMonth());
    setSelectedYear(nextWeek.getFullYear());
  };

  return (
    
      <Box  h="144px">
        <Flex alignItems="center" justifyContent="flex-start" mb={4}>
          <Text
            mr={8}
            fontSize="14px"
            fontFamily="sans-serif"
            lineHeight="19.6px"
            color="#828487"
            fontWeight="400"
          >
            Select Date
          </Text>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ChevronLeftIcon mr={2} onClick={handlePreviousWeek} />
            <Select
              variant="unstyled"
              value={selectedMonth}
              onChange={handleMonthChange}
              width="150px"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </Select>
            <ChevronRightIcon onClick={handleNextWeek} />
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              width="100px"
              variant="unstyled"
              mx={2}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={selectedYear - 5 + i}>
                  {selectedYear - 5 + i}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>

        <Grid
          templateColumns="repeat(8, 1fr)"
          h="64px"
          textAlign="center"
          border="1px solid #E4E4E4"
          borderRadius="16px"
        >
          <VStack
            w="64px"
            borderRight="1px solid #E4E4E4"
            alignItems="center"
            justifyContent="center"
          >
            <CalendarIcon color="#FF5C00" />
          </VStack>
          {weekDates.map((date, index) => (
            <VStack
              key={index}
              bg={date.getMonth() === selectedMonth}
              borderRight={
                index < weekDates.length - 1 ? '1px solid #E4E4E4' : 'none'
              }
              alignItems="center"
              justifyContent="center"
              w="56px"
            >
              <Text
                fontSize="12px"
                fontFamily="sans-serif"
                lineHeight="18px"
                align="center"
                fontWeight="500"
              >
                {daysOfWeek[date.getDay()]}
              </Text>
              <Text
                fontSize="16px"
                fontFamily="sans-serif"
                lineHeight="24px"
                align="center"
                fontWeight="600"
              >
                {date.getDate()}
              </Text>
            </VStack>
          ))}
        </Grid>
      </Box>
      
    
  );
};

export default Calendar;
