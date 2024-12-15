import { Box, Flex } from '@chakra-ui/react';
import Header from '../header/header';
import Footer from '../footer/footer';

interface AppLayoutProps {
  children?: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box
      marginX='auto'
      paddingY='16'
      paddingX='6'
      maxWidth='43rem'
      letterSpacing='tight'
      fontSize='sm'
    >
      <Flex flexDirection='column' gap='24'>
        <Header />
        {children}
        <Footer />
      </Flex>
    </Box>
  );
}

export default AppLayout;
