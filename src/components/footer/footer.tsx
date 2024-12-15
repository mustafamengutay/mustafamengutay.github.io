import { Box, Heading, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box color='gray.500'>
      <Heading size='sm' marginBottom='6' color='black'>
        Let's get in touch
      </Heading>
      You can send an{' '}
      <Link
        href='mailto:mustafamengutayy@gmail.com'
        target='_blank'
        textDecoration='underline'
      >
        Email
      </Link>
      , connect me on{' '}
      <Link
        href='https://www.linkedin.com/in/mustafamengutay/'
        target='_blank'
        textDecoration='underline'
      >
        Linkedin
      </Link>
      , and see my work on{' '}
      <Link
        href='https://github.com/mustafamengutay'
        target='_blank'
        textDecoration='underline'
      >
        GitHub
      </Link>{' '}
      and{' '}
      <Link
        href='https://dribbble.com/mustafamengutay'
        target='_blank'
        textDecoration='underline'
      >
        Dribbble
      </Link>
      .
    </Box>
  );
}
