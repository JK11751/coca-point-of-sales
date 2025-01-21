import React from 'react';
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Divider
} from '@chakra-ui/react';
import CustomersTable from './CustomersTable';
import Calendar from './Calendar';
import NewReservation from './NewReservation';

const Reservation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction='column' p="24px">
      <Calendar />
      <CustomersTable />
      <Button
        width="100%"
        mt={16}
        variant="unstyled"
        borderRadius="58px"
        bg="#FF5C00"
        height="48px"
        color="#FFFFFF"
        padding="12px 24px"
        onClick={onOpen}
      >
        Add New Reservation
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="550px">
          <ModalHeader fontWeight='600' fontSize='20px' color='#19191C' >New Reservation</ModalHeader>
          <ModalCloseButton />
          <Divider  />
          <ModalBody  >
            <NewReservation />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Reservation;