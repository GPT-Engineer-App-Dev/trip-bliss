import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Discover and book your next adventure with ease.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6} onClick={() => navigate('/search-flights')}>Start Your Journey</Button> {/* Update button to navigate to search-flights */}
      </VStack>
    </Container>
  );
};

export default Index;