import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as='header'>
      <Flex flexDirection='column'>
        <Heading size='sm'>Mustafa Mengütay</Heading>
        <Heading size='sm' color='gray.500'>
          Software Engineer
        </Heading>
      </Flex>
    </Box>
  );
}
