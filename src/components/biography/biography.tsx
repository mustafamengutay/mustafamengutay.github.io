import { Box, Flex, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';

export default function Biography() {
  return (
    <Box as='section'>
      <Flex flexDirection='column' color='gray.500'>
        <Heading size='sm' marginBottom='6' color='black'>
          Now
        </Heading>
        <Text marginBottom='4'>
          I am passionate about developing scalable, robust and impressive
          solutions, and designing software systems. Currently working on{' '}
          <ChakraLink
            href='https://github.com/mustafamengutay/koly'
            textDecoration='underline'
            color='black'
          >
            koly
          </ChakraLink>
          .
        </Text>
        <Text>
          One more thing, I believe that little details make great things.
        </Text>
      </Flex>
    </Box>
  );
}
