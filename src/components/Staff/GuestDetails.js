import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Textarea,
  Text,
  Grid,
  Tag,
  TagLabel,
  SimpleGrid,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const GuestDetail = () => {
  // const [selectedTag, setSelectedTag] = useState('');

  const tags = [
    'VIP',
    'Birthday',
    'Anniversary',
    'Private Dining',
    'First time',
  ];

  const handleTagClick = tag => {
    // setSelectedTag(tag);
  };

  return (
    <Box p={5}>
      <FormControl mb={4}>
        <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
          Full name
        </FormLabel>
        <Input
          variant="unstyled"
          placeholder="Enter name"
          height="48px"
          padding="12px 16px"
          borderRadius="58px"
          border="1px solid #E4E4E4"
          _placeholder={{
            color: '#C2C2C2',
            fontSize: '16px',
            fontWeight: '400',
          }}
        />
      </FormControl>
      <Flex direction="row" gap={4}>
        <FormControl mb={4}>
          <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
            Email
          </FormLabel>
          <Input
            placeholder="Enter email address"
            height="48px"
            padding="12px 16px"
            borderRadius="58px"
            variant="unstyled"
            border="1px solid #E4E4E4"
            _placeholder={{
              color: '#C2C2C2',
              fontSize: '16px',
              fontWeight: '400',
            }}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
            Phone number
          </FormLabel>
          <Input
            placeholder="Enter phone number"
            height="48px"
            padding="12px 16px"
            borderRadius="58px"
            variant="unstyled"
            border="1px solid #E4E4E4"
            _placeholder={{
              color: '#C2C2C2',
              fontSize: '16px',
              fontWeight: '400',
            }}
          />
        </FormControl>
      </Flex>
      <Text textColor="#828487" fontSize="12px" fontWeight="500" mb={2}>
        Tag
      </Text>
      <Flex wrap="wrap" gap={2} mb={4}>
        {tags.map(tag => (
          <Tag
            key={tag}
            variant="unstyled"
            padding="8px 16px"
            borderRadius="40px"
            border="1px solid #E4E4E4"
            textColor='#19191C'
            fontWeight='400'
            fontSize='14px'
            height="36px"
            onClick={() => handleTagClick(tag)}
            whiteSpace="nowrap"
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Flex>

      <FormControl mb={4}>
        <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
          Visite note
        </FormLabel>
        <Textarea
          placeholder="Write reservation note here..."
          height="90px"
          padding="12px 16px"
          borderRadius="58px"
          variant="unstyled"
          border="1px solid #E4E4E4"
          _placeholder={{
            color: '#C2C2C2',
            fontSize: '16px',
            fontWeight: '400',
          }}
        />
      </FormControl>
      <Flex gap={4}>
        <FormControl flex="1">
          <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
            Taken by (Initials)
          </FormLabel>
          <Input
            placeholder="Taken by"
            height="48px"
            padding="12px 16px"
            borderRadius="58px"
            variant="unstyled"
            border="1px solid #E4E4E4"
            _placeholder={{
              color: '#C2C2C2',
              fontSize: '16px',
              fontWeight: '400',
            }}
          />
        </FormControl>
        <FormControl flex="1">
          <FormLabel textColor="#828487" fontSize="12px" fontWeight="500">
            Pager number
          </FormLabel>
          <Input
            placeholder="Enter pager number"
            height="48px"
            padding="12px 16px"
            variant="unstyled"
            borderRadius="58px"
            border="1px solid #E4E4E4"
            _placeholder={{
              color: '#C2C2C2',
              fontSize: '16px',
              fontWeight: '400',
            }}
          />
        </FormControl>
      </Flex>
      <Flex mt={6} gap={4}>
        <Button
          flex="1"
          height="48px"
          padding="12px"
          borderRadius="58px"
          variant="unstyled"
          bg="#FFFFFF"
          border="1px solid #FF5C00"
          textColor="#FF5C00"
        >
          Cancel
        </Button>
        <Button
          flex="1"
          height="48px"
          padding="12px"
          borderRadius="58px"
          variant="unstyled"
          bg="#FF5C00"
          border="1px solid #FF5C00"
          textColor="#FFFFFF"
        >
          Add to reservation
        </Button>
      </Flex>
    </Box>
  );
};

export default GuestDetail;
