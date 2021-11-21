import { Container, Flex, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Cart from '../src/sections/cart'
import Details from '../src/sections/details'



export default function Home() {
  return <Container maxW="container.xl">
    <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
      <Details />
      <Cart />
    </Flex>
  </Container>
}
