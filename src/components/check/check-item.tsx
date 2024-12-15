import { Flex, List, Text } from '@chakra-ui/react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';
import { CheckItemProps } from '../../types/check.type';

export default function CheckItem({ path, title }: CheckItemProps) {
  return (
    <List.Item borderRadius='sm'>
      <Link to={path}>
        <Flex gap='2' alignItems='center'>
          <Text color='gray.500' textDecoration='underline'>
            {title}
          </Text>
          <MdArrowOutward color='gray' />
        </Flex>
      </Link>
    </List.Item>
  );
}
