import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import images from '../../Constants/images';

const MenuCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.table(product);

  return (
    <>
      <Box
        onClick={openModal}
        width="219px"
        height="250px"
        bg="#FFFFFF"
        padding="12px 8px 16px 8px"
        gap="12px"
        borderRadius="16px"
      >
        <Image
          src={`${product.image}`}
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
              {product.title}
            </Text>
            <Text
              fontFamily="sans-serif"
              fontSize="16px"
              color="#F97316"
              fontWeight="600"
              lineHeight="24px"
            >
              $ {product.price}
            </Text>
          </VStack>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent height="744px" width="470px">
          <ModalHeader>Add Order</ModalHeader>
          <ModalCloseButton variant="unstyled" />
          <ModalBody>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              variant="unstyled"
              width="full"
              height="106px"
              padding="16px 10px"
              bg="#F8F9FD"
              gap="12px"
              borderBottom="1px solid #E4E4E4"
              borderRadius={0}
            >
              <Image
                w="74px"
                h="74px"
                borderRadius="12px"
                src={product.image}
                alt="title"
              />

              <CardBody>
                <Heading
                  fontFamily="sans-serif"
                  fontSize="16px"
                  fontWeight="600"
                  lineHeight="24px"
                  color="#19191C"
                >
                  {product.title}
                </Heading>

                <Flex justifyContent="space-between" alignItems="center" mt={2}>
                  <Box>
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      lineHeight="15px"
                      fontFamily="sans-serif"
                      color="#9C9C9C"
                    >
                      Price
                    </Text>
                    <Text
                      fontFamily="sans-serif"
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="19px"
                      color="#FF5C00"
                    >
                      $ {product.price}
                    </Text>
                  </Box>

                  <Flex alignItems="center" gap={2}>
                    <Button
                      variant="unstyled"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="#9C9C9C"
                      color="white"
                      size="sm"
                      borderRadius="full"
                      aria-label="Minus"
                    >
                      <Icon as={MinusIcon} />
                    </Button>

                    <Text>1</Text>

                    <Button
                      variant="unstyled"
                      color="white"
                      bg="black"
                      size="sm"
                      borderRadius="full"
                      aria-label="Plus"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={AddIcon} />
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
            <Text
              mt={2}
              fontSize="16px"
              fontWeight="600"
              lineHeight="24px"
              fontFamily="sans-serif"
              color="#19191C"
            >
              Additional
            </Text>
            <Flex mb={10} direction="column" gap={4}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                variant="unstyled"
                width="full"
                height="44px"
                padding="16px 2px"
                bg="#FFFFF"
                borderRadius={0}
              >
                <Image
                  w="44px"
                  h="44px"
                  borderRadius="12px"
                  src={images.card}
                  alt="title"
                />

                <CardBody>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box ml={2}>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        lineHeight="19.6px"
                        fontFamily="sans-serif"
                        color="#19191C"
                      >
                        Title
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="19.6px"
                        fontFamily="sans-serif"
                        color="#19191C"
                      >
                        $ 500
                      </Text>
                    </Box>

                    <Flex alignItems="center" gap={2}>
                      <Button
                        variant="unstyled"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="#9C9C9C"
                        color="white"
                        size="sm"
                        borderRadius="full"
                        aria-label="Minus"
                      >
                        <Icon as={MinusIcon} />
                      </Button>

                      <Text>1</Text>

                      <Button
                        variant="unstyled"
                        color="white"
                        bg="black"
                        size="sm"
                        borderRadius="full"
                        aria-label="Plus"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={AddIcon} />
                      </Button>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              
            </Flex>
            <Divider orientation="horizontal" />
            <Text mt={4}>Add note</Text>
            <Textarea
              mt={2}
              height="142px"
              padding="12px 16px"
              bg="#FFFFFF"
              borderRadius="58px"
              border="1px solid #E4E4E4"
              variant="unstyled"
              placeholder="Type your note here"
              _placeholder={{
                fontFamily: 'sans-serif',
                fontcolor: '#C2C2C2',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
              }}
            />
            <Flex mt={10} justifyContent="space-between" alignItems="stretch">
              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  color="#828487"
                  lineHeight="24px"
                >
                  Total
                </Text>
                <Text
                  ontSize="14px"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  lineHeight="24px"
                  color="#19191C"
                >
                  $ 26.52
                </Text>
              </VStack>
              <Button
                w="205px"
                variant="unstyled"
                borderRadius="58px"
                bg="#FF5C00"
                height="48px"
                color="#FFFFFF"
                padding="12px 24px"
              >
                Add Order
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MenuCard;
