import { Box, List } from '@chakra-ui/react';
import CheckItem from './check-item';

export default function CheckList() {
  return (
    <Box>
      <List.Root as='ul' variant='plain' gap='4'>
        <CheckItem path='/projects' title='Projects' />
        <CheckItem path='/writings' title='Writings' />
        <CheckItem path='/bookmarks' title='Bookmarks' />
      </List.Root>
    </Box>
  );
}
