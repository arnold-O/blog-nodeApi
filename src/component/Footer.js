import React from 'react';
import { Box,  Center,  Flex,  HStack,  SimpleGrid, Text,  } from "@chakra-ui/react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";



export default function Footer() {
  return (
    <>
    <SimpleGrid columns={4} spacing={4} mb={6} mt={6} >
            <Box>
            <Text fontSize="24px" color="brown">Arnold</Text>
              <Center fontSize="14px" m="8px" >
                A FrontEnd Developer
                
              </Center>
              <Center fontSize="14px" m="8px">
                Backend Developer
                
              </Center>
              <Center fontSize="14px" m="8px" >
                Proficient in Redux
                
              </Center>


            </Box>
            <Box>
            <Text fontSize="24px" color="brown">NodeApi</Text>
              <Center fontSize="14px" m="8px">
                Building Api
              </Center>
              <Center fontSize="14px" m="8px">
                Crud Operations in Node
              </Center>
              <Center fontSize="14px" m="8px">
                Authorization & Authentication
              </Center>
            </Box>
            <Box>
              <Text fontSize="24px" color="brown">
              MongoDB
              </Text>
              <Center fontSize="14px" m="8px">
                MongoDB Operations
              </Center>
              <Center fontSize="14px" m="8px">
                Aggregation Pipeline
              </Center >
            </Box>
            <Box>
            <Text fontSize="24px" color="brown">Mongoose</Text>
              <Center fontSize="14px" m="8px" >
                Queries 
              </Center>
              <Center fontSize="14px" m="8px">
                Mongoose Commands
              </Center>
            </Box>
          </SimpleGrid>

          {/* <SimpleGrid columns={4} spacing={2}> */}
          <Center >
          <HStack spacing={12} m="24px" >

         
            {/* <Flex alignItems="center"><Text mr="6px">
            REACH me on</Text> <ImArrowRight2/></Flex> */}
            <Flex  fontSize="20px" alignItems="center">
              <BsInstagram />
             <Text m="6px"> @oshoobrain</Text>
            </Flex>
            <Flex fontSize="20px" alignItems="center">
              <BsTwitter/>
              <Text m="6px">  @schwarzi</Text>
             
            </Flex>
            <Flex fontSize="20px" alignItems="center">
              <BsGithub/>
              <Text m="6px"> Arnold-O</Text>
              
            </Flex>
            </HStack>
            </Center>
          {/* </SimpleGrid> */}
      
    </>
  )
}
