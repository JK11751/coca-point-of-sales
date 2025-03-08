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
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import OrderPayment from '../Customer/OrderPayment';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  Box,
  Image,
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
import {
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  MinusIcon,
} from '@chakra-ui/icons';
import images from '../../Constants/images';
import { BiChevronRight } from 'react-icons/bi';
//import { useNavigate } from 'react-router-dom';
import ManageCustomer from '../Staff/ManageCustomer';

const Leftbar = ({ setIsTableDashboardVisible }) => {
  //const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
 
  const openAddNoteModal = () => setIsAddNoteModalOpen(true);
  const closeAddNoteModal = () => setIsAddNoteModalOpen(false);

  const handleSelectTableClick = () => {
    setIsTableDashboardVisible(true);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding="24px" bg="#FFFFFF" borderLeft="1px solid #E4E4E4">
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
          <Box
            width="full"
            variant="unstyled"
            height="48px"
            padding="12px 16px"
            borderRadius="58px"
            border="1px solid #E4E4E4"
            cursor="pointer"
            onClick={onOpen}
          >
            <Text>Customer name</Text>
          </Box>
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
           
            mt={4}
            width="full"
            variant="unstyled"
            borderRadius="58px"
            bg="#FF5C00"
            height="48px"
            color="#FFFFFF"
            padding="12px 24px"
            onClick={openDrawer}
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="1120px">
          <ModalHeader>Manage customer</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <ManageCustomer />
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="space-between" alignItems="center" w="full">
              <Flex
                height="48px"
                color="#FFFFFF"
                alignItems="center"
                justifyContent="center"
                gap="0"
                width="251px"
                borderRadius="40px"
                border="1px solid #E4E4E4"
                overflow="hidden"
              >
                <Button
                  leftIcon={<ArrowBackIcon />}
                  fontWeight="400"
                  fontSize="14px"
                  textColor="#9C9C9C"
                  height="48px"
                  width="115px"
                  borderRight="1px solid #E4E4E4"
                  variant="unstyled"
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Previous
                </Button>
                <Button
                  fontWeight="400"
                  fontSize="14px"
                  textColor="#9C9C9C"
                  height="48px"
                  width="48px"
                  borderRight="1px solid #E4E4E4"
                  cursor="unset"
                  alignItems="center"
                  variant="unstyled"
                >
                  1
                </Button>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  height="48px"
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="86px"
                  fontWeight="400"
                  fontSize="14px"
                  textColor="#9C9C9C"
                  variant="unstyled"
                >
                  Next
                </Button>
              </Flex>

             
              <HStack spacing="4">
                <Button 
                w='183px'
                textColor="#FF5C00"
                  bg="#FFFFFF"
                  borderRadius="58px"
                  variant="unstyled"
                  border="1px solid #FF5C00"
                   onClick={onClose}>
                  Close
                </Button>
                <Button 
                 w='183px'
                textColor="#FFFFFF"
                  bg="#FF5C00"
                  borderRadius="58px"
                  variant="unstyled"
                  border="1px solid #FF5C00">New Customer</Button>
              </HStack>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
        <DrawerOverlay />
        <DrawerContent maxW="536px">
          <DrawerCloseButton />

          <DrawerHeader>Order Payment</DrawerHeader>
          <Text ml={6} fontWeight="400" textColor="#19191C" fontSize="16px">
            Order #102
          </Text>

          <Divider mt={4} />

          <DrawerBody>
            <OrderPayment />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Leftbar;
