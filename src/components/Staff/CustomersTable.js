import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Divider,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import GuestDetail from './GuestDetails'

const CustomersTable = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  const customers = [
    { name: 'Matilda R', time: '08.00AM', table: 'T-11', guests: 8 },
    { name: 'Matilda R', time: '08.00AM', table: 'T-10', guests: 11 },
    { name: 'Matilda R', time: '08.00AM', table: 'T-12', guests: 12 },
  ];


  return (
    <Box bg="#FFFFFF" mt={8} pr={4} pl={4}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>Customer Name</Th>
                <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>Time</Th>
                <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>Table</Th>
                <Th fontWeight='500' fontSize='12px' textColor='#9C9C9C'>Order</Th>
              </Tr>
            </Thead>
            <Tbody>
            {customers.map((customer, index) => (
            <Tr key={index} onClick={() => handleRowClick(customer)}>
              <Td>{customer.name}</Td>
              <Td>{customer.time}</Td>
              <Td>{customer.table}</Td>
              <Td>{customer.guests}</Td>
            </Tr>
          ))}
            </Tbody>
          </Table>
          <Modal isOpen={isModalOpen} onClose={handleModalClose} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth='656px'>
          <ModalHeader textColor='#19191C' fontSize='20px' fontWeight='600'>Guest detail</ModalHeader>
          <ModalCloseButton  />
          <Divider />
          <ModalBody>
            <GuestDetail />
          </ModalBody>
        </ModalContent>
      </Modal>
        </Box>
  )
}

export default CustomersTable