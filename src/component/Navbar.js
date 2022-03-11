import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { FaFacebookF, FaArrowRight} from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from 'react'

export default function Navbar() {
  return (
    <>
     <Container maxW="container.3xl">

<Flex alignItems="center" justifyContent="space-around" mt="8px">
<Box >
  <Flex  >      
<Text  >
<FaFacebookF  />

</Text >
<Text  ml="4px">
<BsInstagram />

</Text>
<Text ml="4px"  >
<BsTwitter />
</Text>

</Flex>
</Box>

<Box>
<Button colorScheme="teal" variant="ghost">
Home
</Button>
<Button colorScheme="teal" variant="ghost">
About
</Button>
<Button colorScheme="teal" variant="ghost">
Write
</Button>
<Button colorScheme="teal" variant="ghost">
Contact
</Button>
<Button colorScheme="teal" variant="ghost">
  Logout
</Button>
</Box>

<Box>
<Image
  borderRadius="full"
  boxSize="35px"
  src="https://bit.ly/dan-abramov"
  alt="Dan Abramov"
/>
{/* <Text fontSize="30px"
  position="absolute"
  top="10%"
  right="40%"
  color="cyan"
>
REACT MEET NODE
</Text> */}
</Box>
</Flex>

</Container>
      
    </>
  )
}
