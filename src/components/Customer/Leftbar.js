import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
} from '@chakra-ui/react';
import {
  Box,
  Image,
  Input,
  Text,
  VStack,
  ButtonGroup,
  Divider,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import images from '../../Constants/images';
import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Leftbar = ({ setIsTableDashboardVisible }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAddNoteModal = () => setIsAddNoteModalOpen(true);
  const closeAddNoteModal = () => setIsAddNoteModalOpen(false);
  
  const handleSelectTableClick = () => {
    setIsTableDashboardVisible(true);
  };

  return (
    <Box
      padding="24px"
      bg="#FFFFFF"
      borderLeft="1px solid #E4E4E4"
    >
      <ButtonGroup
        variant="unstyled"
        bg="#F8F9FD"
        padding="4px"
        mb={4}
        borderRadius="80px"
      >
        <Button
          width="152px"
          textColor="#19191C"
          padding="8px 16px"
          bg="#FFFFFF"
          gap="10px"
          borderRadius="40px"
        >
          Buy
        </Button>
        <Button
          width="152px"
          textColor="#19191C"
          height="36px"
          padding="8px 16px"
          gap="10px"
          borderRadius="40px "
        >
          Reservation
        </Button>
      </ButtonGroup>
      <Box>
        <VStack h="218px">
          <Text
            w="full"
            fontSize="20px"
            fontWeight="600"
            lineHeight="30px"
            textAlign="left"
            color="#19191C"
          >
            Customer Information
          </Text>
          <Input
            variant="unstyled"
            height="48px"
            padding="12px 16px"
            borderRadius="58px"
            border="1px solid #E4E4E4"
            placeholder="customer name"
          />
          <Button
            onClick={handleSelectTableClick}
            width="full"
            variant="unstyled"
            height="48px"
            borderRadius="58px"
            border="1px solid #E4E4E4"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="12px 16px"
            
          >
            <Text>Select table</Text>
            <BiChevronRight />
          </Button>

          <Button
            onClick={openAddNoteModal}
            width="full"
            variant="unstyled"
            borderRadius="58px"
            bg="#FFF5EE"
            height="48px"
            color="#FF5C00"
            padding="12px 24px"
          >
            Add Note
          </Button>
        </VStack>
      </Box>
      <Divider width="full" mb={4} orientation="horizontal" />
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize="20px"
          color="#19191C"
          fontWeight="600"
          lineHeight="30px"
        >
          Order Details
        </Text>
        <Flex direction="column">
          <Card
            direction={{ base: 'column', sm: 'row' }}
            variant="unstyled"
            width="full"
            height="106px"
            padding="16px 2px"
            bg="#FFFFFF"
            gap="12px"
            borderBottom="1px solid #E4E4E4"
            borderRadius={0}
          >
            <Image
              w="74px"
              h="74px"
              borderRadius="12px"
              src={images.card}
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
                Title name
              </Heading>

              <Flex justifyContent="space-between" alignItems="center" mt={2}>
                <Box>
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="15.6px"
                    fontFamily="sans-serif"
                    color="#9C9C9C"
                  >
                    Price
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight="24px"
                    color="#FF5C00"
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

          <Card
            direction={{ base: 'column', sm: 'row' }}
            variant="unstyled"
            width="full"
            height="106px"
            padding="16px 2px"
            bg="#FFFFFF"
            gap="12px"
            borderBottom="1px solid #E4E4E4"
            borderRadius={0}
          >
            <Image
              w="74px"
              h="74px"
              borderRadius="12px"
              src={images.card}
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
                Title name
              </Heading>

              <Flex justifyContent="space-between" alignItems="center" mt={2}>
                <Box>
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="15.6px"
                    fontFamily="sans-serif"
                    color="#9C9C9C"
                  >
                    Price
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight="24px"
                    color="#FF5C00"
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
        <Box height="236px" padding="24px">
          <Flex justifyContent="space-between" alignItems="stretch">
            <VStack spacing={2} align="flex-start" mb={4}>
              <Text>Sub Total</Text>
              <Text>Tax (10%)</Text>
            </VStack>
            <VStack>
              <Text>$ 00.00</Text>
              <Text>$ 00.00</Text>
            </VStack>
          </Flex>
          <Flex justifyContent="space-between" alignItems="stretch">
            <Text>Total</Text>
            <Text>$ 00.00</Text>
          </Flex>

          <Button
            onClick={openModal}
            mt={4}
            width="full"
            variant="unstyled"
            borderRadius="58px"
            bg="#FF5C00"
            height="48px"
            color="#FFFFFF"
            padding="12px 24px"
          >
            Pay Now
          </Button>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent height="744px" width="470px">
          <ModalHeader>Add Order</ModalHeader>
          <ModalCloseButton />
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
                src={images.card}
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
                  Title name
                </Heading>

                <Flex justifyContent="space-between" alignItems="center" mt={2}>
                  <Box>
                    <Text
                      fontSize="12px"
                      fontWeight="400"
                      lineHeight="15.6px"
                      fontFamily="sans-serif"
                      color="#9C9C9C"
                    >
                      Price
                    </Text>
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="24px"
                      color="#FF5C00"
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
      <Modal isOpen={isAddNoteModalOpen} onClose={closeAddNoteModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider w="full" orientation="horizontal" />
            <Text mt={2}>Add note</Text>
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
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={closeAddNoteModal}
              w="205px"
              variant="unstyled"
              borderRadius="58px"
              border="1px solid #FF5C00"
              bg="#FFFFF"
              height="48px"
              color="#FF5C00"
              padding="12px 24px"
            >
              Cancel
            </Button>
            <Button
              ml={4}
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Leftbar;
