import React, { useState } from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Grid,
    Input,
    HStack,
    Divider,
  } from "@chakra-ui/react";
  import {  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,  } from "@chakra-ui/react";
  
  import { RiVisaLine } from "react-icons/ri";
  import { FaCcMastercard  } from "react-icons/fa";
  import { FaGift  } from "react-icons/fa";
  import { HiOutlineCash  } from "react-icons/hi";
import OrderConfirmation from './OrderConfirmation';
  
  const OrderPayment = () => {
    const [isTipModalOpen, setIsTipModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleTipModalOpen = () => setIsTipModalOpen(true);
    const handleTipModalClose = () => setIsTipModalOpen(false);
  

    return (
      <Box  >
        <Box bg='#F8F9FD'  p='16px' borderRadius="12px" mb={4}>
          <Flex  justify="space-between" mb={2}>
            <Text fontWeight='400' textColor='#19191C' fontSize='16px' >Tip Amount</Text>
            <Text textColor='#19191C' fontWeight='600' fontSize='16px' >$8.12</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontWeight='400' textColor='#19191C' fontSize='16px'>Total Amount</Text>
            <Text fontWeight='600' textColor='#F97316' fontSize='20px'  >
              $64.00
            </Text>
          </Flex>
        </Box>
  
      
        <Box mb='16px' >
          <Text fontWeight='600' textColor='#19191C' fontSize='16px' mb='16px'>
            Payment method
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<HiOutlineCash color="#55E466" />} width='100px' height='86px' border='1px solid #E4E4E4' borderRadius='16px' variant="none">
              Cash
            </Button>
            <Button leftIcon={<FaCcMastercard color="#F79E1B" />} width='100px' height='86px' border='1px solid #E4E4E4' borderRadius='16px' variant="none">
             
            </Button>
            <Button leftIcon={<RiVisaLine color="#273991" />}width='100px' height='86px' border='1px solid #E4E4E4' borderRadius='16px' variant="none">
            
            </Button>
            <Button leftIcon={<FaGift color="#B71C1C" />} width='100px' height='86px' border='1px solid #E4E4E4' borderRadius='16px' variant="none">
              Gift
            </Button>
          </HStack>
        </Box>
  
       
        <Box mb={6}>
          <Text fontWeight='600' textColor='#19191C' fontSize='16px'  mb={2}>Input amount</Text>
          <Input textAlign="center" placeholder="Input amount" variant="unstyled" bg='#E4E4E4' height='60px' width='470px' borderRadius='58px' />
        </Box>
  
       
        <Grid templateColumns="repeat(4, 1fr)" gap={2} mb={6}>
          {["1", "2", "3", "10","4", "5", "6", "20", "7", "8", "9","✖", "C", "0", ".", "Add"].map((item) => (
            <Button variant='none' key={item} width='100px' h='60px' bg='#F8F9FD' borderRadius='160px'>
              {item}
            </Button>
          ))}
        </Grid>
  
        
       
          <HStack spacing={4}>
            <Button textColor='#FFFFFF' bg="#19191C" width='110px' height='86px' borderRadius='16px' variant='none' onClick={handleTipModalOpen}>Tip amount</Button>
            <Button textColor='#FFFFFF' bg="#19191C" width='110px' height='86px' borderRadius='16px' variant='none'>Gift receipt</Button>
            <Button textColor='#FFFFFF' bg="#19191C" width='110px' height='86px' borderRadius='16px' variant='none'>Email</Button>
            <Button textColor='#FFFFFF' bg="#19191C" width='110px' height='86px' borderRadius='16px' variant='none'  onClick={handleModalOpen} >Done</Button>
          </HStack>
         
          <Modal isOpen={isModalOpen} onClose={handleModalClose} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth='704px'>
          <ModalBody>
          <OrderConfirmation />
           
          </ModalBody>
        </ModalContent>
      </Modal>


      <Modal isOpen={isTipModalOpen} onClose={handleTipModalClose} isCentered>
          <ModalOverlay />
          <ModalContent maxWidth='470px'>
            <ModalHeader>Tip Amount</ModalHeader>   
            <ModalCloseButton />
            <Divider />
            <ModalBody>
            <Input mb={8} textAlign="center" fontWeight='500' placeholder="Input amount" variant="unstyled" bg='#FFFFFF' height='60px' width='420px' borderRadius='12px' border='1px solid #E4E4E4' />
             <HStack spacing="4" flex={1}>
                       <Button width='200px' textColor='#FF5C00' bg='#FFFFFF' borderRadius='58px' variant="unstyled" border='1px solid #FF5C00'>
                         Cancel
                       </Button>
                       <Button width='200px' textColor='#FFFFFF' bg='#FF5C00' borderRadius='58px' variant="unstyled" border='1px solid #FF5C00' >Confirm</Button>
                     </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
         
      </Box>
    );
  };
  
  export default OrderPayment;
  