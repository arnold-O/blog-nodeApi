// import React from 'react'
import React, { useState } from "react";



import {
    Box,
    Button,
    Center,
    Container,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";


  export default function ReviewsCard({people}) {
 
      const background = [
          {
              id:1,
              color: "pink"
              
          },
          {
              id:2,
              color: 'skyblue'
  
          },
          {
              id:3,
              color: "lightgreen"
  
  
          }
      ]
      const [index, setIndex] = useState(0)
      const {color} = background[index]
      const {name , img, des, title} = people[index]
  
      const nextPerson = ()=>{
          setIndex((index)=>{
              if(index < people.length-1){
                  let nextReview = index + 1
  
              return nextReview
  
              }else{
                  return index = 0
              }
          
              
          })
      }
      const prevPerson = ()=>{
          setIndex((index)=>{
              if(index > 0){
          
              let nextReview = index - 1
  
              return nextReview
              }else{
                  return people.length-1
              }
          })
      }
  
    return (
      <div>
        <Container pt="20px" >
          <Divider/>
            <Text  p="8px" color="grey" >
             Top Stories
            </Text>
          <Divider/>
  
          <Box maxW="lg" maxH="sm" borderWidth="2px" borderRadius="xl" overflow="hidden" bgColor={color} mt="16px">
            <VStack m="16px">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={img}
                alt="Dan Abramov"
              ></Image>
  
              <Text fontSize="24px" color="black">{name}</Text>
              <Text fontSize="30px" color="black">{title}</Text>
  
              <Text color="grey"  fontSize="22px"  textAlign="center" maxW="sm" maxH="sm" p="8px">
                {des}
              </Text>
              <SimpleGrid columns={2} spacing={10}>
                  <Button onClick={prevPerson}  color="blue.400" fontSize="25px">
                <BsArrowLeftCircle />
  
                  </Button>
                  <Button onClick={nextPerson}color="blue.400"  fontSize="25px">
  
                <BsArrowRightCircle />
                </Button>
  
                </SimpleGrid>
             
            </VStack>
          </Box>
        </Container>
      </div>
    );
  }
  