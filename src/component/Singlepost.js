import { Box, Container, Image, Grid, Text, GridItem, Divider, SimpleGrid, MenuDivider } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Singlepost() {
  return (
    <div>

      <Navbar/>
        <Container maxW="container.xl" mt="12px">

          <Grid templateColumns='repeat(6, 1fr)' gap={12}>

       <GridItem colSpan={4}>

       
        <Box>

            <Image
              
              boxSize='150px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              w="100%"
              objectFit="cover"
              h="280px"
              borderRadius="2xl"


            />
            <Text fontSize="22px"  alignItems="center"    p="16px" color="brown" fontWeight="bold">
                Tittle of the post
            </Text>

            <Text fontSize="18px" letterSpacing="2px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>


        </Box>
        </GridItem>
        {/* second part of the grid */}
       


<GridItem  colSpan={2}  >
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
    <SimpleGrid columns={2} spacing={6} >
      <Text>Life</Text>
      <Text>Music</Text>
      <Text>Sport</Text>
      <Text>Tech</Text>

    </SimpleGrid>

  </Box>

</Box>

</GridItem>

        {/* second part of the grid */}
        </Grid>


        </Container>
        <Divider/>
        <Container maxW="container.3xl" mt={32}>
        <Divider borderWidth="3px"/>
       <Footer/>

          </Container>
      
    </div>
  )
}
