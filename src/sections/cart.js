import React from 'react'
import { VStack, Heading, Text, Button, HStack, AspectRatio, Image, Stack, Divider, useColorMode, useColorModeValue } from '@chakra-ui/react'

function Cart() {

  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start' bg={bgColor}>
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size="2xl">Your Bag</Heading>
        <Text>If price is too hard on your eyes,{
          ' '}<Button variant="link" colorScheme="black" onClick={toggleColorMode}>try changing the theme</Button>
        </Text>
      </VStack>
      <HStack spacing={6} w="full" alignItems="center">
        <AspectRatio ratio={1} width={24}>
          <Image src='https://picsum.photos/24' alt="image" />
        </AspectRatio>
        <Stack spacing={0} w="full" direction="row" justify="space-between" alignItems="center">
          <VStack w='full' alignItems="flex-start">
            <Heading size="sm">Penny Boards</Heading>
            <Text color='gray.500'>KJHKJHKJHKJ</Text>
          </VStack>
          <Heading size='sm' textAlign="end">$120</Heading>
        </Stack>
      </HStack>
      <VStack w='full' alignItems="stretch" spacing={4}>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size='sm'>$120</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size='sm'>$10</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes(estemated)</Text>
          <Heading size='sm'>$5</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size='lg'>$135</Heading>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Cart
