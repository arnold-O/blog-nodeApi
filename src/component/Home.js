import { Box,  Center, Container, Divider, Flex, Grid, GridItem, HStack, Image, SimpleGrid, Text,  } from "@chakra-ui/react";
import { FaFacebookF, FaArrowRight} from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReviewsCard from "./ReviewsCard";
import data from  './Reviewdata'

export default function Home() {
  const [people] = useState(data)
  return (
    <div>
     <Navbar/>
      <Box maxW="100%" mt="22px">
        <Image
         src="/backg.jpg"
         w="100%"
         objectFit="cover"
         h="250px"
        />
            
        </Box>

        <Container maxW="container.xl" mt="12px" >

    
           
          <Grid
          
          templateColumns='repeat(6, 1fr)' gap={1}
          
          >

         
         
          <GridItem colSpan={4} mt="12px" >
          <Flex spacing={4} flexWrap="wrap">
          <Box  mr="40px" boxSize="300px"  mb="180px" >

          <Image w="100%"   h="280px" objectFit="cover" borderRadius="xl" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
         

          <Text fontSize="22px"  alignItems="center" maxW="sm"   p="16px">

            The Epic Story Of an OG
          
          
          </Text>
          <Text m="8px">1 hour ago</Text>
          <Text fontSize="12px"  >
          Generate random fake data and seed your application for easier development ... For example, you can combine our Users, stripe and subscription resources to ...
          </Text>
          



          </Box>
          {/* second card */}
          <Box  mr="40px" boxSize="300px"  mb="180px">

          <Image  w="100%" h="280px" objectFit="cover" borderRadius="xl" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
         

          <Text fontSize="22px"  alignItems="center" maxW="sm"   p="16px">

            The Epic Story Of an OG
          
          
          </Text>
          <Text m="8px">1 hour ago</Text>
          <Text fontSize="12px"   >
          Generate random fake data and  seed your application for easier development ... For example, you can combine our Users, stripe and subscription resources to ...
          </Text>
          



          </Box>

          {/* third card */}
          <Box   mr="40px" boxSize="300px"  mb="180px" >

          <Image  w="100%" h="280px" objectFit="cover" borderRadius="xl" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
         

          <Text fontSize="22px"  alignItems="center" maxW="sm"   p="16px">

            The Epic Story Of an OG
          
          
          </Text>
          <Text m="8px">1 hour ago</Text>
          <Text fontSize="12px"   >
          Generate random fake data and  seed your application for easier development ... For example, you can combine our Users, stripe and subscription resources to ...
          </Text>
          



          </Box>
          {/* fourth card */}
          <Box  mr="40px" boxSize="300px"  mb="180px" >

          <Image  w="100%" h="280px" objectFit="cover" borderRadius="xl" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
         

          <Text fontSize="22px"  alignItems="center" maxW="sm"   p="16px">

            The Epic Story Of an OG
          
          
          </Text>
          <Text m="8px">1 hour ago</Text>
          <Text fontSize="12px"   >
          Generate random fake data and  seed your application for easier development ... For example, you can combine our Users, stripe and subscription resources to ...
          </Text>
          



          </Box>


          </Flex>
          </GridItem>


          <GridItem  colSpan={2}  mt="12px" >
            <Divider/>
            ABOUT ME
            <Divider/>

             <Box  >

          <Image  mt="16px"  w="100%" h="280px" objectFit="cover" borderRadius="xl" src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/8398201/1.jpg?3932" alt='Dan Abramov' />
         

          <Text fontSize="12px" mt="24px" maxW="sm"  >
          Generate random fake data and  seed your application for easier development ... For example, you can combine our Users, stripe and subscription resources to ...
          </Text>
 
          </Box>
          <Box mt="12px">

          <Divider />
            Categories
            <Divider/>
            <Box mt="8px">
              <SimpleGrid  columns={2} spacing={6} >
                <Text>Life</Text>
                <Text>Music</Text>
                <Text>Sport</Text>
                <Text>Tech</Text>

              </SimpleGrid>

            </Box>


            <ReviewsCard people={people}/>
          
          </Box>
       
          </GridItem>
          
          

          </Grid>

          <Divider borderWidth="1px" mt="32px" ccolor="brown"/>
          <Text m="12px" colorScheme="skyblue">
            The Blog of The Twenty First CEntury Hurayy!!!!!!!!
          </Text>
          <Divider borderWidth="2px" />
            
       


          <Footer/>

        </Container>
        
    </div>
  );
}
