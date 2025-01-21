import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const CustomersTable = () => {
  return (
    <TableContainer bg="#FFFFFF" mt={8} pr={4} pl={4}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer Name</Th>
                <Th>Time</Th>
                <Th>Table</Th>
                <Th>Order</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Matilda R</Td>
                <Td>08.00AM</Td>
                <Td>T-11</Td>
                <Td>12</Td>
              </Tr>
              <Tr>
                <Td>Matilda R</Td>
                <Td>08.00AM</Td>
                <Td>T-11</Td>
                <Td>12</Td>
              </Tr>
              <Tr>
                <Td>Matilda R</Td>
                <Td>08.00AM</Td>
                <Td>T-11</Td>
                <Td>12</Td>
              </Tr>
              <Tr>
                <Td>Matilda R</Td>
                <Td>08.00AM</Td>
                <Td>T-11</Td>
                <Td>12</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
  )
}

export default CustomersTable