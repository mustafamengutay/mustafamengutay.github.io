import { Box, Heading } from '@chakra-ui/react';
import CheckList from './check-list';

export default function Checks() {
  return (
    <Box>
      <Heading size='sm' marginBottom='6' color='black'>
        Check
      </Heading>
      <CheckList />
    </Box>
  );
}
