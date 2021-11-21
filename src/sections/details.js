import React from 'react'
import { VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, useBreakpointValue } from '@chakra-ui/react'

function Details() {
  const colspan = useBreakpointValue({ base: 2, md: 1 })
  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start' >
      <VStack spacing={4} alignItems='flex-start'>
        <Heading size='2xl'>Your details</Heading>
        <Text>If you do not have an account, click here to login</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="123 street" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Delhi" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="US">USA</option>
              <option value="IN">India</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox colorScheme='brand' defaultChecked>Ship to billing</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant='primary' width="full" size="lg">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details
