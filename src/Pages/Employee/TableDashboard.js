import {
  Box,
  SimpleGrid,
  Flex,
  Button,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SmallTableCard from '../../Constants/SmallTableCard';
import LargeTableCard from '../../Constants/LargeTableCard';

const TableDashboard = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const cards = [
    { id: 1, type: 'small' },
    { id: 2, type: 'small' },
    { id: 3, type: 'small' },
    { id: 4, type: 'small' },
    { id: 5, type: 'small' },
    { id: 6, type: 'large' },
    { id: 7, type: 'large' },
    { id: 8, type: 'large' },
    { id: 9, type: 'large' },
    { id: 10, type: 'small' },
    { id: 11, type: 'small' },
    { id: 12, type: 'large' },
    { id: 13, type: 'large' },
    { id: 14, type: 'large' },
    { id: 15, type: 'small' },
    { id: 16, type: 'small' },
    { id: 17, type: 'small' },
    { id: 18, type: 'small' },
    { id: 19, type: 'small' },
    { id: 20, type: 'small' },
    { id: 21, type: 'small' },
    { id: 22, type: 'large' },
    { id: 23, type: 'large' },
    { id: 24, type: 'large' },
    { id: 25, type: 'large' },
    { id: 26, type: 'small' },
    { id: 27, type: 'small' },
    { id: 28, type: 'large' },
    { id: 29, type: 'large' },
    { id: 30, type: 'large' },
    { id: 31, type: 'small' },
    { id: 32, type: 'small' },
  ];

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const renderCards = (cards) => {
    const rows = [];
    let currentRow = [];
    let largeCount = 0;
    let smallCount = 0;

    cards.forEach((card, index) => {
      if (card.type === 'large') {
        largeCount++;
      } else {
        smallCount++;
      }

      currentRow.push(card);

      if (
        smallCount === 4 ||
        (largeCount === 2 && smallCount === 2) ||
        (largeCount === 3 && smallCount === 1) ||
        (largeCount === 1 && smallCount === 3)
      ) {
        rows.push(currentRow);
        currentRow = [];
        largeCount = 0;
        smallCount = 0;
      }

      if (index === cards.length - 1 && currentRow.length > 0) {
        rows.push(currentRow);
      }
    });

    return rows.map((row, rowIndex) => {
      const isMixedRow =
        row.some((card) => card.type === 'large') &&
        row.some((card) => card.type === 'small');
      const columnTemplate = isMixedRow
        ? 'repeat(4, 1fr)'
        : 'repeat(4, 1fr)';

      return (
        <SimpleGrid
          key={rowIndex}
          columns={{
            base: 1,
            md: row.some((card) => card.type === 'large') ? 4 : 4,
          }}
          spacing={4}
          mb={4}
          gridTemplateColumns={{
            base: '1fr',
            md: columnTemplate,
          }}
        >
          {row.map((card) =>
            card.type === 'small' ? (
              <SmallTableCard
                key={card.id}
                isSelected={selectedCardId === card.id}
                onClick={() => handleCardClick(card.id)}
              />
            ) : (
              <LargeTableCard key={card.id} />
            )
          )}
        </SimpleGrid>
      );
    });
  };

  return (
    <Flex  top="180px">
    
      <Box flex="1" p={4} >
        {renderCards(cards)}
      </Box>
      
      <Box
        width="125px"
        border="1px solid #E4E4E4"
        top="180px"
        bg="white"
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

      
    </Flex>
  );
};

export default TableDashboard;
